import React from 'react';
import './App.css';

let student: string = '22';
let age: number = 55;
let isSmart: boolean = true;

let students: string[] = ['monir', 'bahadur', 'masum', 'sifat'];

interface Person {
  name: string;
  job?: string;
  age: number
}

// let persons: { name: string, job: string, age: number } = {
//   name: 'mohammad',
//   job: 'jobless',
//   age: 32
// }

let persons: Person = {
  name: 'mohammad',
  age: 32
}

function App() {
  return (
    <div className="App">

    </div>
  );
}

export default App;
