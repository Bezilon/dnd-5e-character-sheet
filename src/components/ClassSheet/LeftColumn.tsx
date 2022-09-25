import React from "react";

import "./LeftColumn.scss";

import Case from "case";

import BEM from "../../models/BEM";

import { SheetProps } from "../Sheet";
import { baseClass } from "../ClassSheet";

import AttributesAndSkills from "./AttributesAndSkills";

const LeftColumn = (props: SheetProps) => {
  const { character, setCharacter } = props

  return <div className={BEM.composeClass(baseClass, 'column')}>
    <div className={BEM.composeClass(baseClass, 'proficiency-containter')}>
      <div><input value={character.proficiency} onChange={e => setCharacter({...character, proficiency: e.target.value})}/></div>
      <div>PROFICIENCY</div>
      <div>PASSIVE PERCEPTION</div>
      <div>{character.passivePerception()}</div>
      <div><input value={character.inspiration} onChange={e => setCharacter({...character, inspiration: e.target.value})}/></div>
      <div>INSPIRATION</div>
      <div>PASSIVE INSIGHT</div>
      <div><input value={character.proficiency} onChange={e => setCharacter({...character, proficiency: e.target.value})}/></div>
    </div>

    <AttributesAndSkills {...props}/>

    <div>
      <div>
        RACIAL TRAITS
      </div>
      <div>
        <textarea onChange={e => setCharacter({...character, racialTraits: e.target.value})} value={character.racialTraits}/>
      </div>
    </div>

    <div className={BEM.composeClass(baseClass, 'misc-proficiencies')}>
      <div>
        <div>RACIAL TRAITS</div>
        <div className={BEM.composeClass(baseClass, 'martial-proficiencies')}>
        { Object.keys(character.martialProficiencies).map(proficiency => <div key={proficiency}>
            <div>{Case.upper(proficiency)}</div>
            <div>
              <input
                type="checkbox"
                checked={character.martialProficiencies[proficiency]}
                onChange={() => { const nextCharacter = {...character}; nextCharacter.martialProficiencies[proficiency] = !character.martialProficiencies[proficiency]; setCharacter(nextCharacter); }}
              />
            </div>
          </div>) }
        </div>
      </div>
      <div>
        <div>
          <div>LANGUAGES</div>
          <textarea onChange={e => setCharacter({...character, racialTraits: e.target.value})} value={character.languages}/>
        </div>
        <div>
          <div>TOOLS & OTHER PROFICIENCIES</div>
          <textarea onChange={e => setCharacter({...character, racialTraits: e.target.value})} value={character.toolsAndOtherProficiencies}/>
        </div>
      </div>
    </div>
  </div>;
}

export default LeftColumn;