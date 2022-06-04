const signupFormHandler = async function (event) {
    event.preventDefault();
    console.log('hello')
    const username = document.querySelector('#username-login').value.trim();
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    if (username && email && password) {
        fetch('/api/users', {
            method: 'post',
            body: JSON.stringify({
                username,
                email,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        })
            .then(function () {
                document.location.replace('/dashboard');
            })
            .catch(err => console.log(err));

    };


};
document.querySelector('#signup-form').addEventListener('submit', signupFormHandler)