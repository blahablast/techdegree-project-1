/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance:
// Check the "Project Resources" section of the project instructions
// Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/***
 * `quotes` array
 ***/
let quotes = [
  {
    quote:
      "Don't make fame your goal. Make your goal doing what you do to the best of your ability, and that's something no one can take away from you.",
    source: "— Daniel Avidan",
  },
  {
    quote:
      "Would I rather be feared or loved? Easy. Both. I want people to be afraid of how much they love me.",
    source: "— Michael Scott",
    citation: "The Office",
    year: 2005,
  },
  {
    quote:
      "Dear frozen yogurt, you are the celery of desserts. Be ice cream, or be nothing",
    source: "— Ron Swanson",
    citation: "Parks and Recreation",
    year: 2015,
  },
  {
    quote: "The only true wisdom is in knowing you know nothing.",
    source: "— Socrates",
  },
  {
    quote:
      "Stay in school and use your brain. Be a doctor, be a lawyer, carry a leather briefcase. Forget about sports as a profession. Sports make ya grunt and smell. See, be a thinker, not a stinker.",
    source: "— Apollo Creed",
    citation: "Rocky",
    year: 1976,
  },
];

/***
 * `getRandomQuote` function
 ***/
getRandomQuote = () => {
  let randQuote = quotes[Math.floor(Math.random() * quotes.length)];
  return randQuote;
};
console.log(getRandomQuote());

/***
 * `printQuote` function
 ***/

printQuote = () => {
  let randomQuote = getRandomQuote();
  let quoteString;
};

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/

document
  .getElementById("load-quote")
  .addEventListener("click", printQuote, false);
