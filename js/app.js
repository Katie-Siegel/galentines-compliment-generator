const message = document.querySelector('.compliment-view');
const compButton = document.querySelector('.compliment-button');


// Getting Friend's Name from the User

// Compliment Generator Formula
function adjRandom() {
	const adj = ["smart", "hilarious", "wise", "peculiar", 'loyal', 'quaint', 'chipper', 'fanciful', 'jubilant', 'zany', 'periwinkle', 'sprightly', 'snug', 'dappled', 'topsy-turvy', 'twinkling', 'fluttery'];
	return adj[Math.floor(Math.random() * adj.length)];
};
	
function nounRandom() {
	const noun = ["cat", "basket", "fairy", "stallion", "red panda", "hedgehog", "quokka", "baby otter", "fennec fox", "dwarf bunny", "pygmy goat", "chinchilla", "sugar glider", "pygmy marmoset", "harvest mouse", "dik-dik (it's a kind of mini antelope)", "philippine tarsier", "pika", "alpaca", "himalayan cat", 
		
		Samoyed dog
		
		Lionhead rabbit
		
		American guinea pig
		
		Axolotl
		
		Dumbo octopus
		
		Pufferfish (smol + round)
		
		Sea otter pup
		
		Slow loris
		
		Soft Woodland Babies
		
		Baby deer (fawn)
		
		Baby fox (kit)
		
		Baby raccoon
		
		Chipmunk
		
		Flying squirrel];
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


// Quote about female friendship

// Updates Copyright Footer

const year = document.querySelector(
	'#current-year'
);
year.innerHTML = new Date().getFullYear();