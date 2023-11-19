const signUpBtn = document.querySelector('#signupBtn')
const signUpConfirm = document.querySelector('#SignUpConfirm')

// signUpBtn.addEventListener('click', ) open modal

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

    try {
        const result = await fetch('http://localhost:1337/api/admin/users', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
                },
            body: JSON.stringify(user)
        })
        console.log(result.json())
    } catch (err) {
        console.error(err)
    }
    return false
}


