const mysql = require('mysql2/promise');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Підключення до бази даних
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'FuckThisDatabaseLMAO69',
    database: 'TransSave'
});

app.use(bodyParser.json());

// Маршрут для отримання даних з бази даних через GET
app.get('/saveDataToDatabase', async (req, res) => {
    try {
        // Отримання даних з таблиці translations
        const [rows, fields] = await connection.execute(
            'SELECT * FROM translations'
        );

        console.log('Дані успішно отримані з бази даних.');
        res.status(200).json(rows);
    } catch (error) {
        console.error('Помилка при отриманні даних з бази даних:', error);
        res.status(500).send('Сталася помилка при отриманні даних з бази даних.');
    }
});

// Маршрут для додавання даних у базу даних через POST
app.post('/saveDataToDatabase', async (req, res) => {
    const { beforeText, afterText, sourceLanguage, targetLanguage } = req.body;

    try {
        // Вставка даних у таблицю translations
        const [rows, fields] = await connection.execute(
            'INSERT INTO translations (before_text, after_text, source_language, target_language) VALUES (?, ?, ?, ?)',
            [beforeText, afterText, sourceLanguage, targetLanguage]
        );

        console.log('Дані успішно збережені у базі даних.');
        res.status(200).send('Дані успішно збережені.');
    } catch (error) {
        console.error('Помилка при збереженні даних у базу даних:', error);
        res.status(500).send('Сталася помилка при збереженні даних у базу даних.');
    }
});

// Запуск сервера
app.listen(port, () => {
    console.log(`Сервер запущений на порті ${port}`);
});
