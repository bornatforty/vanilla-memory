const cardsArray = [{
	'name': 'angular',
	'img': '/images/angularjs-original.svg'
},
{
	'name': 'coffee',
	'img': '/images/coffeescript-original.svg'
},
{
	'name': 'c++',
	'img': '/images/cplusplus-original.svg'
},
{
	'name': 'drupal',
	'img': '/images/drupal-original.svg'
},
{
	'name': 'electron',
	'img': '/images/electron-original.svg'
},
{
	'name': 'express',
	'img': '/images/express-original.svg'
},
{
	'name': 'go',
	'img': '/images/go-original.svg'
},
{
	'name': 'java',
	'img': '/images/java-original.svg'
},
{
	'name': 'javascript',
	'img': '/images/javascript-original.svg'
},
{
	'name': 'python',
	'img': '/images/python-original.svg'
},
{
	'name': 'react',
	'img': '/images/react-original.svg'
},
{
	'name': 'vue',
	'img': '/images/vuejs-original.svg'
}]

const game = document.getElementById('game')
const grid = document.createElement('section') // create html section
grid.setAttribute('class', 'grid') //creates class=grid in the section created above
game.appendChild(grid) // append grid section to game
