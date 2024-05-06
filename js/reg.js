document.addEventListener('DOMContentLoaded', function() {
  // Отримуємо посилання на поля введення
  const emailInput = document.querySelector('input[type="email"]');
  const passwordInput = document.querySelector('input[type="password"]');

  // Отримуємо посилання на кнопки
  const loginButton = document.querySelector('button:nth-child(1)');
  const signUpButton = document.querySelector('button:nth-child(2)');
  const forgotPasswordButton = document.querySelector('button:nth-child(3)');

  // Функція для збереження даних користувача в localStorage
  function saveUser(email, password) {
    const user = { email, password };
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
  }

  // Функція для перевірки даних користувача
  function checkUser(email, password) {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    return users.some(user => user.email === email && user.password === password);
  }

  // Обробник події для кнопки "Sign Up"
  signUpButton.addEventListener('click', () => {
    const email = emailInput.value;
    const password = passwordInput.value;

    // Перевірка, чи всі поля заповнені
    if (email && password) {
      // Перевірка, чи користувач з таким email вже існує
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      const existingUser = users.find(user => user.email === email);

      if (existingUser) {
        alert('Користувач з таким email вже існує');
      } else {
        saveUser(email, password);
        alert('Реєстрація пройшла успішно!');
        emailInput.value = '';
        passwordInput.value = '';
      }
    } else {
      alert('Будь ласка, введіть свою електронну пошту та пароль.');
    }
  });

  // Обробник події для кнопки "Login"
  loginButton.addEventListener('click', () => {
    const email = emailInput.value;
    const password = passwordInput.value;

    // Перевірка, чи введені дані відповідають збереженим даним користувача
    if (checkUser(email, password)) {
      alert('Авторизація пройшла успішно!');
    } else {
      alert('Невірний email або пароль');
    }
  });

  // Обробник події для кнопки "Forgot Password"
  forgotPasswordButton.addEventListener('click', () => {
    const email = prompt('Введіть свій email для відновлення пароля');

    if (email) {
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      const user = users.find(user => user.email === email);

      if (user) {
        const newPassword = prompt('Введіть новий пароль');
        if (newPassword) {
          user.password = newPassword;
          localStorage.setItem('users', JSON.stringify(users));
          alert('Пароль було успішно оновлено');
        }
      } else {
        alert('Користувач з таким email не знайдено');
      }
    }
  });
});