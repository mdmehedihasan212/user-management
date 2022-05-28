import React from 'react';
import './App.css';
import Counter from './components/Counter';
import Users from './components/Users';

let student: string = '22';
let age: number = 55;
let isSmart: boolean = true;

let students: string[] = ['monir', 'bahadur', 'masum', 'sifat'];

interface Person {
  name: string;
  job?: string;
  age: number | string;
  location: string | number;
}

// let persons: { name: string, job: string, age: number } = {
//   name: 'mohammad',
//   job: 'jobless',
//   age: 32
// }

let persons: Person = {
  name: 'mohammad',
  age: '32',
  location: 33
}

const handleAddUser = (name: string, age: number, address: string): number => {
  const total: number = 55;
  console.log(name, age, address);
  return age;
}

function App() {
  return (
    <div className="App">
      <Counter></Counter>
      <Users></Users>
    </div>
  );
}

export default App;
