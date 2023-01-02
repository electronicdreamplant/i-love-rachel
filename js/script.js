
//Object Array to hold quotes
var quotes = [
	{
	quote: "she's happy to see me every morning when she wakes up.",
	},
	{
	quote: "she's always makes me feel better when I'm not feeling OK.",
	},
	{
	quote: "her laugh is the most wonderful sound in the world.",
	},
	{
	quote: "she's the smartest person I know (but thinks I am too).",
	},
	{
	quote: "she always says 'that looks great' when I cook something.",
	},
	{
	quote: "she's beautiful. Her smile lights up my day.",
	},
	{
	quote: "she is always looking out for other people (but mostly me).",
	},
	{
	quote: "she has so many talents - sewing, knitting, languages, art, house decoration, word puzzles etc.",
	},
	{
	quote: "she always appreciates me, no matter what.",
	},
	{
	quote: "she's the first person I want to talk to about anything.",
	},
	{
	quote: "the house feels empty when she's not in it.",
	},
	{
	quote: "I'm an emotional jigsaw and she is  the 'blue bits'.",
	},
	{
	quote: "she's always willing to 'share her warmth' when she'd cold.",
	},
	{
	quote: "she overlooks the daily abuse and naughtiness she's subjected to.",
	},
	{
	quote: "the house empty when she's not here.",
	},
];

//Function to randomly select a quote value and return a random quote object from the quotes array
function getRandomQuote () {
	var randomNumber = Math.floor(Math.random() * (quotes.length));
	var randomQuote = quotes[randomNumber];
	return randomQuote;
}	

//Function to select random rgb color value
function getRandomColor () {
	var red = Math.floor(Math.random() * 256 );
	var green = Math.floor(Math.random() * 256 );
	var blue = Math.floor(Math.random() * 256 );
	 var randomColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
	return randomColor;
}

//Function to call the getRandomQuote function and stores the returned quote object in a variable
//Constructs a string containing the different properties of the quote object 
function printQuote () {
		var quotes = getRandomQuote ();
		var quoteContainer = document.getElementById("quote-box");
		var quoteString = `<p class="quote">${quotes.quote}</p>`;

					quoteContainer.innerHTML = quoteString;

					//assigns random color value to document background color 
					document.body.style.backgroundColor = getRandomColor ();
}

//Event listener on LoadQuote button to generate new quote		
document.getElementById("loadQuote").addEventListener("click", printQuote, false);






	
