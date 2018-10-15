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