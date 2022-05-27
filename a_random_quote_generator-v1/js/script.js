/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/


//Make an array named quotes
let quotes = [
{ 
  quote: 'Do your best until you know better. Then when you know better, do better',
  source: 'Maya Angelou'
},
{
  quote: 'I am not afraid of storms, for I am learning how to sail my ship.',
  source: 'Louisa May Alcott',
  citation: 'Little Women'
},
{
  quote: 'There are always new, grander challenges to confront, and a true winner will embrace each one.',
  source: 'Mia Hamm'
},
{
  quote: 'We can push ourselves further. We always have more to give.',
  source: 'Simone Biles'
},
{
  quote: 'Passion first and everything will fall into place.',
  source: 'Holly Holm'
},
{
  quote: 'The potential for greatness lives within each of us.',
  source: 'Wilma Rudolph',
  year: 2015
}

];



/***
 * `getRandomQuote` function
***/
//create a variable to store a random number ranging from zero to the index of the last item in the quotes array.
function getRandomQuote (array){
   let quoteNumbers = Math.floor(Math.random() * quotes.length); 
    let displayQuotes = array[quoteNumbers];
    console.log(displayQuotes)
    return displayQuotes
};

getRandomQuote(quotes);



/***
 * `printQuote` function
***/
function printQuote(){
  let randomQuote = getRandomQuote(quotes);
    let html = '';  
    html += 
      `<p class="quote"> ${randomQuote.quote}</p>
       <p class="source">${randomQuote.source}` 

      if (randomQuote.citation){
       html += `<span class="citation">${randomQuote.citation}</span>`
      };
      if (randomQuote.year){
       html += `<span class="year">${randomQuote.year}</span>`
      };

     html += '</p>'
     document.getElementById('quote-box').innerHTML = html; 
 
};



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);