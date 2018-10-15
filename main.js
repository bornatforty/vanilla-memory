const cardsArray = [{
	'name': 'angular',
	'img': 'img/angularjs-original.svg'
},
{
	'name': 'coffee',
	'img': 'img/coffeescript-original.svg'
},
{
	'name': 'c++',
	'img': 'img/cplusplus-original.svg'
},
{
	'name': 'drupal',
	'img': 'img/drupal-original.svg'
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

let gameGrid = cardsArray.concat(cardsArray) // duplicate the array to have a match for each card
gameGrid.sort(() => 0.5-Math.random())

const game = document.getElementById('game')
const grid = document.createElement('section') // create html section
grid.setAttribute('class', 'grid') //creates class=grid in the section created above
game.appendChild(grid) // append grid section to game

gameGrid.forEach(item => {
	const card = document.createElement('div') // create a div to hold each card
	card.classList.add('card') // apply card class to each div
	card.dataset.name = item.name // set data-name of the div to the cardsArray name
	card.style.backgroundImage = `url(${item.img})` // apply background image of the div to the cardsArray image
	grid.appendChild(card) // append div to the grid
})

grid.addEventListener('click', function(event) { //event listener for clicked item
	let clicked = event.target
		if (clicked.nodeName === 'SECTION' ||
			clicked === previousTarget) { // only select div within grid
			return
		} if (count < 2) {
			count++
				if (count === 1) {
					firstGuess = clicked.dataset.name
					clicked.classList.add('selected')
				} 
				else {
					secondGuess = clicked.dataset.name
					clicked.classList.add('selected')
					clicked.classList.add('selected') //add selected class
				}
				if (firstGuess !== '' && secondGuess !== '') {
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

let firstGuess = ''
let secondGuess = ''
let count = 0 // counter to keep track of selected cards
let previousTarget = null
let delay = 1000


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
	var selected = document.querySelectorAll('.selected')
	selected.forEach(card => {
		card.classList.remove('selected')
	}) //reset guesses, remove selected css
}