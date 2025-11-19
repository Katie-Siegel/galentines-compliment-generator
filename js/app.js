const message = document.querySelector('.compliment-view');
const compButton = document.querySelector('.compliment-button');


const generatedCompliment = function () {
	
}


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