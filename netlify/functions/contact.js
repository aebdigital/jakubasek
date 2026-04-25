const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(s) {
  return String(s)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function json(statusCode, body) {
  return {
    statusCode,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  };
}

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return json(405, { error: "Method Not Allowed" });
  }

  let payload;
  try {
    payload = JSON.parse(event.body || "{}");
  } catch {
    return json(400, { error: "Neplatné dáta." });
  }

  const name = String(payload.name || "").trim();
  const email = String(payload.email || "").trim();
  const message = String(payload.message || "").trim();
  const honeypot = String(payload.website || "").trim();

  if (honeypot) return json(200, { ok: true });

  if (!name || !email || !message) {
    return json(400, { error: "Prosím vyplňte všetky polia." });
  }
  if (!EMAIL_RE.test(email)) {
    return json(400, { error: "Neplatný e-mail." });
  }
  if (message.length > 5000) {
    return json(400, { error: "Správa je príliš dlhá." });
  }

  const apiKey = process.env.SMTP2GO_API_KEY;
  const sender = process.env.SMTP2GO_SENDER;
  const recipient = process.env.CONTACT_FORM_RECIPIENT;

  if (!apiKey || !sender || !recipient) {
    return json(500, { error: "E-mailová služba nie je nakonfigurovaná." });
  }

  try {
    const res = await fetch("https://api.smtp2go.com/v3/email/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Smtp2go-Api-Key": apiKey,
      },
      body: JSON.stringify({
        sender,
        to: [recipient],
        subject: `Nová správa z webu jakubasek.eu — ${name}`,
        text_body: `Meno: ${name}\nE-mail: ${email}\n\nSpráva:\n${message}\n`,
        html_body: `
          <h2>Nová správa z webu jakubasek.eu</h2>
          <p><strong>Meno:</strong> ${escapeHtml(name)}</p>
          <p><strong>E-mail:</strong> ${escapeHtml(email)}</p>
          <p><strong>Správa:</strong></p>
          <pre style="font-family:inherit;white-space:pre-wrap;">${escapeHtml(message)}</pre>
        `,
        custom_headers: [
          { header: "Reply-To", value: `${name} <${email}>` },
        ],
      }),
    });

    if (!res.ok) {
      const detail = await res.text();
      console.error("SMTP2GO error:", res.status, detail);
      return json(502, {
        error: "Správu sa nepodarilo odoslať. Skúste neskôr.",
      });
    }

    return json(200, { ok: true });
  } catch (err) {
    console.error("Contact function failure:", err);
    return json(500, {
      error: "Správu sa nepodarilo odoslať. Skúste neskôr.",
    });
  }
};
