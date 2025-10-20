export default async function handler(req, res) {
  try {
    const response = await fetch(
      'https://www.ripgerber.com/wp-json/wp/v2/posts?per_page=5'
    )
    const data = await response.json()

    // Allow GitHub Pages (or any domain) to access
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.status(200).json(data)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}
