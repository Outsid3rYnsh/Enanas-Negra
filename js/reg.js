/* Реєстрація і вхід, відновлення паролю */
document.addEventListener("DOMContentLoaded", function() {
  // Отримуємо потрібні елементи зі сторінки
  const registerLink = document.getElementById("registerLink");
  const loginLink = document.getElementById("loginLink");
  const forgotPasswordLink = document.getElementById("forgotPasswordLink");

  // Реєстрація
  registerLink.addEventListener("click", function() {
    // Приховуємо перший .wrapper (ймовірно, форма входу)
    document.querySelectorAll(".wrapper")[0].style.display = "none";
    // Показуємо другий .wrapper (ймовірно, форма реєстрації)
    document.querySelectorAll(".wrapper")[1].style.display = "block";
  });

  // Вхід
  loginLink.addEventListener("click", function() {
    // Приховуємо другий .wrapper (форма реєстрації)
    document.querySelectorAll(".wrapper")[1].style.display = "none";
    // Показуємо перший .wrapper (форма входу)
    document.querySelectorAll(".wrapper")[0].style.display = "block";
  });

  // Створення нового паролю
  forgotPasswordLink.addEventListener("click", function() {
    // Приховуємо перший .wrapper (форма входу)
    document.querySelectorAll(".wrapper")[0].style.display = "none";
    // Показуємо третій .wrapper (ймовірно, форма для відновлення паролю)
    document.querySelectorAll(".wrapper")[2].style.display = "block";
  });

  const loginLinkForgotPassword = document.getElementById("loginLinkForgotPassword");
  loginLinkForgotPassword.addEventListener("click", function() {
    // Приховуємо третій .wrapper (форма для відновлення паролю)
    document.querySelectorAll(".wrapper")[2].style.display = "none";
    // Показуємо перший .wrapper (форма входу)
    document.querySelectorAll(".wrapper")[0].style.display = "block";
  });
});