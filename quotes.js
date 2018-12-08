var quotes = ['Music is like a dream. One that I cannot hear.',
  'Without music, life would be a mistake.',
  'I can chase you, and I can catch you, but there is nothing I can do to make you mine.',
  'Music gives a soul to the universe, wings to the mind, flight to the imagination and life to everything.',
  'How is it that music can, without words, evoke our laughter, our fears, our highest aspirations?',
  'If I were not a physicist, I would probably be a musician. I often think in music. I live my daydreams in music. I see my life in terms of music.',]
function newQuote() {
var randomNumber = Math.floor(Math.random() * (quotes.length));
document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}
