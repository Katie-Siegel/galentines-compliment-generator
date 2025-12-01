const message = document.querySelector('.compliment-view');
const compButton = document.querySelector('.compliment-button');


// Getting Friend's Name from the User

// Compliment Generator Formula
function adjRandom() {
	const adj = ["smart", "hilarious", "wise", "peculiar", 'loyal', 'quaint', 'chipper', 'fanciful', 'jubilant', 'zany', 'periwinkle', 'sprightly', 'snug', 'dappled', 'topsy-turvy',
		'twinkling', 'fluttery', 'charmingly chaotic', 'delightfully weird', 'endearingly dramatic', 'lovably eccentric', 'ridiculously adorable', 'absurdly brilliant', 'unreasonably charismatic',
		'hilariously insightful', 'impressively quirky', 'suspiciously wholesome', 'dangerously charming', 'overwhelmingly delightful', 'surprisingly majestic', 'outrageously thoughtful',
		'preposterously lovable', 'almost-too-cute', 'excessively sparkly', 'aggressively polite', 'adorably intimidating', 'chaotically kind'];
	return adj[Math.floor(Math.random() * adj.length)];
};
	
function nounRandom() {
	const noun = ["cat", "basket", "fairy", "stallion", "red panda", "hedgehog", "quokka", "baby otter", "fennec fox", "dwarf bunny", "pygmy goat", "chinchilla", "sugar glider",
		"pygmy marmoset", "harvest mouse", "dik-dik (it's a kind of mini antelope)", "philippine tarsier", "pika", "alpaca", "himalayan cat", "samoyed dog", "lionhead rabbit",
		"american guinea pig", "axolotl", "dumbo octopus", "pufferfish", "sea otter pup", "slow loris", "baby deer", "baby fox", "baby raccoon", "chipmunk", "flying squirrel",
		'teacup', 'lantern', 'thimble', 'ribbon', 'keepsake', 'locket', 'marble', 'quill', 'button', 'feather', 'pocketwatch', 'snowglobe', 'bauble', 'satchel', 'spool', 'candleholder',
		'music box', 'doorknocker'];
	return noun[Math.floor(Math.random() * noun.length)];
};
	
function ideaOneRandom() {
	const ideaOne = ['Daydreamery', 'Mirthcraft', 'Star-thought', 'Moonfancy', 'Glimmermind', 'Imaginarium', 'Dreamfrost', 'Sparklelogic', 'Wanderthought', 'Breezewish', 'Glowfeeling'];
	return ideaOne[Math.floor(Math.random() * ideaOne.length)];
};
	
function ideaTwoRandom() {
	const ideaTwo = ['Hope', 'Wishes', 'Starlight', 'Questions', 'Regality', 'Fluff', 'Wonderment', 'Serendipity', 'Whimsy', 'Gleamspell'];
	return ideaTwo[Math.floor(Math.random() * ideaTwo.length)];
};


//Need to add span color around randomly generated elements
function generatedCompliment() {
	return `You <span>${adjRandom()} ${nounRandom()}</span> <br>of <span>${ideaOneRandom()}</span> <br>and <span>${ideaTwoRandom()}</span>!`;
}

// Quote about female friendship - need to link to HTML elements

function quoteRandom() {
	const quote = ["you are the best of us", "hope you have a great day", "princesses are all born girls"];
	return quote[Math.floor(Math.random() * quote.length)]
}

function updateQuote() {
	return `${quoteRandom()}`
}

compButton.addEventListener('click', function () {
	const compliment = message.innerText;
	if (compliment === "") {
		message.innerHTML = generatedCompliment();
		compButton.innerText = "Compliment Again!"
	} else {
		let newCompliment = document.createElement("h3");
		newCompliment.innerHTML = generatedCompliment();
		message.append(newCompliment);
	};
	updateQuote();

});

// Add Picture Dontation Function for "Friendship Carousel"


// Updates Copyright Footer
const year = document.querySelector(
	'#current-year'
);
year.innerHTML = new Date().getFullYear();