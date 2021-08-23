const express = require('express');
const fs = require('fs');
const cors = require('cors');
const app = express();

const data = fs.readFileSync(`${__dirname}/data/demo-data-for-ecommerce.json`);

const content = JSON.parse(data).content;
app.use(cors());

app.get('/api/:id', (req, res) => {
  // console.log(req.params);
  res.json({
    chatbotMes: content[req.params.id],
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`App is running http://localhost:${PORT}`);
});
