const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

// Дозволяємо обробку JSON-даних
app.use(express.json());

// Маршрут для збереження перекладів
app.post('/save-translation', (req, res) => {
    const { text, translatedText } = req.body;

    // Зберігаємо переклад у файлі translations.json
    const translation = { text, translatedText };
    fs.readFile('translations.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading translations file:', err);
            return res.status(500).send('Error saving translation');
        }

        const translations = JSON.parse(data);
        translations.push(translation);

        fs.writeFile('translations.json', JSON.stringify(translations), 'utf8', (err) => {
            if (err) {
                console.error('Error writing translations file:', err);
                return res.status(500).send('Error saving translation');
            }
            res.status(200).send('Translation saved successfully');
        });
    });
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
