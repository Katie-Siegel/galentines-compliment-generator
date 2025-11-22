const message = document.querySelector('.compliment-view');
const compButton = document.querySelector('.compliment-button');


// Compliment Generator Formula
function adjRandom() {
	const adj = ["smart", "hilarious", "wise", "peculiar", 'loyal', 'quaint', 'chipper', 'fanciful', 'jubilant', 'zany', 'periwinkle', 'sprightly', 'snug', 'dappled', 'topsy-turvy', 'twinkling', 'fluttery'];
	return adj[Math.floor(Math.random() * adj.length)];
};
	
function nounRandom() {
	const noun = ["cat", "basket", "fairy", "stallion"];
	return noun[Math.floor(Math.random() * noun.length)];
};
	
function ideaOneRandom() {
	const ideaOne = ['Hope', 'Wishes', 'Starlight', 'Questions'];
	return ideaOne[Math.floor(Math.random() * ideaOne.length)];
};
	
function ideaTwoRandom() {
	const ideaTwo = ['Regal', 'Fluff'];
	return ideaTwo[Math.floor(Math.random() * ideaTwo.length)];
};

function generatedCompliment() {
	return `You ${adjRandom()} ${nounRandom()} of ${ideaOneRandom()} and ${ideaTwoRandom()}!`;
}

compButton.addEventListener('click', function () {
	const compliment = message.innerText;
	if (compliment === "") {
		message.innerText = generatedCompliment();
		compButton.innerText = "Compliment Again!"
	} else {
		let newCompliment = document.createElement("h3");
		newCompliment.innerText = generatedCompliment();
		message.append(newCompliment);
	}

});


// Updates Copyright Footer

const year = document.querySelector(
	'#current-year'
);
year.innerHTML = new Date().getFullYear();