import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

type DogDTO = {
  id: string,
  name: string,
  breed: string,
  birthdate: string
}

async function fetchAllPuppies(setPuppies: React.Dispatch<React.SetStateAction<DogDTO[]>>) {
  const response = await fetch('http://localhost:8080/api/puppies');
  const puppiesList: DogDTO[] = await response.json();
  setPuppies(puppiesList);
}

async function fetchPuppy() {

}

async function addPuppy() {

}

async function updatePuppy() {

}

async function deletePuppy() {

}

function App() {
  const [puppies, setPuppies] = useState<DogDTO[]>([]);

  useEffect(() => {
    fetchAllPuppies(setPuppies);
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {puppies.map((puppy) => {
          return (<p>{puppy.name}</p>)
        })}
      </header>
    </div>
  );
}

export default App;
