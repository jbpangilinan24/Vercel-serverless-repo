  try {
    const response = await fetch(
      'https://www.ripgerber.com/wp-json/wp/v2/categories'
    );
    const data = await response.json();

    // Allow any origin to fetch (bypass CORS)
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }