USE TransSave;
CREATE TABLE IF NOT EXISTS translations (
    id INT PRIMARY KEY NOT NULL,
    before_text TEXT,
    after_text TEXT,
    source_language VARCHAR(255),
    target_language VARCHAR(255)
);
