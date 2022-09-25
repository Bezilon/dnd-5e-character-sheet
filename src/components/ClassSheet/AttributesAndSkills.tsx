import React from "react";

import "./AttributesAndSkills.scss";

import Case from "case";

import BEM from "../../models/BEM";

import Character from "../../models/Character";

import { baseClass } from "../ClassSheet";

import { SheetProps } from "../Sheet";

const AttributesAndSkills = ({character, setCharacter}: SheetProps) => <div>
  { Object.keys(character.attributes).map(attribute => <div key={attribute} className={BEM.composeClass(baseClass, 'skill-container')}>
    <div>
      <div>{attribute.toLocaleUpperCase()}</div>
      <div><input value={character.attributes[attribute].value} onChange={e => { const nextCharacter = {...character}; nextCharacter.attributes[attribute].value = e.target.value;  setCharacter(nextCharacter); }}/></div>
      <div>{Character.getAttributeModifier(character.attributes[attribute].value)}</div>
    </div>
    <div>
      <div className={BEM.composeClass(baseClass, 'skill-row')}>
        <div></div>
        <div>
          <input 
            type="checkbox"
            checked={character.attributes[attribute].proficient}
            onChange={() => { const nextCharacter = {...character}; nextCharacter.attributes[attribute].proficient = !character.attributes[attribute].proficient; setCharacter(nextCharacter); }}
          />
        </div>
        <div>{character.savingThrow(attribute)}</div>
        <div>SAVING THROWS</div>
      </div>

      {Object.keys(character.attributes[attribute].skills).map(skill => <div key={skill} className={BEM.composeClass(baseClass, 'skill-row')}>
        <div>
          <input 
            type="checkbox"
            checked={character.attributes[attribute].skills[skill].expert}
            onChange={() => { const nextCharacter = {...character}; nextCharacter.attributes[attribute].skills[skill].expert = !character.attributes[attribute].skills[skill].expert; setCharacter(nextCharacter); }}
          />
        </div>
        <div>
          <input 
            type="checkbox"
            checked={character.attributes[attribute].skills[skill].proficient}
            onChange={() => { const nextCharacter = {...character}; nextCharacter.attributes[attribute].skills[skill].proficient = !character.attributes[attribute].skills[skill].proficient; setCharacter(nextCharacter); }}
          />
        </div>
        <div>{character.skillModifier(skill)}</div>
        <div>{Case.upper(skill)}</div>
      </div>)}
    </div>
  </div> )}
</div>

export default AttributesAndSkills