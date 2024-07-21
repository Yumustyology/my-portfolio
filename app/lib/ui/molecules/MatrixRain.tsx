'use client'
import React, { useEffect } from 'react';

const MatrixRain: React.FC = () => {
  const makeId = () => {
    const characters =
      'このアプリは新型コロナウイルス感染症が原因で♔♕♖♗♘♙CHESS♚♛☀☁♜♝♞♟WEATHER❅❄アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    // Returning a random character
    return characters.charAt(Math.floor(Math.random() * characters.length));
  };

  const generateText = () => {
    const w = 10;
    const h = 20;

    const matrix = document.querySelector('.matrix');

    if (!matrix) {
      return;
    }

    for (let i = 0; i < w; i++) {
      const timeout = Math.floor(Math.random() * 10) * 1000;

      // Creating columns
      const column = document.createElement('text');

      // Loop through all rows
      for (let j = 0; j < h; j++) {
        // Create the row
        const letter = document.createElement('span');

        // Generate a random character and add it to the span/row
        letter.innerText = makeId();

        // Add the span/row to one column
        column.appendChild(letter);

        // Delay each character animation by 100 milliseconds
        // This creates the raindrop effect
        letter.style.animationDelay = `${j * 100}ms`;
      }

      // Delay each column by a random number of seconds
      setTimeout(() => {
        matrix.appendChild(column);
      }, timeout);
    }
  };

  useEffect(() => {
    generateText();
  }, []);

  return <div className="matrix"></div>;
};

export default MatrixRain;
