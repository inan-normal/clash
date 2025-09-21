export default async function handler(req, res) {
  const { tag } = req.query; // URL'den oyuncu tag'i al
  const token = process.env.CLASH_API_TOKEN; // Vercel Environment Variable

  const response = await fetch(
    `https://api.clashofclans.com/v1/players/${encodeURIComponent(tag)}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (!response.ok) {
    return res.status(response.status).json({ error: "API hatası" });
  }

  const data = await response.json();
  res.status(200).json(data);
}
