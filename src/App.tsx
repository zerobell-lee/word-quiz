import React from 'react';
import { idText } from 'typescript';
import './App.css';
import WordPane, { Color, WordElement, Quiz } from './WordPane';

const colorMapper = (input: string): Color => { return { r: 0, g: 0, b: 0 } };
const generateTextId = (input: string): string => input;
const toWordElements = (input: Quiz): Array<WordElement> => {
  return input.id.split('').map(e => { return { text: e, value: 100, color: input.color }; });
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <WordPane
          quizzes={[{ text: '안녕' },
          { text: '병신들아' }]}
          colorMapper={colorMapper}
          generateTextId={generateTextId}
          toWordElements={toWordElements} />
      </header>
    </div>
  );
}

export default App;
