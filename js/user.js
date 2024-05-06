document.addEventListener('DOMContentLoaded', function() {
    // Отримуємо необхідні елементи з DOM
    var avatarContainer = document.querySelector('.avatar-container');
    var userDetails = document.querySelector('.user-details');
    var userNameInput = document.getElementById('user-name');
    var userEmail = document.getElementById('user-email');
    var loginButton = document.querySelector('button:nth-child(1)'); // Кнопка входу

    // Функція для перевірки, чи користувач авторизований
    function isLoggedIn() {
        return localStorage.getItem('loggedIn') === 'true';
    }

    // Функція для відображення інформації про користувача
    function showUserInfo() {
        var email = localStorage.getItem('email');
        userEmail.textContent = email;
        userDetails.style.display = 'block';
    }

    // Обробник події для кнопки "Login"
    loginButton.addEventListener('click', function() {
        var email = document.querySelector('input[type="email"]').value;
        var password = document.querySelector('input[type="password"]').value;
        
        // Перевіряємо, чи введені дані відповідають збереженим даним користувача
        if (checkUser(email, password)) {
            localStorage.setItem('loggedIn', 'true');
            localStorage.setItem('email', email);
            alert('Авторизація пройшла успішно!');
            showUserInfo();
        } else {
            alert('Невірний email або пароль');
        }
    });

    // Перевіряємо, чи користувач авторизований і відображаємо інформацію про нього
    if (isLoggedIn()) {
        showUserInfo();
    }

    // Функція для виходу з аккаунту
    function logout() {
        localStorage.clear();
        userDetails.style.display = 'none';
        alert('Logged out!');
    }

    // Додаємо обробник події для кнопки виходу
    document.getElementById('logout-button').addEventListener('click', function(event) {
        event.stopPropagation();
        logout();
    });
});


