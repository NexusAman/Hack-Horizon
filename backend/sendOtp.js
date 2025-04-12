const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

app.post('/api/send-otp', async (req, res) => {
  const { phone, otp } = req.body;

  try {
    const response = await axios.post('https://www.fast2sms.com/dev/bulkV2', {
      route: 'otp',
      variables_values: otp,
      numbers: phone
    }, {
      headers: {
        Authorization: 'Yylj8o1eLaICZ0GzIQFsBhia3i7YcKMGr50HX9puI14plfClbTCy7NUiXkn8', // 🔐 Replace with your actual API key
        'Content-Type': 'application/json'
      }
    });

    res.status(200).json({ message: 'OTP sent successfully!' });
  } catch (error) {
    console.error('Fast2SMS Error:', error.response?.data || error.message);
    res.status(500).json({ error: 'Failed to send OTP.' });
  }
});

app.listen(PORT, () => console.log(`🚀 Server running at http://localhost:${PORT}`));
