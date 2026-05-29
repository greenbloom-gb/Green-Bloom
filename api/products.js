export default async function handler(req, res) {

  try {

    const response = await fetch(
      `${process.env.SUPABASE_URL}/rest/v1/products?select=*&order=created_at.desc`,
      {
        headers: {
          apikey:        process.env.SUPABASE_SERVICE_KEY,
          Authorization: `Bearer ${process.env.SUPABASE_SERVICE_KEY}`
        }
      }
    );

    if (!response.ok) {
      const err = await response.text();
      return res.status(response.status).json({ success: false, error: err });
    }

    const data = await response.json();

    // Cache leve: Vercel revalida a cada 30s
    res.setHeader('Cache-Control', 's-maxage=30, stale-while-revalidate');

    return res.status(200).json(data);

  } catch (error) {

    return res.status(500).json({ success: false, error: error.message });

  }

}
