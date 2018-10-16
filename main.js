const cardsArray = [{
	'name': 'angular',
	'img': 'img/angularjs-original.svg'
},
{
	'name': 'c++',
	'img': 'img/cplusplus-original.svg'
},
{
	'name': 'electron',
	'img': 'img/electron-original.svg'
},
{
	'name': 'express',
	'img': 'img/express-original.svg'
},
{
	'name': 'go',
	'img': 'img/go-original.svg'
},
{
	'name': 'java',
	'img': 'img/java-original.svg'
},
{
	'name': 'javascript',
	'img': 'img/javascript-original.svg'
},
{
	'name': 'python',
	'img': 'img/python-original.svg'
},
{
	'name': 'react',
	'img': 'img/react-original.svg'
},
{
	'name': 'vue',
	'img': 'img/vuejs-original.svg'
}]

const gameGrid = cardsArray.concat(cardsArray).sort(() => 0.5-Math.random()) // duplicate the array to have a match for each card and then randomize

let firstGuess = ''
let secondGuess = ''
let count = 0 // counter to keep track of selected cards
let previousTarget = null
let delay = 1000


const game = document.getElementById('game')
const grid = document.createElement('section') // create html section
	grid.setAttribute('class', 'grid') //creates class=grid in the section created above
	game.appendChild(grid) // append grid section to game

gameGrid.forEach(item => {
	const {name, img} = item
	const card = document.createElement('div') // create a div to hold each card
		card.classList.add('card') // apply card class to each div
		card.dataset.name = name // set data-name of the div to the cardsArray name

	const front = document.createElement('div')
		front.classList.add('front') //add front class to div

	const back = document.createElement('div')
		back.classList.add('back') // add back class to div
		back.style.backgroundImage = `url(${img})` // apply background image of the back-class div to the cardsArray image 

	grid.appendChild(card) // append div to the grid
	card.appendChild(front)
	card.appendChild(back)
})

const match = () => {
	var selected = document.querySelectorAll('.selected')
	selected.forEach(card => {
		card.classList.add('match') // add match css
	})
}

const resetGuesses = () => {
	firstGuess = ''
	secondGuess = ''
	count = 0
	previousTarget = null

	var selected = document.querySelectorAll('.selected')
	selected.forEach(card => {
		card.classList.remove('selected')
	}) //reset guesses, remove selected css
}

grid.addEventListener('click', event => { //event listener for clicked item
	const clicked = event.target
		if (clicked.nodeName === 'SECTION' ||
			clicked === previousTarget ||
			clicked.parentNode.classList.contains('selected') ||
			clicked.parentNode.classList.contains('match')) { // only select div within grid and only if not already selected or matched
			return
		} if (count < 2) {
			count++
				if (count === 1) {
					firstGuess = clicked.parentNode.dataset.name //dataname is on outerdiv but click will be on an innerdiv
					clicked.parentNode.classList.add('selected')
				} 
				else {
					secondGuess = clicked.parentNode.dataset.name
					clicked.parentNode.classList.add('selected') //add selected class
				}
				if (firstGuess && secondGuess) {
					if (firstGuess === secondGuess) {
						setTimeout(match, delay) // 
						setTimeout(resetGuesses, delay) //reset guesses upon second selection if correct after 1s delay
					}
					else {
						setTimeout(resetGuesses, delay) //reset guesses upon second selection if incorrect
					}
				}
				previousTarget = clicked
			}

})
const currentTime = () => {
	let date = new Date()
	let h = date.getHours()
	let m = date.getMinutes()
	let s = date.getSeconds()

const colorWheel = () => {
	let red = (h*(Math.round(Math.random()*10))).toString(16)
	let green = (m*(Math.round(Math.random()*10))).toString(16)
	let blue = (s*(Math.round(Math.random()*10))).toString(16)

	let color = ('#'+red+green+blue) // random hex generator

	document.body.style.backgroundColor = color
	setTimeout(currentTime, 1000)
}
colorWheel()
}
currentTime()

