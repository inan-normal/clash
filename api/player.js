export default async function handler(req, res) {
  const { tag } = req.query;

  // Token burada direkt yazıldı
  const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjBkMzc1MWIyLTExNGMtNDkxYi05ZGE4LTc4ODhjN2Q4Y2M5MiIsImlhdCI6MTc1ODQ2NTI4Niwic3ViIjoiZGV2ZWxvcGVyLzg1NThjY2ZlLWJkNTEtYmVjMC1mNTdmLWExNGU1MjMxZGU2OCIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjE4NS4yNy4xMzQuMTIzIl0sInR5cGUiOiJjbGllbnQifV19.cobvXHigdWzf7OR_O_PDI01DZ91JxlWy7GXuNtTcD9Sj4VOsX0etrJra5AyeaiQmQXuMQx07wfo_mC4iAHxHkw";

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
