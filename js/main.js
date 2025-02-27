const quotes = [
    {
        quote: 'So many books, so little time.'
        , author: 'Frank Zappa'
    },
    {
        quote: 'Be yourself; everyone else is already taken.',
        author: 'Oscar Wilde'
    },
    {
        quote: 'A room without books is like a body without a soul.',
        author: 'Marcus Tullius Cicero'
    },
    {
        quote: 'Be who you are and say what you feel, because those who mind don\'t matter, and those who matter don\'t mind.',
        author: 'Bernard M. Baruch'
    },
    {
        quote: 'You know you\'re in love when you can\'t fall asleep because reality is finally better than your dreams.',
        author: 'Dr. Seuss'
    },
    {
        quote: 'You only live once, but if you do it right, once is enough.',
        author: 'Mae West'
    },
    {
        quote: 'If you want to know what a man\'s like, take a good look at how he treats his inferiors, not his equals.',
        author: 'J.K. Rowling'
    },
    {
        quote: 'If you tell the truth, you don\'t have to remember anything.',
        author: 'Mark Twain'
    },
];


function addQuote() {
    var randomIndex = Math.floor(Math.random() * quotes.length);
    var selectedQuote = quotes[randomIndex];
    var cartona = `
      <p class="mt-3">"${selectedQuote.quote}"</p>
      <h4class="my-3">--${selectedQuote.author}</h4class=>
    `;
    document.getElementById('q').innerHTML = cartona;
  }