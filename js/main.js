
(function () {
  'use strict';

  document.documentElement.classList.add('js');

  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.main-nav');

  function setMenu(open) {
    toggle.setAttribute('aria-expanded', String(open));
    nav.classList.toggle('is-open', open);
  }

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      setMenu(toggle.getAttribute('aria-expanded') !== 'true');
    });

 
    nav.addEventListener('click', function (event) {
      if (event.target.closest('a')) {
        setMenu(false);
      }
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && nav.classList.contains('is-open')) {
        setMenu(false);
        toggle.focus();
      }
    });
  }


  var form = document.getElementById('form-newsletter');

  if (form) {
    var input = form.querySelector('#email-newsletter');
    var status = form.querySelector('#newsletter-status');

    function showStatus(message, type) {
      status.textContent = message;
      status.className = 'subscribe__status is-' + type;
      input.setAttribute('aria-invalid', type === 'error' ? 'true' : 'false');
    }

    form.addEventListener('submit', function (event) {
      event.preventDefault();
      var value = input.value.trim();

      if (value === '') {
        showStatus('Informe seu e-mail para continuar.', 'error');
        input.focus();
      } else if (!input.checkValidity()) {
        showStatus('Digite um e-mail válido, como nome@exemplo.com.', 'error');
        input.focus();
      } else {
        showStatus('Tudo certo! Esta é uma demonstração: nenhum dado foi enviado.', 'success');
        form.reset();
      }
    });

    input.addEventListener('input', function () {
      if (input.getAttribute('aria-invalid') === 'true' && input.checkValidity()) {
        input.setAttribute('aria-invalid', 'false');
        status.textContent = '';
        status.className = 'subscribe__status';
      }
    });
  }
})();
