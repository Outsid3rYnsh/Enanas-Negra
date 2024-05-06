const http = require('http');
const fs = require('fs');
const path = require('path');
const mysql = require('mysql2');

// Налаштування підключення до бази даних
const dbConfig = {
    host: '127.0.0.1',
    user: 'root',
    password: 'password', // Ваш пароль для бази даних
    database: 'saveHistory'
};

// Створення з'єднання з базою даних
const connection = mysql.createConnection(dbConfig);

// Підключення до бази даних
connection.connect((err) => {
    if (err) {
        console.error('Помилка підключення до бази даних:', err);
        return;
    }
    console.log('Підключено до бази даних!');
});

const server = http.createServer((req, res) => {
    if (req.method === 'POST' && req.url === '/translate') {
        let body = '';
        req.on('data', (chunk) => {
            body += chunk.toString();
        });
        req.on('end', () => {
            const { originalText, translatedText } = JSON.parse(body);
            saveTranslation(originalText, translatedText);
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: 'Translation saved successfully!' }));
        });
    } else {
        // Обробка інших запитів, якщо потрібно
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Page Not Found');
    }
});

// Функція для збереження перекладу в базу даних
function saveTranslation(originalText, translatedText) {
    // Створення SQL запиту для вставки перекладу
    const sql = `INSERT INTO translations (original_text, translated_text) VALUES (?, ?)`;

    // Виконання запиту з параметрами
    connection.query(sql, [originalText, translatedText], (err, result) => {
        if (err) {
            console.error('Помилка збереження перекладу:', err);
            return;
        }
        console.log('Переклад успішно збережено!');
    });
}

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
