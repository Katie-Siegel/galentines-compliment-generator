const message = document.querySelector('.compliment-view');
const compButton = document.querySelector('.compliment-button');



function adjRandom() {
	const adj = ["smart", "hilarious", "wise", "peculiar", 'loyal'];
	return adj[Math.floor(Math.random() * adj.length)];
};
	
function nounRandom() {
	const noun = ["cat", "basket", "fairy", "stallion"];
	return noun[Math.floor(Math.random() * noun.length)];
};
	
function ideaOneRandomRandom() {
	const ideaOne = ['Hope', 'Wishes', 'Starlight', 'Questions'];
	return ideaOne[Math.floor(Math.random() * ideaOne.length)];
};
	
function ideaTwoRandomRandom() {
	const ideaTwo = [''];
	return ideaTwo[Math.floor(Math.random() * ideaTwo.length)];
};
	
const generatedCompliment = `You {adjRandom} {nounRandom} of {ideaOneRandom} and {ideaTwoRandom}!`

compButton.addEventListener('click', function (e) {
	message.innerText = generatedCompliment;
	compButton.innerText = "Compliment Again!"
})


// Updates Copyright Footer

const year = document.querySelector(
	'#current-year'
);
//Connects footer to code

year.innerHTML = new Date().getFullYear();
//Pulls new year to update footer