export default async function handler(req, res) {
  const { code } = req.query;
  if (!code) return res.status(400).send('No code provided');

  const params = new URLSearchParams({
    code,
    client_id: process.env.GOOGLE_CLIENT_ID,
    client_secret: process.env.GOOGLE_CLIENT_SECRET,
    redirect_uri: process.env.REDIRECT_URI || 'https://shukatsu-agent-nine.vercel.app/api/callback',
    grant_type: 'authorization_code',
  });

  try {
    const response = await fetch('https://oauth2.googleapis.com/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: params.toString(),
    });
    const data = await response.json();
    if (data.error) return res.status(400).send(`Error: ${data.error_description}`);

    const html = `<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"><title>認証完了</title>
<style>body{background:#060810;color:#6ee7b7;font-family:sans-serif;display:flex;align-items:center;justify-content:center;height:100vh;margin:0;flex-direction:column;gap:16px;}</style>
</head>
<body>
<div style="font-size:48px">✅</div>
<div style="font-size:20px;font-weight:700">Google Calendar 連携完了！</div>
<div style="font-size:13px;opacity:0.6">このページを閉じてください</div>
<script>
  const tokens = ${JSON.stringify({ access_token: data.access_token, refresh_token: data.refresh_token })};
  if (window.opener) {
    window.opener.postMessage({ type: 'GOOGLE_AUTH_SUCCESS', tokens }, '*');
    setTimeout(() => window.close(), 1500);
  }
</script>
</body>
</html>`;
    res.setHeader('Content-Type', 'text/html');
    return res.status(200).send(html);
  } catch (e) {
    return res.status(500).send(`Error: ${e.message}`);
  }
}
