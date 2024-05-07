document.getElementById('saveButton').addEventListener('click', function() {
    const beforeText = localStorage.getItem('beforeText');
    const afterText = localStorage.getItem('afterText');
    const sourceLanguage = localStorage.getItem('sourceLanguage');
    const targetLanguage = localStorage.getItem('targetLanguage');

    fetch('/saveDataToDatabase', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            sourceLanguage: sourceLanguage,
            beforeText: beforeText,
            targetLanguage: targetLanguage,
            afterText: afterText
        })
    })
    .then(response => {
        if (response.ok) {
            console.log('Дані успішно відправлені на сервер.');
        } else {
            console.error('Сталася помилка під час відправлення даних на сервер.');
        }
    })
    .catch(error => {
        console.error('Сталася помилка:', error);
    });
});
