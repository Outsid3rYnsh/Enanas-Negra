// Масив для зберігання зареєстрованих користувачів
const users = [];

// Отримуємо елементи форми
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const loginBtn = document.getElementById('login');
const signUpBtn = document.getElementById('signUp');
const forgotPasswordBtn = document.getElementById('forgotPassword');

// Функція для реєстрації користувача
function signUp(email, password) {
  const existingUser = users.find(user => user.email === email);
  if (existingUser) {
    console.log('Користувач з таким email вже існує');
    return;
  }

  const newUser = { email, password };
  users.push(newUser);
  console.log('Користувач успішно зареєстрований');
}

// Функція для входу користувача
function login(email, password) {
  const user = users.find(user => user.email === email && user.password === password);
  if (!user) {
    console.log('Неправильний email або пароль');
    return;
  }

  console.log('Успішний вхід');
}

// Функція для відновлення паролю
function forgotPassword(email) {
  const user = users.find(user => user.email === email);
  if (!user) {
    console.log('Користувач з таким email не знайдений');
    return;
  }

  console.log('Новий пароль був надісланий на електронну пошту', email);
}

// Обробник події для кнопки реєстрації
signUpBtn.addEventListener('click', () => {
  const email = emailInput.value;
  const password = passwordInput.value;
  signUp(email, password);
});

// Обробник події для кнопки входу
loginBtn.addEventListener('click', () => {
  const email = emailInput.value;
  const password = passwordInput.value;
  login(email, password);
});

// Обробник події для кнопки відновлення паролю
forgotPasswordBtn.addEventListener('click', () => {
  const email = emailInput.value;
  forgotPassword(email);
});