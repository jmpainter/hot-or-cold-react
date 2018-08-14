import React from 'react';
import './ResultsGrid.css';

export default function ResultsGrid(props) {
  const results = props.guessHistory.map((guess, index) => 
    <div key={index} className={`result ${guess.guessStatus.replace(/!/, '').replace(/\s/g, '-').toLowerCase()}`}>{guess.guess}</div>
  );
  return (
    <div className="ResultsGrid">
      {results}
    </div>
  );
}