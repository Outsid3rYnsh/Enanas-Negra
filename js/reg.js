document.addEventListener('DOMContentLoaded', function() {
  // Отримуємо посилання на поля введення
  const emailInput = document.querySelector('input[type="email"]');
  const passwordInput = document.querySelector('input[type="password"]');
  const nameInput = document.querySelector('input[type="text"]');

  // Отримуємо посилання на кнопки
  const loginButton = document.querySelector('button:nth-child(1)');
  const signUpButton = document.querySelector('button:nth-child(2)');
  const forgotPasswordButton = document.querySelector('button:nth-child(3)');

  // Секретний ключ для підпису JWT токена
  const secretKey = '4NnTjp25tS';

  // Функція для генерації JWT токена
  function generateJWT(email, password, name) {
    const payload = { email, password, name };
    const options = { expiresIn: '1h' }; // Токен буде дійсним протягом 1 години
    const token = jwt.sign(payload, secretKey, options);
    return token;
  }

  // Функція для збереження даних користувача в localStorage
  function saveUser(email, password, name) {
    const user = { email, password, name };
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const token = generateJWT(email, password, name);

    // Зберігаємо JWT токен в HTTPOnly cookie
    document.cookie = `token=${token}; HttpOnly`;

    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
    alert('Реєстрація пройшла успішно!'); // Алерт про успішну реєстрацію
    emailInput.value = '';
    passwordInput.value = '';
    nameInput.value = ''; // Очищаємо поля введення
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
    const name = nameInput.value;

    // Перевірка, чи всі поля заповнені
    if (email && password && name) {
      // Перевірка, чи користувач з таким email вже існує
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      const existingUser = users.find(user => user.email === email);
      if (existingUser) {
        alert('Користувач з таким email вже існує');
      } else {
        saveUser(email, password, name);
      }
    } else {
      alert('Будь ласка, введіть свою електронну пошту, пароль та ім\'я.');
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