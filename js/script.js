/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/


//Make an array of objects that include quotes, year (if possible), and citation (if possible)
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




//create a variable to store a random number from 0 to number of objects in array
function getRandomQuote (array){
   let quoteNumbers = Math.floor(Math.random() * array.length); 
    let displayQuotes = array[quoteNumbers];
    console.log(displayQuotes)
    return displayQuotes
};




/*
Create a function that uses the getRandomQuote function to returns 
an HTML string with randomized quotes. 
Create a variable to store the random quotes objects.
Create an HTML string to generate quotes, and use if statements to include the year and citations when they are  included in an object.
*/
function printQuote(){
  let randomQuote = getRandomQuote(quotes);
    let html = '';  
    html += 
      `<p class='quote'> ${randomQuote.quote}</p>
       <p class='source'>${randomQuote.source}` 

      if (randomQuote.citation){
       html += `<span class='citation'>${randomQuote.citation}</span>`
      };
      if (randomQuote.year){
       html += `<span class='year'>${randomQuote.year}</span>`
      };

     html += '</p>'
//return the HTML string displaying the random quote when clicking the quote box
     document.getElementById('quote-box').innerHTML = html; 
 
};



/***
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);