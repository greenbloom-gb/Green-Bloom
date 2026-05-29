export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { password } = req.body;
  const adminPassword = process.env.ADMIN_PASSWORD;

  if (password === adminPassword) {
    // Retorna um "token" simples (pode ser qualquer string secreta sua)
    return res.status(200).json({ token: 'gb_authenticated_access_2026' });
  } else {
    return res.status(401).json({ error: 'Senha incorreta' });
  }
}
