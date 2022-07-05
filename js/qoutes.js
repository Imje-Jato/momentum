const quotes = [
  {
    quote: "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde",
  },
  {
    quote:
      "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    author: "Albert Einstein",
  },
  {
    quote: "So many books, so little time.",
    author: "Frank Zappa",
  },
  {
    quote:
      "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
    author: "Bernard M.Baruch",
  },
  {
    quote:
      "You've gotta dance like there's nobody watching, Love like you'll never be hurt, Sing like there's nobody listening, And live like it's heaven on earth.",
    author: "William W.Purkey",
  },
  {
    quote: "Be the change that you wish to see in the world.",
    author: "Mahatma Gandhi",
  },
  {
    quote:
      "In three words I can sum up everything I've learned about life: it goes on.",
    author: "Robert Frost",
  },
  {
    quote:
      "Don't walk in front of me... I may not follow, Don't walk behind me... I may not lead, Walk beside me... just be my friend.",
    author: "Albert Camus",
  },
  {
    quote:
      "If you want to know what a man's like, take a good look at how he treats his inferios, not his equals.",
    author: "J.K Rowling, Harry Potter and the Goblet of Fire",
  },
  {
    quote: "Without music, life would be a mistake.",
    author: "Friedrich Nietzsche, Twilight of the Idols",
  },
];

const quoteHTML = document.querySelector("#qoute span:first-child");
const authorHTML = document.querySelector("#qoute span:last-child");

const todayQoute = quotes[Math.floor(Math.random() * quotes.length)];

quoteHTML.innerText = todayQoute.quote;
authorHTML.innerText = todayQoute.author;
