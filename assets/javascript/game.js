var ticker = ["AAPL", "GOOG", "MSFT", "SPY", "CMG", "SNAP", 
"FB", "AMZN", "CAT", "MCD", "BIDU", "TSLA", "COST", "PCLN", 
"BABA", "NVDA", "NTES", "LULU", "NFLX", "AMGN"];

var randomTicker = ticker[Math.floor(Math.random() * ticker.length)];
var guesses = [];

var output = [];
var count = 0;


/* Selects the stock ticker */
function showTick() {
	for (var i = 0; i < randomTicker.length; i++) {
		if (guesses.length && guesses.indexof(randomTicker[i])!==-1) {
			output.push(randomTicker[i]);
		} else {
			return output.join("");
		}
		} 
	}
document.getElementById("answer").innerHTML = showTick();
	

function Letter() {
	var letter = document.getElementById("letter").value;
	if (letter.length > 0) {
		for (var i =0; i < randomTicker.length; i++) {
			if (randomTicker[i] === letter) {
				guesses[i] = letter;
			}
	}}
	count++;
	document.getElementById("counter").innerHTML = "Guesses: " + count;

	
}

