const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg');

const app = express();
app.use(bodyParser.json());

const pool = new Pool({
  host: 'db',
  port: 5432,
  user: 'postgres',
  password: 'example',
  database: 'BDshechka'
});

app.post('/save', async (req, res) => {
  const { sourceLanguage, targetLanguage, sourceText, translatedText } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO Translations (SourceLanguage, TargetLanguage, SourceText, TranslatedText) VALUES ($1, $2, $3, $4) RETURNING ID',
      [sourceLanguage, targetLanguage, sourceText, translatedText]
    );
    res.json({ status: 'success', id: result.rows[0].id });
  } catch (err) {
    console.error(err);
    res.json({ status: 'error' });
  }
});


app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
