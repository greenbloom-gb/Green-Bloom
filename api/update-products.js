export default async function handler(req, res) {

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Método não permitido' });
  }

  try {

    const {
      id,
      name,
      description,
      category,
      image,
      badge,
      shopee_link,
      mercadolivre_link,
      amazon_link,
      tiktok_link
    } = req.body;

    if (!name) {
      return res.status(400).json({ success: false, error: 'Nome é obrigatório' });
    }

    const payload = {
      name,
      description:       description       || null,
      category:          category          || null,
      image:             image             || null,
      badge:             badge             || null,
      shopee_link:       shopee_link       || null,
      mercadolivre_link: mercadolivre_link || null,
      amazon_link:       amazon_link       || null,
      tiktok_link:       tiktok_link       || null
    };

    // Se vier com ID → atualiza. Sem ID → insere novo.
    const isUpdate = Boolean(id);

    const url = isUpdate
      ? `${process.env.SUPABASE_URL}/rest/v1/products?id=eq.${id}`
      : `${process.env.SUPABASE_URL}/rest/v1/products`;

    const response = await fetch(url, {
      method: isUpdate ? 'PATCH' : 'POST',
      headers: {
        apikey:          process.env.SUPABASE_SERVICE_KEY,
        Authorization:  `Bearer ${process.env.SUPABASE_SERVICE_KEY}`,
        'Content-Type': 'application/json',
        Prefer:         'return=representation'
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      const err = await response.text();
      return res.status(response.status).json({ success: false, error: err });
    }

    const data = await response.json();

    return res.status(200).json({ success: true, data });

  } catch (error) {

    return res.status(500).json({ success: false, error: error.message });

  }

}
