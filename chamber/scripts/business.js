

const url = './data/members.json'
const container_b = document.querySelector('.container-business')

async function getMemberData() {
    const response = await fetch(url)
    const data = await response.json()

    displayMembers(data.members)
}

const displayMembers = (members) => {
    members.forEach(member => {
        const card = document.createElement('DIV')
        card.classList.add('card-business')

        const header = document.createElement('DIV')
        header.classList.add('header-business')

        const h3 = document.createElement('H3')
        h3.textContent = `${member.name}`

        const p = document.createElement('P')
        p.textContent = `${member.address}`

        const content = document.createElement('DIV')
        content.classList.add('content-business')

        const img = document.createElement('IMG')
        img.setAttribute('src', member.icon)
        img.setAttribute('alt', `Image of the company ${member.name}`)
        img.setAttribute('loading', 'lazy')
        img.setAttribute('width', '100')
        img.setAttribute('height', '100')

        const info = document.createElement('DIV')
        info.classList.add('business-info')

        const email = document.createElement('P')
        email.innerHTML = `Email: <span>${member.email}</span>`

        const phone = document.createElement('P')
        phone.innerHTML = `Phone: <span>${member.phone_number}</span>`

        const url = document.createElement('A')
        url.href = `${member.url}`
        url.target = '_blank'
        url.innerHTML = `URL: <span>${member.url}</span>`

        // insert the elements inside the parent container
        info.appendChild(email)
        info.appendChild(phone)
        info.appendChild(url)

        // insert the elements inside the parent container
        header.appendChild(h3)
        header.appendChild(p)

        // insert the elements inside the parent container
        content.appendChild(img)
        content.appendChild(info)

        // insert the elements inside the parent container
        card.appendChild(header)
        card.appendChild(content)

        // insert element within the main section
        container_b.appendChild(card)

    });
}

getMemberData(url)



