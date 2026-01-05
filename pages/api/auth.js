export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }

  // For now just confirm Pi auth reached backend
  res.status(200).json({ success: true });
}
