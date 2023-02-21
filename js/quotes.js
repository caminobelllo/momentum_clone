const quotes = [
    {
        quote: "Speak softly and carry a big stick.",
        author: "Theodore Roosevelt"
    },
    {
        quote: "That's one small step for a man, a giant leap for mankind.",
        author: "Neil Armstrong"
    },
    {
        quote: "The love of money is the root of all evil.",
        author: "the Bible"
    },
    {
        quote: "The only thing we have to fear is fear itself.",
        author: "Franklin D. Roosevelt"
    },
    {
        quote: "Ask not what your country can do for you; ask what you can do for your country.",
        author: "John Kennedy"
    },
    {
        quote: "Eighty percent of success is showing up.",
        author: "Woody Allen"
    },
    {
        quote: "He travels the fastest who travels alone.",
        author: "Rudyard Kipling"
    },
    {
        quote: "Hell has no fury like a woman scorned.",
        author: "William Congreve"
    },
    {
        quote: "Hell is other people.",
        author: "Jean-Paul Sartre"
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = `"${todaysQuote.quote}"`;
author.innerText = ` - ${todaysQuote.author}`;