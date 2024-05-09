/* Реєстрація і вхід, відновлення паролю */
document.addEventListener("DOMContentLoaded", function() {
  const loginForm = document.getElementById("login-form");
  const signupButton = document.getElementById("signup-button");
  const forgotPasswordButton = document.getElementById("forgot-password-button");

  // Переключення на форму реєстрації
  signupButton.addEventListener("click", function() {
    // Тут ви можете додати код для показу форми реєстрації
  });

  // Переключення на форму відновлення паролю
  forgotPasswordButton.addEventListener("click", function() {
    // Тут ви можете додати код для показу форми відновлення паролю
  });

  // Обробка форми входу
  loginForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Запобігаємо перезавантаженню сторінки

    const emailInput = document.getElementById("email-input");
    const passwordInput = document.getElementById("password-input");

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    // Тут ви можете додати код для обробки даних форми входу
    console.log("Email:", email);
    console.log("Password:", password);
  });
});