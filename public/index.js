//selectors
const openModals = document.querySelectorAll('[data-modal-target]')
const signUpConfirm = document.querySelector('#signUpConfirm')
const closeModals = document.querySelectorAll('[data-close-button]')
const logInConfirm = document.querySelector('#signInConfirm')
const overlay = document.getElementById('overlay')

//event listeners
openModals.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget)
        openModal(modal)
    })
})

closeModals.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal')
        closeModal(modal)
    })
})


overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active')
    modals.forEach(modal => {
        closeModal(modal)
        logIn(modal)
        registerAccount(modal)
    })
})

signUpConfirm.addEventListener('click', () => {
    registerAccount()
})
    
logInConfirm.addEventListener('click', () => {
    logIn()
})

function openModal(modal) {
    if (modal == null) {
        return
    }
    modal.classList.add('active')
    overlay.classList.add('active')
}

function closeModal(modal) {
    if (modal == null) {
        return
    }
    modal.classList.remove('active')
    overlay.classList.remove('active')
}

async function logIn() {
    const userName = document.querySelector('#userNameInput2').value
    const psw = document.querySelector('#loginPsw').value
    const modal = document.getElementById('signInModal')

    user = {
        username: userName,
        password: psw
    }

    try {
        const result = await fetch('http://localhost:1337/api/users/login', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        const data = await result.json()
        console.log(data)
        loggedIn(data)
        closeModal(modal)
    } catch (err) {
        console.error(err)
    }
}

function loggedIn(arr) {
    const profile = document.getElementById('userProfile')

    profile.textContent = `${arr[0]}`
}

async function registerAccount() {
    const name = document.querySelector('#nameInput').value
    const userName = document.querySelector('#userNameInput').value
    const email = document.querySelector('#emailInput').value
    const psw = document.querySelector('#pswInput').value
    const modal = document.getElementById('registrationModal')

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
        const data = await result.json()
        console.log(data)
        closeModal(modal)
    } catch (err) {
        console.error(err)
    }
}

//On page load, loads most viewed locations
async function loadMostViewed() {

    try {
        const result = await fetch('http://localhost:1337/api')
        const data = await result.json()
        console.log(data)

        createMostViewed(data)
    function createMostViewed(arr) {
        const topLocations = document.querySelector('#topLocations')
        
        let id = 1
        arr.forEach(elem => {

            //creating elements for top viewed
            let card = document.createElement('div')
            let name = document.createElement('h1')
            let img = document.createElement('div')
            let btn = document.createElement('button')
            let address = document.createElement('p')
            let description = document.createElement('p')

            //append elements
            topLocations.appendChild(card)
            card.appendChild(img)
            card.appendChild(name)
            card.appendChild(address)
            card.appendChild(description)
            img.appendChild(btn)

            //add selectors for CSS
            card.id = `${elem['location_id']}`
            card.className = `topCard`
            name.className = 'parkName'
            btn.id = `${elem['location_id']}`
            btn.className = `favBtn`
            img.className = 'image'
            address.className = 'address'
            description.className = 'description'

            //append data
            name.textContent = `${elem['name']}`
            btn.title = `Add ${elem['name']} to favorites!`
            address.textContent = `${elem['city']} ${elem['state']},
                                    ${elem['zipcode']}`
            description.textContent = `Read More`
            img.style.backgroundColor = 'black'
            
            //incrementing id for btn class
            id += 1
        });
    }
    } catch (err) {
        console.log(err)
    }
}

loadMostViewed();
