import {places} from '../data/places.mjs'

const article = document.querySelector(".discover-container")

function displayItems(places){
    places.forEach(place => {
        // build the card element
        const thecard = document.createElement('DIV')
        thecard.classList.add("thecard")
        // build the photo element
        const img = document.createElement('IMG')
        img.src = `${place.photo_url}`
        img.alt = `images of ${place.name}`
        img.loading = "lazy"
        thecard.append(img)
        // build the title element
        const name = document.createElement('H2')
        name.textContent = place.name
        thecard.append(name)
        // build the address element
        const address = document.createElement('ADDRESS')
        address.textContent = place.address
        thecard.append(address)
        // build the cost element
        const cost = document.createElement('P')
        cost.textContent = place.cost
        cost.id = "cost"
        thecard.append(cost)
        // build the description element
        const description = document.createElement('P')
        description.textContent = place.description
        thecard.append(description)
        // build the btn lear
        const learn = document.createElement('BUTTON')
        learn.innerText = "Learn More"
        learn.classList.add("btn-apply")
        thecard.append(learn)
        
        //Appends
        article.append(thecard)
    })
}

displayItems(places)