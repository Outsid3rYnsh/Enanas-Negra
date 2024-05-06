document.addEventListener('DOMContentLoaded', function() {
  // Отримуємо посилання на поля введення
  const emailInput = document.querySelector('input[type="email"]');
  const passwordInput = document.querySelector('input[type="password"]');

  // Отримуємо посилання на кнопки
  const loginButton = document.querySelector('button:nth-child(1)');
  const signUpButton = document.querySelector('button:nth-child(2)');
  const forgotPasswordButton = document.querySelector('button:nth-child(3)');

  // Обробник події для кнопки "Sign Up"
  signUpButton.addEventListener('click', () => {
    const email = emailInput.value;
    const password = passwordInput.value;

    // Перевірка, чи всі поля заповнені
    if (email && password) {
      // Тут ви можете додати логіку для відправки даних на сервер
      // та обробки відповіді (наприклад, використовуючи fetch або XMLHttpRequest)

      // Для прикладу, просто виводимо введені дані в консоль
      console.log('Email:', email);
      console.log('Password:', password);

      alert('Реєстрація пройшла успішно!');
      // Очищаємо поля введення після успішної реєстрації
      emailInput.value = '';
      passwordInput.value = '';
    } else {
      alert('Будь ласка, введіть свою електронну пошту та пароль.');
    }
  });

  // Обробник події для кнопки "Login"
  loginButton.addEventListener('click', () => {
    const email = emailInput.value;
    const password = passwordInput.value;

    // Тут ви можете додати логіку для перевірки введених даних
    // та авторизації користувача (наприклад, використовуючи fetch або XMLHttpRequest)

    // Для прикладу, просто виводимо введені дані в консоль
    console.log('Email:', email);
    console.log('Password:', password);
  });

  // Обробник події для кнопки "Forgot Password"
  forgotPasswordButton.addEventListener('click', () => {
    // Тут ви можете додати логіку для відновлення пароля
    // (наприклад, надсилання електронного листа з посиланням на скидання пароля)
    alert('Ви будете перенаправлені на сторінку скидання пароля.');
  });
});