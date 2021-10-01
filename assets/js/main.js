/*----ToDo----*/

const form = document.getElementById('addForm')
const items = document.getElementById('items')

form.addEventListener('submit', add)

function add(e) {
    e.preventDefault()
    const inputText = document.getElementById('text-input').value
    const li = document.createElement('li')
    li.appendChild(document.createTextNode(inputText))

    const deleteBtn = document.createElement('button')
    deleteBtn.appendChild(document.createTextNode('X'))
    deleteBtn.classList = 'dlt'
    li.appendChild(deleteBtn)

    items.appendChild(li)
}

items.addEventListener('click', remove);
function remove(e) {
    if (e.target.classList.contains('dlt')) {
        const li = e.target.parentElement;
        items.removeChild(li)
    }
}

/*----Change Color----*/
const bgColor = document.getElementById('ColorChange')
const colorCode = document.getElementById('clr-code')
const button = document.getElementById('chng-clr')

button.addEventListener('click', change)

function change() {
    var color = '#';
    const random = Math.random().toString(16).slice(2, 8);
    color += random
    bgColor.style.background = color;
    colorCode.innerHTML = color
}

/*----Counter----*/

const textArea = document.getElementById('text-box')
const count = document.getElementById('count')

textArea.addEventListener('keyup', counter)

function counter() {
    const text = textArea.value
    const TextLength = text.length;
    count.innerHTML = TextLength
}

const plus = document.getElementById('plus')
const minus = document.getElementById('minus')
const counterValue = document.getElementById('num')

var value = 0;

plus.addEventListener('click', increase)
function increase() {
    value++;
    counterValue.innerHTML = value
}

minus.addEventListener('click', decrease)
function decrease() {
    value--;
    counterValue.innerHTML = value
}



/*----Clock----*/
setInterval(setClock, 1000)

const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')

function setClock() {
    const currentData = new Date()
    const secondRatio = currentData.getSeconds() / 60
    const minuteRatio = (secondRatio + currentData.getMinutes()) / 60
    const hourRatio = (minuteRatio + currentData.getHours()) / 12

    setRotation(secondHand, secondRatio)
    setRotation(minuteHand, minuteRatio)
    setRotation(hourHand, hourRatio)
}

function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360)
}

/*-----Random User Generator -----*/


const generateBtn = document.getElementById('generateBtn')








generateBtn.addEventListener('click', generate)
function generate() {
    fetch('https://randomuser.me/api/').then(res => res.json()).then((data) => {
        const pic = (data.results[0].picture.large)
        const firstName = (data.results[0].name.first)
        const lastName = (data.results[0].name.last)
        const email = (data.results[0].email)
        const phone = (data.results[0].phone)
        const country = (data.results[0].location.country)
        const age = (data.results[0].dob.age)

        document.getElementById('img').src = pic
        document.getElementById('firstName').innerHTML = firstName
        document.getElementById('lastName').innerHTML = lastName
        document.getElementById('phone').innerHTML = phone
        document.getElementById('mail').innerHTML = email
        document.getElementById('country').innerHTML = country
        document.getElementById('age').innerHTML = age


        console.log(data.results[0])


    })

}










