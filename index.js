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

// Отримання перекладу
app.post('/translate', async (req, res) => {
  const { sourceLanguage, targetLanguage, text } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO Translations (SourceLanguage, TargetLanguage, SourceText, TranslatedText) VALUES ($1, $2, $3, $4) RETURNING ID',
      [sourceLanguage, targetLanguage, text, translatedText]
    );
    res.json({ status: 'success', id: result.rows[0].id });
  } catch (err) {
    console.error(err);
    res.json({ status: 'error' });
  }
});

// Оновлення перекладу
app.put('/translate/:id', async (req, res) => {
  const id = req.params.id;
  const { translatedText } = req.body;
  try {
    await pool.query(
      'UPDATE Translations SET TranslatedText = $1 WHERE ID = $2',
      [translatedText, id]
    );
    res.json({ status: 'success' });
  } catch (err) {
    console.error(err);
    res.json({ status: 'error' });
  }
});

// Видалення перекладу
app.delete('/translate/:id', async (req, res) => {
  const id = req.params.id;
  try {
    await pool.query(
      'DELETE FROM Translations WHERE ID = $1',
      [id]
    );
    res.json({ status: 'success' });
  } catch (err) {
    console.error(err);
    res.json({ status: 'error' });
  }
});

app.listen(3000, () => {
  console.log('Сервер працює на порті 3000');
});