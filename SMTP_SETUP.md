# SMTP2GO setup for the contact form

The contact form on the homepage POSTs JSON to `/api/contact`.

- **Local dev / Vercel:** the Next.js Route Handler at
  [`src/app/api/contact/route.ts`](src/app/api/contact/route.ts) handles the request directly.
- **Netlify:** the same path is rewritten by [`netlify.toml`](netlify.toml) to
  [`netlify/functions/contact.js`](netlify/functions/contact.js), which is a 1:1 mirror of the Next.js handler implemented as a serverless function.

Both paths call the SMTP2GO HTTP API. No SMTP library is required.

## 1. Create an SMTP2GO API key

1. Sign in at <https://app.smtp2go.com>.
2. **Settings → API Keys → Add API Key.**
3. Give it permissions: `Email send`.
4. Copy the key (starts with `api-...`).

## 2. Verify a sender domain or address

In **Settings → Sender Domains**, add and verify the domain you want emails to come from (e.g. `jakubasek.eu`). Until the domain is verified, SMTP2GO will reject sends.

For testing you can also use a verified single sender address.

## 3. Set environment variables

Copy `.env.example` to `.env.local` for local dev:

```bash
cp .env.example .env.local
```

Required variables:

| Variable | Description |
| --- | --- |
| `SMTP2GO_API_KEY` | API key from step 1, e.g. `api-XXXX...` |
| `SMTP2GO_SENDER` | Verified `From` address, e.g. `Jakubasek <noreply@jakubasek.eu>` |
| `CONTACT_FORM_RECIPIENT` | Inbox that receives submissions, e.g. `jaroslavjakubasek@gmail.com` |
| `NEXT_PUBLIC_SITE_URL` | Public origin used in SEO/sitemap/JSON-LD |

### On Netlify

Add the same three SMTP variables in **Site settings → Environment variables** (production scope). They are available to both `netlify/functions/contact.js` and the Next.js handler. Do **not** prefix them with `NEXT_PUBLIC_` — they must stay server-side.

### On Vercel

Add them under **Project → Settings → Environment Variables** (Production + Preview).

## 4. Smoke test

```bash
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@example.com","message":"hello"}'
# => {"ok":true}
```

A 500 response with `"E-mailová služba nie je nakonfigurovaná."` means at least one env var is missing.

## 5. Anti-spam

- Server-side honeypot (`website` field). If a bot fills it, the request returns `200 OK` without sending.
- E-mail format and length validation.
- All HTML rendered in the outgoing e-mail is escaped.

## 6. Troubleshooting

- **`401 Unauthorized` from SMTP2GO** → API key wrong or revoked.
- **`Sender address not authorized`** → verify the sender domain.
- **`502` returned to client** → check function logs (Netlify) or server logs (Vercel/local) for the `SMTP2GO error:` line, which contains the upstream payload.
