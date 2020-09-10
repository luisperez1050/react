const cardLayout = {
    column: 6,
    row: 6
};
let turns = 0;
let seconds = 0;
let minutes = 0;
let points = 0;	
let cardValue = 0;
let doesItMatch = [];
let tries = pad(0);

// default check for input field to set theme
// on change toggle theme 
export function themeSelector() {
    const themeSelector = document.querySelector("input[type='checkbox']");
    const body = document.querySelector("body");

    if (themeSelector.checked) body.classList.add("dark-theme");
    themeSelector.addEventListener('change', () => {
        (themeSelector.checked) ? body.classList.add("dark-theme") : body.classList.remove("dark-theme");
    })

}

export function startGame() {
    document.getElementById('start').addEventListener('click', () => {
		setInterval(timerIncrement, 1000);
		document.querySelector('.row').classList.remove('disabled');
		document.getElementById('start').setAttribute('disabled', '');
	});
}

export function resetGame() {
    document.getElementById('reset').addEventListener('click', () => {
        seconds = 0;
        minutes = 0;
        tries = 0;
        points = 0;
		timerIncrement(true);
		document.querySelector('.row').innerHTML = '';
		startLayout(cardLayout.column, cardLayout.row);
		//need to iterate every element
        document.querySelectorAll('.card-value').forEach(card => card.classList.add('hide'));
        
        verifyCardsMatch();
	});
}

export function startLayout(column, row) {
    document.querySelector('#timer').innerHTML = "Timer: 0:00";
    document.querySelector('#card_flips').innerHTML = "Turns: 00";
    document.querySelector('#points').innerHTML = "Points: 00";


    
    for (let outer = 0; outer < column; outer++){
        for (let inner = 0; inner < row; inner++){
            cardValue++;
            if (cardValue == 6){cardValue = 0;}
            
            document.querySelector('.row').innerHTML +=
            `<div class='col-4 col-md-2' id="${outer}${inner}">
                <div class='card-container'></div>
                <div class='card-value' data-card_value="${cardValue}"><span> ${cardValue} </span> </div>
            </div>`;
        }
    }
    shuffleCards();
}
// borrowed from JS fiddle
export function shuffleCards(){

    let all_cards = document.querySelectorAll('div.col-4');
    let divs = [...all_cards];

    for(let i = 0; i < divs.length; i++) document.getElementById(divs[i].id).parentNode.removeChild(document.getElementById(divs[i].id));            
    //the fisher yates algorithm, from http://stackoverflow.com/questions/2450954/how-to-randomize-a-javascript-array
    let i = divs.length;
    if ( i == 0 ) return false;
    while ( --i ) {
        let j = Math.floor( Math.random() * ( i + 1 ) );
        let tempi = divs[i];
        let tempj = divs[j];
        divs[i] = tempj;
        divs[j] = tempi;
    }

    for(let i = 0; i < divs.length; i++) document.querySelector('.row').appendChild(divs[i]);
                
}

export function verifyCardsMatch() {
    document.querySelectorAll('.card-value').forEach(card => card.classList.add('hide'));

    const cards = document.querySelectorAll('.col-4');
	[...cards].forEach( card => {
		card.addEventListener('click', () => {
			let selectedCard = card.id;
			let checkValue = card.querySelector('.card-value').dataset.card_value;
			doesItMatch.push(checkValue);
			console.log(doesItMatch);
			turns++;

			document.getElementById(selectedCard).querySelector('.card-container').classList.toggle('hide');
			document.getElementById(selectedCard).querySelector('.card-container').classList.add('selected');
			document.getElementById(selectedCard).querySelector('.card-value').classList.toggle('hide');

			if (turns == 2) {
				[...cards].forEach( card => card.style.pointerEvents = 'none');
				if (doesItMatch[0] === doesItMatch[1]){
					points++;
					points = pad(points);
					setTimeout(function() {
						document.getElementById('points').innerHTML = `Points: ${points}`;
						document.querySelectorAll(`.selected ~ [data-card_value="${checkValue}"] span`).forEach( match => match.innerHTML = 'MATCH');
						document.querySelectorAll(`.selected ~ [data-card_value="${checkValue}"]`).forEach( selected => selected.classList.add('card-match'));
						document.querySelectorAll(`.selected ~ [data-card_value="${checkValue}"]`).forEach( selected => selected.classList.remove('card-value'));
						[...cards].forEach( card => card.style.pointerEvents = 'all');
						document.querySelectorAll('div.selected').forEach( selected => selected.remove());
						
						if(points == 18){
							document.getElementById('points').innerHTML = " <h2> You win Yay! Reset Game to Start Over</h2>";
						}
					}, 1200);
					
				} else {
					setTimeout(function() {
						document.querySelectorAll('.card-container').forEach( container => container.classList.remove('hide'));
						document.querySelectorAll('.card-value').forEach( val => val.classList.add('hide'));
						document.querySelectorAll('.card-container').forEach( container => container.classList.remove('selected'));
						[...cards].forEach( card => card.style.pointerEvents = 'all');
					}, 1200);
				}
				turns = 0;
				doesItMatch= [];
				tries++;
				tries = pad(tries);
			}
			
			document.getElementById('card_flips').innerHTML = `Turns: ${tries}`;

		});
	});
}
// used to display timer
export function timerIncrement(clear = false) {
    seconds++;

    if (clear) {
        seconds = 0; 
        minutes = 0;
    }
    
    seconds = pad(seconds);

    if(seconds == 60){
        minutes++;
        minutes = pad(minutes);
        seconds = pad(0);
    }

    document.getElementById('timer').innerHTML = `Timer: ${minutes}:${seconds}`;
}
// add leading zero for UI
export function pad(number) {
    return (number < 10) ? (`0${number}`) : number;
}

export default cardLayout;