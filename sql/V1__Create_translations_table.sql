CREATE TABLE Translations (
    ID INT PRIMARY KEY,
    SourceLanguage VARCHAR(255),
    TargetLanguage VARCHAR(255),
    SourceText TEXT,
    TranslatedText TEXT,
    CreatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
