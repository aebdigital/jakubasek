import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(s: string) {
  return s
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Neplatné dáta." }, { status: 400 });
  }

  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const message = String(body.message ?? "").trim();
  const honeypot = String(body.website ?? "").trim();

  if (honeypot) {
    return NextResponse.json({ ok: true });
  }

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Prosím vyplňte všetky polia." },
      { status: 400 }
    );
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Neplatný e-mail." }, { status: 400 });
  }
  if (message.length > 5000) {
    return NextResponse.json({ error: "Správa je príliš dlhá." }, { status: 400 });
  }

  const apiKey = process.env.SMTP2GO_API_KEY;
  const sender = process.env.SMTP2GO_SENDER;
  const recipient = process.env.CONTACT_FORM_RECIPIENT;

  if (!apiKey || !sender || !recipient) {
    return NextResponse.json(
      { error: "E-mailová služba nie je nakonfigurovaná." },
      { status: 500 }
    );
  }

  const subject = `Nová správa z webu jakubasek.eu — ${name}`;
  const textBody = `Meno: ${name}\nE-mail: ${email}\n\nSpráva:\n${message}\n`;
  const htmlBody = `
    <h2>Nová správa z webu jakubasek.eu</h2>
    <p><strong>Meno:</strong> ${escapeHtml(name)}</p>
    <p><strong>E-mail:</strong> ${escapeHtml(email)}</p>
    <p><strong>Správa:</strong></p>
    <pre style="font-family:inherit;white-space:pre-wrap;">${escapeHtml(message)}</pre>
  `;

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
        subject,
        text_body: textBody,
        html_body: htmlBody,
        custom_headers: [
          { header: "Reply-To", value: `${name} <${email}>` },
        ],
      }),
    });

    if (!res.ok) {
      const detail = await res.text();
      console.error("SMTP2GO error:", res.status, detail);
      return NextResponse.json(
        { error: "Správu sa nepodarilo odoslať. Skúste neskôr." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact form failure:", err);
    return NextResponse.json(
      { error: "Správu sa nepodarilo odoslať. Skúste neskôr." },
      { status: 500 }
    );
  }
}
