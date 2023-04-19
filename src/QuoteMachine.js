// QuoteMachine.js

import React, { useState } from 'react';



const quotes = [
    {
      text: "That which does not kill us makes us stronger.",
      author: "Friedrich Nietzsche"
    },
    {
      text: "You have power over your mind - not outside events. Realize this, and you will find strength." ,
      author: "Marcus Aurelius"
    },
    {
      text: "Happiness and freedom begin with a clear understanding of one principle: Some things are within our control, and some things are not." ,
      author: "Epitectus"
    },
    {
      text: "The greatest wealth is to live content with little.",
      author: "Plato"
    },
    {
      text: "He who fears death will never do anything worth of a man who is alive." ,
      author: "Seneca"
    }
  ];
  

  // QuoteMachine.js



const QuoteMachine = () => {
  const [quote, setQuote] = useState(quotes[0]);

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  const tweetQuote = () => {
    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      `"${quote.text}" - ${quote.author}`
    )}`;
    window.open(tweetUrl);
  };

  return (
    <div id="quote-box">
      <p id="text">{quote.text}</p>
      <p id="author">{quote.author}</p>
      <button id="new-quote" className="btn btn-primary" onClick={getRandomQuote}>
        New Quote
      </button>
      {/* eslint-disable-next-line */}
      <a id="tweet-quote" href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(`"${quote.text}" - ${quote.author}`)}`} onClick={tweetQuote}>
        <i className="fa fa-twitter"></i> Tweet Quote
      </a> 
    </div>
  );
};

export default QuoteMachine;
