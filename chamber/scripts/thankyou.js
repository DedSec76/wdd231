
const params = new URLSearchParams(window.location.search)

const div = document.querySelector('.thanks-container')

const fname = params.get('fname');
const lname = params.get('lname')
const organizational = params.get('organizational')
const email = params.get('email')
const phone = params.get('phone')
const bname = params.get('bname')
const level = params.get('level')
const desc = params.get('description')
const timestamp = params.get('timestamp')

console.log(params.get('fname'))


div.innerHTML = `<p><strong>Full Name: </strong>${fname} ${lname}</p>
                 <p><strong>E-mail: </strong>${email}</p>
                 <p><strong>Phone: </strong>${phone}</p>
                 <p><strong>Organization's Name: </strong>${bname}</p>
                 <p><strong>Date timestamp: </strong>${timestamp}</p>
`

