CREATE TABLE Translations (
    ID INT PRIMARY KEY,
    SourceLanguage VARCHAR(10),
    TargetLanguage VARCHAR(10),
    SourceText TEXT,
    TranslatedText TEXT,
    CreatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
