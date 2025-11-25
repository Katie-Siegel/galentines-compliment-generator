const message = document.querySelector('.compliment-view');
const compButton = document.querySelector('.compliment-button');


// Getting Friend's Name from the User

// Compliment Generator Formula
function adjRandom() {
	const adj = ["smart", "hilarious", "wise", "peculiar", 'loyal', 'quaint', 'chipper', 'fanciful', 'jubilant', 'zany', 'periwinkle', 'sprightly', 'snug', 'dappled', 'topsy-turvy', 'twinkling', 'fluttery', 'charmingly chaotic', 'delightfully weird', 'endearingly dramatic', 
		
		Lovably eccentric
		
		Ridiculously adorable
		
		Absurdly brilliant
		
		Unreasonably charismatic
		
		Hilariously insightful
		
		Impressively quirky
		
		Suspiciously wholesome
		
		Dangerously charming
		
		Overwhelmingly delightful
		
		Surprisingly majestic
		
		Outrageously thoughtful
		
		Preposterously lovable
		
		Almost-too-cute
		
		Excessively sparkly
		
		Aggressively polite
		
		Adorably intimidating
		
		Chaotically kind];
	return adj[Math.floor(Math.random() * adj.length)];
};
	
function nounRandom() {
	const noun = ["cat", "basket", "fairy", "stallion", "red panda", "hedgehog", "quokka", "baby otter", "fennec fox", "dwarf bunny", "pygmy goat", "chinchilla", "sugar glider",
		"pygmy marmoset", "harvest mouse", "dik-dik (it's a kind of mini antelope)", "philippine tarsier", "pika", "alpaca", "himalayan cat", "samoyed dog", "lionhead rabbit",
		"american guinea pig", "axolotl", "dumbo octopus", "pufferfish", "sea otter pup", "slow loris", "baby deer", "baby fox", "baby raccoon", "chipmunk", "flying squirrel", 'teacup', 'lantern',
		'thimble', 'ribbon', 'keepsake', 'locket', 'marble', 'quill', 
		
		Charmstone
		
		Button
		
		Feather
		
		Pocketwatch
		
		Snowglobe
		
		Bauble
		
		Satchel
		
		Spool
		
		Candleholder
		
		Music box
		
		Doorknocker
		
		Bellflower chime];
	return noun[Math.floor(Math.random() * noun.length)];
};
	
function ideaOneRandom() {
	const ideaOne = ['Hope', 'Wishes', 'Starlight', 'Questions', 'Regality', 'Fluff', 'Wonderment', 'Serendipity', 'Whimsy', 'Gleamspell', 'Daydreamery', 'Mirthcraft', 'Star-thought', 'Moonfancy', 'Glimmermind', 'Imaginarium', 'Dreamfrost', 'Sparklelogic', 'Wanderthought', 'Breezewish', 'Glowfeeling'];
	return ideaOne[Math.floor(Math.random() * ideaOne.length)];
};
	
function ideaTwoRandom() {
	const ideaTwo = ['Hope', 'Wishes', 'Starlight', 'Questions', 'Regality', 'Fluff', 'Wonderment', 'Serendipity', 'Whimsy', 'Gleamspell', 'Daydreamery', 'Mirthcraft', 'Star-thought', 'Moonfancy', 'Glimmermind', 'Imaginarium', 'Dreamfrost', 'Sparklelogic', 'Wanderthought', 'Breezewish', 'Glowfeeling'];
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