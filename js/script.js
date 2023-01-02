
//Object Array to hold quotes, sources, citaitons and years
var quotes = [
	{
	quote: "Be who you are and say what you feel, because those who mind don't matter and those who matter don't mind.",
	},
	{
	quote: "This too, shall pass.",
	},
	{
	quote: "Keep your eyes on the stars and your feet on the ground.",
	},
	{
	quote: "The only person you should try to be better than is the person you were yesterday.",
	},
	{
	quote: "Never be bullied into silence. Never allow yourself to be made a victim. Accept no one's definition of your life; define yourself.",
	},
	{
	quote: "Faith is the art of holding on to things your reason has once accepted, in spite of your changing moods.",
	},
	{
	quote: "A man who flies from his fear may find that he has only taken a shortcut to meet it.",
	},
	{
	quote:  "Life's too mysterious to take too serious.",
	},
	{
	quote: "No one can make you feel inferior without your consent.",
	},
	{
	quote: "The woman who follows the crowd will usually go no further than the crowd. The woman who walks alone is likely to find herself in places no one has been before.",
	},
	{
	quote: "You can't go around building a better world for people. Only people can build a better world for people. Otherwise it's just a cage.",
	},
	{
	quote: "There isn't a way things should be. There's just what happens, and what we do.",
	},
	{
	quote: "It's not about how hard you can hit; it's about how hard you can get hit and keep moving forward.",
	},
	{
	quote: "More fuck yeah, less fuck that.",
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
				if (quotes.citation) {quoteString += `<span class="citation">${quotes.citation}</span>`}
				if (quotes.year) {quoteString += `<span class="year">${quotes.year}</span></p>`}
				else {quoteString += '</p>'};
					quoteContainer.innerHTML = quoteString;

					//assigns random color value to document background color 
					document.body.style.backgroundColor = getRandomColor ();
}
/*
//Quote automatically refreshes every 15 seconds
window.setInterval(function(){
printQuote ();
}, 15000);
*/

//Event listener on LoadQuote button to generate new quote		
document.getElementById("loadQuote").addEventListener("click", printQuote, false);






	
