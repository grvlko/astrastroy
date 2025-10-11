// Мобильное меню
var body = document.querySelector('body')
var menuTrigger = document.querySelector('#toggle-main-menu-mobile');
var menuContainer = document.querySelector('#main-menu-mobile');

if (menuTrigger) {
  menuTrigger.addEventListener('click', function() {
      menuContainer.classList.toggle('open');
      menuTrigger.classList.toggle('is-active')
      body.classList.toggle('lock-scroll')
  });
}

// Проверка формы обратной связи
document.addEventListener('DOMContentLoaded', function() {
  var form = document.querySelector('form[action*="formspree"]');
  
  if (form) {
    form.addEventListener('submit', function(e) {
      var phone = document.getElementById('formPhone') ? document.getElementById('formPhone').value.trim() : '';
      var email = document.getElementById('formEmail') ? document.getElementById('formEmail').value.trim() : '';
      var error = document.getElementById('contactError');
      
      if (!phone && !email) {
        e.preventDefault();
        if (error) {
          error.style.display = 'block';
        }
        
        if (document.getElementById('formPhone')) {
          document.getElementById('formPhone').classList.add('is-invalid');
        }
        if (document.getElementById('formEmail')) {
          document.getElementById('formEmail').classList.add('is-invalid');
        }
      } else {
        if (error) {
          error.style.display = 'none';
        }
        if (document.getElementById('formPhone')) {
          document.getElementById('formPhone').classList.remove('is-invalid');
        }
        if (document.getElementById('formEmail')) {
          document.getElementById('formEmail').classList.remove('is-invalid');
        }
      }
    });
  }
});

document.querySelector('form').addEventListener('submit', function(e) {
  if (!document.getElementById('privacyAgree').checked) {
    e.preventDefault();
    document.getElementById('privacyError').style.display = 'block';
    window.scrollTo(0, document.getElementById('privacyAgree').offsetTop - 100);
  }
});