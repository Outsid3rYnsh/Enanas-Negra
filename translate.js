let sourceLanguageSelect = document.getElementById('sourceLanguage');
let targetLanguageSelect = document.getElementById('targetLanguage');
let beforeText = document.getElementById('beforeText');
let afterText = document.getElementById('afterText');
let historyDiv = document.getElementById('history');
let saveButton = document.getElementById('saveButton');

// Підготовка варіантів мови
for (let countryCode in language) {
    let option = document.createElement('option');
    option.value = countryCode;
    option.textContent = language[countryCode];
    sourceLanguageSelect.appendChild(option.cloneNode(true));
    targetLanguageSelect.appendChild(option);
}

// Функція для отримання перекладу
function translateText() {
    let sourceLanguage = sourceLanguageSelect.value;
    let targetLanguage = targetLanguageSelect.value;
    let text = beforeText.value;

    // URL сервісу MyMemory Translate
    let translateURL = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${sourceLanguage}|${targetLanguage}`;

    // Виконання запиту на переклад
    fetch(translateURL)
        .then(response => response.json())
        .then(data => {
            afterText.value = data.responseData.translatedText;
        })
        .catch(error => console.error('Translation error:', error));
}

// Обробник події click для кнопки saveButton
saveButton.addEventListener('click', function() {
    let text = beforeText.value;
    let translatedText = afterText.value;

    // Додавання перекладу до історії
    let translationHistoryItem = document.createElement('div');
    translationHistoryItem.textContent = `${text} -> ${translatedText}`;
    historyDiv.appendChild(translationHistoryItem);
});

// Обробник події input для текстового поля beforeText
beforeText.addEventListener('input', translateText);
