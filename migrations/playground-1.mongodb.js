// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use('TransHistory');

// Create a new document in the collection.
db.getCollection('SavedHistory').insertOne({
    {
        "_id": 1, // ID INT PRIMARY KEY
        "SourceLanguage": "en", // SourceLanguage VARCHAR(10)
        "TargetLanguage": "es", // TargetLanguage VARCHAR(10)
        "SourceText": "Hello", // SourceText TEXT
        "TranslatedText": "Hola", // TranslatedText TEXT
        "CreatedAt": ISODate("2024-05-10T00:00:00Z") // CreatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
     }
     
});
