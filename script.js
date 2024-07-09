// script.js
const quotes = [
    {
        quote: "The best way to predict the future is to invent it.",
        author: "Alan Kay"
    },
    {
        quote: "Life is 10% what happens to us and 90% how we react to it.",
        author: "Charles R. Swindoll"
    },
    {
        quote: "The only limit to our realization of tomorrow is our doubts of today.",
        author: "Franklin D. Roosevelt"
    },
    {
        quote: "The purpose of our lives is to be happy.",
        author: "Dalai Lama"
    },
    {
        quote: "Get busy living or get busy dying.",
        author: "Stephen King"
    },
    
];
function newQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const selectedQuote = quotes[randomIndex];

    document.getElementById('quote').textContent = `"${selectedQuote.quote}"`;
    document.getElementById('author').textContent = `- ${selectedQuote.author}`;
}

// Load a quote when the page loads
window.onload = newQuote;
