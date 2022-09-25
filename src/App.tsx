import React, { useEffect, useState } from 'react';

import './App.scss';

import ClassSheet from './components/ClassSheet';

import Cookie from './models/Cookie';
import Character from './models/Character';

import defaultCharacter from './defaultCharacter.json';

const App = () => {
  const [character, setCharacterRaw] = useState<Character>();

  const setCharacter = (rawCharacter: any) => setCharacterRaw(new Character(rawCharacter));

  useEffect(() => {
    const savedCharacter = JSON.parse(Cookie.get('DnD5eCharacterSheet') || 'null')

    setCharacter(savedCharacter || defaultCharacter)
  }, []);

  useEffect(() => {
    if(character) {
      Cookie.set("DnD5eCharacterSheet", JSON.stringify(character || null), 60 * 60 * 24 * 365)
    }
  });

  const classSheetProps = {
    character,
    setCharacter
  }

  return <div className="App">
    { character ? <ClassSheet {...classSheetProps}/> : null }
  </div>;
}

export default App;
