
// Функція для відправки перекладу на сервер
async function saveTranslation(sourceText, translatedText) {
    try {
        const response = await fetch('/save_translation', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                sourceText,
                translatedText,
            }),
        });

        if (response.ok) {
            console.log('Translation saved successfully!');
        } else {
            console.error('Error saving translation:', response.statusText);
        }
    } catch (error) {
        console.error('Error saving translation:', error);
    }
}

// Ваша функція saveButton.addEventListener
saveButton.addEventListener('click', function() {
    let text = beforeText.value;
    let translatedText = afterText.value;

    // Відправка перекладу на сервер
    saveTranslation(text, translatedText);

    // Додавання перекладу до історії (як ви вже робите)
    let translationHistoryItem = document.createElement('div');
    translationHistoryItem.textContent = `${text} -> ${translatedText}`;
    historyDiv.appendChild(translationHistoryItem);
});
