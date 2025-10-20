export default async function handler(req, res) {
  try {
    const response = await fetch(
      'https://www.ripgerber.com/wp-json/wp/v2/posts?per_page=5'
    );
    const data = await response.json();

    // Allow requests from any origin (CORS)
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
