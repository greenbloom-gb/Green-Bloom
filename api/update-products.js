import { createClient } from '@supabase/supabase-js';

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Método não permitido' });

  try {
    const { id, ...data } = req.body;

    if (id) {
      const { error } = await supabase.from('products').update(data).eq('id', id);
      if (error) throw error;
      return res.status(200).json({ message: 'Produto atualizado!' });
    } else {
      const { error } = await supabase.from('products').insert([data]);
      if (error) throw error;
      return res.status(200).json({ message: 'Produto criado!' });
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
