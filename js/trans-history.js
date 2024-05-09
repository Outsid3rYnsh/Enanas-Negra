const MongoClient = require('mongodb').MongoClient;

// Підключення до MongoDB
const client = new MongoClient('mongodb://localhost:27017');
client.connect(err => {
  if (err) {
    console.error(err);
    return;
  }

  const db = client.db('translations');
  const collection = db.collection('translations');

  // Зберігання даних перекладу
  const translationData = {
    beforeText: 'Hello, world!',
    afterText: 'Привіт, світ!',
    sourceLanguage: 'en',
    targetLanguage: 'uk'
  };

  collection.insertOne(translationData, (err, result) => {
    if (err) {
      console.error(err);
      return;
    }

    console.log('Translation saved successfully:', result.insertedId);
  });

  // Отримання даних перекладу
  collection.findOne({ beforeText: 'Sueta...' }, (err, translation) => {
    if (err) {
      console.error(err);
      return;
    }

    if (translation) {
      console.log('Translated text:', translation.afterText);
    } else {
      console.log('Translation not found');
    }
  });

  // Закриття з'єднання з MongoDB
  client.close();
});
