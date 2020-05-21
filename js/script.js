//An array of objects containing quotes
let quotes = [
  {
    quote:
      "Don't make fame your goal. Make your goal doing what you do to the best of your ability, and that's something no one can take away from you.",
    source: "— Daniel Avidan",
    citation: "",
    year: "",
    tags: "Humor",
  },
  {
    quote:
      "Would I rather be feared or loved? Easy. Both. I want people to be afraid of how much they love me.",
    source: "— Michael Scott",
    citation: "The Office",
    year: 2005,
    tags: "TV Show",
  },
  {
    quote:
      "Dear frozen yogurt, you are the celery of desserts. Be ice cream, or be nothing",
    source: "— Ron Swanson",
    citation: "Parks and Recreation",
    year: 2015,
    tags: "TV Show",
  },
  {
    quote: "The only true wisdom is in knowing you know nothing.",
    source: "— Socrates",
    citation: "",
    year: "",
    tags: "",
  },
  {
    quote:
      "Stay in school and use your brain. Be a doctor, be a lawyer, carry a leather briefcase. Forget about sports as a profession. Sports make ya grunt and smell. See, be a thinker, not a stinker.",
    source: "— Apollo Creed",
    citation: "Rocky",
    year: 1976,
    tags: "Movie",
  },
];

//This function creates a random number, with the quotes array attached to it, returning a quote rather than a number
getRandomQuote = () => {
  let random = quotes[Math.floor(Math.random() * quotes.length)];
  return random;
};

//These functions change the rgb values, which changes the bodies
//Cycles thru all 256 rgb values
//I feel the function within a function looks a bit cleaner
changeColor = () => {
  randomColor = () => {
    return Math.random() * 256;
  };
  colors =
    "rgb(" + randomColor() + "," + randomColor() + "," + randomColor() + ")";
  document.querySelector(".colors").style.backgroundColor = colors;
};

//This function allows us to actually view the what being displayed to the screen
printQuote = () => {
  //Storing the function that returns a quote into a variable for cleaner code down below
  let randomQ = getRandomQuote();

  //Calling the function I created up above that cycles the colors
  changeColor();

  //Lots of concatenation to properly display our quotes and attaching our random quotes logic into it
  let displayedQ = "";
  displayedQ += '<p class="quote">' + randomQ.quote + "</p>";
  displayedQ += '<p class="source">' + randomQ.source;
  if (displayedQ.citation !== "") {
    displayedQ += '<span class="citation">' + randomQ.citation + "</span>";
  }
  if (displayedQ.year !== "") {
    displayedQ += '<span class="year">' + randomQ.year + "</span>";
  }
  if (displayedQ.tags !== "") {
    displayedQ += '</span class="tags">' + randomQ.tags + "</span>";
  }
  displayedQ += "</p>";

  //Taargeting the id in the index.html, calling innerHTML to change the value
  document.getElementById("quote-box").innerHTML = displayedQ;
};

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/

document
  .getElementById("load-quote")
  .addEventListener("click", printQuote, false);

//Calling the printQuote function to change the quote every 6 seconds
window.setInterval(printQuote, 6000);
