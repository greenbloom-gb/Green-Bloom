import { createClient } from '@supabase/supabase-js';

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Método não permitido' });

  try {
    const { id } = req.body;
    const { error } = await supabase.from('products').delete().eq('id', id);
    if (error) throw error;
    return res.status(200).json({ message: 'Produto removido!' });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
