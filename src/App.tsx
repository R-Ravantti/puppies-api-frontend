import React, { useEffect, useState } from 'react';
import PuppyCard from './PuppyCard';
import { DogDTO, fetchAllPuppies, addPuppy } from './Apicalls';
import './App.css';

function App() {
  const [puppies, setPuppies] = useState<DogDTO[]>([]);

  useEffect(() => {
    fetchAllPuppies(setPuppies);
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <div className="Puppy-holder">
          {puppies.map((puppy) => {
            return <PuppyCard puppyInfo={puppy} setPuppies={setPuppies}></PuppyCard>
          })}
        </div>
        <div className="Puppy-form">
          <form onSubmit={(e) => {
            e.preventDefault();
            addPuppy(e, setPuppies);
          }}>
            <input type="text" placeholder="Id" name="puppyId" />
            <input type="text" placeholder="Name" name="puppyName" />
            <input type="text" placeholder="Breed" name="puppyBreed" />
            <input type="text" placeholder="Birth date" name="puppyBirthdate" />
            <button type="submit">Submit</button>
          </form>
        </div>
      </header>
    </div>
  );
}

export default App;
