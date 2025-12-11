
// JSON url
const url = './data/desserts.json'

// Containers
const container_b = document.querySelector('.directory')
const spotlights = document.querySelector('.spotlights')

// Main fetch function
async function getMemberData() {
    const response = await fetch(url)
    const data = await response.json()
    createPoncheCard(data);
    console.log(data)
}


const grid = document.querySelector(".grid");

if(grid) {
    function createPoncheCard(filteredDesserts) {
        grid.innerHTML = ""
        filteredDesserts.forEach(dessert => {
            const ponche = document.createElement('DIV')
            ponche.classList = "ponche"

            const image = document.createElement('IMG')
            image.src = `${dessert.image_url}`
            image.alt = `A image of ${dessert.name}`
            image.loading = "lazy"
            image.width = 700
            image.height = 700

            const price = document.createElement("P")
            price.textContent = `$${dessert.price_pen}`

            const title = document.createElement("H3")
            title.textContent = `${dessert.name}`

            const stock = document.createElement("P")
            stock.textContent = `${dessert.stock} Units`

            const btn = document.createElement("BUTTON")
            btn.textContent = "Add To Cart"

            ponche.appendChild(image)
            ponche.appendChild(price)
            ponche.appendChild(title)
            ponche.appendChild(stock)
            ponche.appendChild(btn)

            grid.appendChild(ponche)
        });
    }
}

getMemberData();