document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Запобігає відправці форми
  
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
  
    if (password !== confirmPassword) {
      alert('Паролі не співпадають!');
      return;
    }
    alert('Реєстрація успішна!');
  });