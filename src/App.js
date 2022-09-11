import { useEffect, useState } from 'react';

import './App.scss';

import Cookie from './models/Cookie';

import ClassSheet from './components/ClassSheet';

import defaultCharacter from './defaultCharacter.json';
import Character from './models/Character';

const App = () => {
  const [character, setCharacterRaw] = useState(null);

  const setCharacter = rawCharacter => setCharacterRaw(new Character(rawCharacter));

  useEffect(() => {
    const savedCharacter = JSON.parse(Cookie.get('DnD5eCharacterSheet') || 'null')

    setCharacter(savedCharacter || defaultCharacter)
  }, []);

  useEffect(() => {
    if(character) {
      Cookie.set("DnD5eCharacterSheet", JSON.stringify(character || null), 60 * 60 * 24 * 365)
    }
  });

  return <div className="App">
    { character ? <ClassSheet character={character} setCharacter={setCharacter}/> : null }
  </div>;
}

export default App;
