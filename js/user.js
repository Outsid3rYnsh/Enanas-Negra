// Аватар
// Показати/приховати вікно з інформацією про користувача та кнопку вихід з аккаунту при кліку на аватар
document.querySelector('.avatar').addEventListener('click', function() {
    var userDetails = document.querySelector('.user-details');
    if (userDetails.style.display === 'none' || userDetails.style.display === '') {
      userDetails.style.display = 'block';
      // Перевірка, чи користувач зареєстрований
      if (userIsLoggedIn()) {
        // Якщо користувач зареєстрований, відображаємо профіль
        showUserProfile();
      } else {
        // Якщо користувач не зареєстрований, відображаємо повідомлення "Зареєструйтесь"
        document.getElementById('user-name').value = 'Зареєструйтесь';
        // Приховуємо електронну пошту
        document.getElementById('user-email').style.display = 'none';
        // І приховуємо кнопку вийти з аккаунту
        var logoutButton = document.querySelector('.user-details button');
        if (logoutButton) {
          logoutButton.style.display = 'none';
        }
      }
    } else {
      userDetails.style.display = 'none';
    }
  });
  
  // Перевірка, чи користувач зареєстрований
  function userIsLoggedIn() {
    return false; // Змініть на true, якщо користувач зареєстрований
  }
  
  // Показати профіль користувача
  function showUserProfile() {
    // Відображення профілю з даними користувача
    document.getElementById('user-name').value = 'Ім\'я користувача';
    // Приховати електронну пошту
    document.getElementById('user-email').style.display = 'none';
    // І показати кнопку вийти з аккаунту
    var logoutButton = document.createElement('button');
    logoutButton.textContent = 'Вийти з аккаунту';
    logoutButton.addEventListener('click', function() {
      console.log('Ви вийшли з аккаунту.');
    });
    // Кнопка вихід під ім'я та електронну пошту користувача
    var userDetails = document.querySelector('.user-details');
    userDetails.appendChild(logoutButton);
  }