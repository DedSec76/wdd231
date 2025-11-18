
// When you reload the page, only the main HTML loads.
window.addEventListener("load", () => {
        document.querySelectorAll("header, main, footer").forEach(el => {
        el.style.visibility = "visible";
        });
});

// JSON url
const url = './data/members.json'

// Containers
const container_b = document.querySelector('.directory')
const spotlights = document.querySelector('.spotlights')

// Main fetch function
async function getMemberData() {
    const response = await fetch(url)
    const data = await response.json()

    // Filter for premium members only. (2=silver, 3=gold)
    const premiumMembers = data.members.filter(m => m.membership !== 1)
    
    // To get only three random spotlights
    const randomThree = getRandomMembers(premiumMembers, 3)

    // To show only three random spotlights
    if (spotlights) displaySpotlights(randomThree)

    // To show all in the directory
    if (container_b) displayMembers(data.members)
}

// Get random members
function getRandomMembers(members, amount = 3) {
    const shuffled = [...members].sort(() => Math.random() - 0.5)
    return shuffled.slice(0, amount)
}

function createMemberCard(member, showMembership = false) {
    const card = document.createElement('DIV');
    card.classList.add('card-business');

    if(member.membership === 2){
        card.classList.add('silver')
    } 
    else if(member.membership === 3){
        card.classList.add('gold')
    }

    const header = document.createElement('DIV');
    header.classList.add('header-business');

    const h3 = document.createElement('H3');
    h3.textContent = member.name;

    const p = document.createElement('P');
    p.textContent = member.address;

    header.appendChild(h3);
    header.appendChild(p);

    const content = document.createElement('DIV');
    content.classList.add('content-business');

    const img = document.createElement('IMG');
    img.src = member.icon;
    img.alt = `Image of the company ${member.name}`;
    img.loading = 'lazy';
    img.width = 100;
    img.height = 100;
    img.fetchpriority = "high";

    const info = document.createElement('DIV');
    info.classList.add('business-info');

    info.innerHTML = `
        <p>Email: <span>${member.email}</span></p>
        <p>Phone: <span>${member.phone_number}</span></p>
        <p><a href="${member.url}" target="_blank">URL: <span>${member.url}</span></a></p>
    `;

    if (showMembership) {
        const membership = document.createElement("P");
        membership.classList.add('level')

        if (member.membership === 2) {
            membership.innerHTML = `Level: Silver`;
            info.appendChild(membership);
        }
        else if (member.membership === 3) {
            membership.innerHTML = `Level: Gold`;
            info.appendChild(membership);
        }
    }

    content.appendChild(img);
    content.appendChild(info);

    card.appendChild(header);
    card.appendChild(content);

    return card;
}

// Display Functions
function displayMembers(members) {
    members.forEach(member => {
        const card = createMemberCard(member)
        container_b.appendChild(card)
    })
}
function displaySpotlights(members) {
    members.forEach(member => {
        const card = createMemberCard(member, true)
        spotlights.appendChild(card)
    })
}

// JSON data initializer
getMemberData(url)



