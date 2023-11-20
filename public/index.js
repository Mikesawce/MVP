const signUpBtn = document.querySelector('#signupBtn')
const signUpConfirm = document.querySelector('#SignUpConfirm')
// const profileBtn = document.querySelector
// signUpBtn.addEventListener('click', ) open modal
// profileBtn.addEventListener

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
        const data = await result.json()
        console.log(data)
        
    } catch (err) {
        console.error(err)
    }
    return false
}

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
            //incrementing id for btn class
            id += 1
        });
    }
    } catch (err) {
        console.log(err)
    }

    
}
loadMostViewed();
