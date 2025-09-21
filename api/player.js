export default async function handler(req, res) {
  const { tag, token } = req.query;

  if (!tag || !token) {
    return res.status(400).json({ error: "Player tag ve token gerekli" });
  }

  try {
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
  } catch (err) {
    res.status(500).json({ error: "Sunucu hatası" });
  }
}
