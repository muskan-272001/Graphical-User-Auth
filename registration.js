(function () {
    if (document.body.classList.contains('Registration-page') === false) {
        return;
    }
    const loginFormEL = document.getElementById('RegistrationForm');
    const nameEl = document.getElementById('name');
    const emailEl = document.getElementById('email');
    const passwordEl = document.getElementById('password');
    loginFormEL.addEventListener('submit', function (e) {
        e.preventDefault();
        const email = emailEl.value;
        const password = passwordEl.value;
        requests.login(email, password)
            .catch(() => {
                alert("Failed")
            })
    });
})()