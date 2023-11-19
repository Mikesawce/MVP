const signUpBtn = document.querySelector('#signupBtn')
const signUpConfirm = document.querySelector('#SignUpConfirm')

signUpConfirm.addEventListener('click', registerAccount)

async function registerAccount() {
    const name = document.querySelector('#nameInput').value
    const userName = document.querySelector('#userNameInput').value
    const email = document.querySelector('#emailInput').value
    const psw = document.querySelector('#pswInput').value

    user = {
        name: name,
        email: email,
        username: userName,
        password: psw
    }

    fetch('http://localhost:1337/api/admin/users', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
        .then(response => response.json())
        .then(data => { console.log('Nice!', data) })
        .catch((error) => { console.log('Not good...', error)})
}
