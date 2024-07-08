const express = require('express');
const axios = require('axios');
const helmet = require('helmet');
const app = express();

app.use(helmet());
app.use(express.json());


const PORT = process.env.PORT || 5000;

app.get('/api/search', async (req, res) => {
  const { term, media } = req.query;
  const url = `https://itunes.apple.com/search?term=${term}&media=${media}`;

  try {
    const response = await axios.get(url);
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching data from iTunes API:', error);
    res.status(500).json({ error: 'Something went wrong' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
