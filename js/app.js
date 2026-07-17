//Work in Progress: Galentine's Compliment Generator
//Work Notes: 
//            3. Add options to:
// 					- adjRandom()
// 					- nounRandom()
//                  - ideaOneRandom()
//				    - ideaTwoRandom()
//            4. Add options to quoteRandom()
//            6. Add random picture generator for "Friendship Carousel"
//			  7. Add Picture Dontation Function for "Friendship Carousel"
// 			  8. Reformat JavavScript to React.js


const nameInput = document.getElementById('name');
const nameButton = document.getElementsByClassName('submit-button')[0];
const nameMessage = document.querySelector('.name-message');
const message = document.querySelector('.compliment');
const compButton = document.querySelector('.compliment-button');
const quoteMessage = document.querySelector('.quote');
const randomImage = document.getElementById('random-image');

// Name Button Function
nameButton.addEventListener('click', function (e) {
	e.preventDefault();
	const friendName = nameInput.value;
	if (friendName) {
		nameMessage.innerText = `${friendName} sounds amazing! Let's get a compliment for them!`;
	};
	return friendName;
});

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

function generatedCompliment() {
	const friendName = nameInput.value;
	return `<h3>Hey ${friendName}! You are a <span>${adjRandom()} ${nounRandom()}</span> of <span>${ideaOneRandom()}</span> and <span>${ideaTwoRandom()}</span>!</h3>`;
}

// Quote Generator Formula
function quoteRandom() {
	const quote = ['“A true friend knows you inside out and loves you just the same.”', '“Laughter is the glue that holds our friendship together.”', '“In the garden of life, friends are the brightest flowers.”',
		'“Friendship is the golden thread that ties the heart of all the world.”', '“A friend is someone who knows all about you and still loves you.”', '“Good friends are like stars. You don’t always see them, but you know they’re always there.”',
		'“Friendship is born at that moment when one person says to another, ‘What! You too? I thought I was the only one.’”', '“A friend is one of the nicest things you can have, and one of the best things you can be.”',
		'“Friendship is the only cement that will ever hold the world together.”', '“A real friend is one who walks in when the rest of the world walks out.”', '“A true friend is like a star; you don’t always see them, but you know they’re always there.”',
		'“Boundaries are our shields; let’s respect and honor them.”', '"A loyal friend laughs at your jokes when they\'re not so good, and sympathizes with your problems when they\'re not so bad." – Arnold H. Glasgow',
		'"I don’t know what I would have done so many times in my life if I hadn’t had my girlfriends." – Reese Witherspoon', 
	];
	return quote[Math.floor(Math.random() * quote.length)]
}

function updateQuote() {
	const quote = quoteMessage.innerText; 
	quoteMessage.innerText = quoteRandom("h3");
}

//Random Image Array
const images = [
	{
		alt: "Two young girls sharing secrets",
		src: "img/girls-whispering.jpg"
	},
	{
		alt: "Two young girls hugging",
		src: "img/girls-hugging.jpg"
	},
	{
		alt: "Two young girls laughing",
		src: "img/girls-laughing.jpg"
	}
];

//Random Image Generator Function
function randomImage() {
	const imageIndex= images[Math.floor(Math.random() * images.length)];
	randomImage.src = imageIndex.src;
	randomImage.alt = image.alt;
	return randomImage;
}

// Compliment Button Function
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
	randomImage();

});


// Updates Copyright Footer
const year = document.querySelector(
	'#current-year'
);
year.innerHTML = new Date().getFullYear();