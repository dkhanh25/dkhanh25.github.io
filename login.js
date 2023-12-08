(function () {
    'use strict';

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation');

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault();
                    event.stopPropagation();
                } else {
                    // If the form is valid, redirect to home.html
                    window.location.href = './home.html';
                }

                form.classList.add('was-validated');
            }, false);
        });

    // Add an event listener to the login button for direct redirection
    var loginButton = document.getElementById('loginButton');
    if (loginButton) {
        loginButton.addEventListener('click', function (event) {
            event.preventDefault();
            window.location.href = 'home.html';
        });
    }
})();
