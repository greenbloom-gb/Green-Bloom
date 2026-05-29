export default async function handler(req, res) {

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Método não permitido' });
  }

  try {

    const { id } = req.body;

    if (!id) {
      return res.status(400).json({ success: false, error: 'ID é obrigatório' });
    }

    const response = await fetch(
      `${process.env.SUPABASE_URL}/rest/v1/products?id=eq.${id}`,
      {
        method: 'DELETE',
        headers: {
          apikey:        process.env.SUPABASE_SERVICE_KEY,
          Authorization: `Bearer ${process.env.SUPABASE_SERVICE_KEY}`,
          Prefer:        'return=minimal'
        }
      }
    );

    if (!response.ok) {
      const err = await response.text();
      return res.status(response.status).json({ success: false, error: err });
    }

    return res.status(200).json({ success: true });

  } catch (error) {

    return res.status(500).json({ success: false, error: error.message });

  }

}
