async function signupFormHandler(event) {
    event.preventDefault();
    console.log('hello')
    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    if (username && email && password) {
        const response = await fetch('/api/user', {
            method: 'POST',
            body: JSON.stringify({
                username,
                email,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok)  {
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
            // .then(function () {
            //     document.location.replace('/dashboard');
            // })
            // .catch(err => console.log(err));

    };


};
document.querySelector('#signup-form').addEventListener('submit', signupFormHandler)