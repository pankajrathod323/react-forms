import { useState } from 'react';
import './Joker.css';

const jokes = [
  "Why don't scientists trust atoms? Because they make up everything!",
  "Why did the scarecrow win an award? Because he was outstanding in his field!",
  "Why don't skeletons fight each other? They don't have the guts.",
  "What do you call fake spaghetti? An Impasta!",
  "Why did the bicycle fall over? Because it was two tired!"
];

export function Joker() {
  const [joke, setJoke] = useState('');

  const tellJoke = () => {
    const randomIndex = Math.floor(Math.random() * jokes.length);
    setJoke(jokes[randomIndex]);
  };

  return (
    <div className="Joker">
      <h1>Joker</h1>
      <button onClick={tellJoke}>Tell me a joke</button>
      {joke && <p className="joke-text">{joke}</p>}
    </div>
  );
}
