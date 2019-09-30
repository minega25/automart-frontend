const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const cors = require('cors');

dotenv.config();

const app = express();
const distPath = path.join(__dirname, '../dist');
const htmlIndex = path.join(distPath, 'index.html');
const port = process.env.PORT || 8080;
app.use(express.static(distPath));
app.use(cors());
app.get('/', (req, res) => {
  res.send(htmlIndex);
});
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Author's Haven running on port: ${port}`);
});
