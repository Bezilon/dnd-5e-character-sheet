import "./CombatAttributes.scss"

import BEM from "../../models/BEM"

import { baseClass } from "../ClassSheet"

const CombatAttributes = ({character, setCharacter}) => <div className={BEM.composeClass(baseClass, 'combat-attributes')}>
  <div>
    <div>
      <div>AC</div>
      <input value={character.armourClass} onChange={e => setCharacter({...character, armourClass: e.target.value})}/>
    </div>
    <div>
      <div>INITIATIVE</div>
      <div>{character.savingThrow('dexterity')}</div>
    </div>
    <div>
      <div>SPEED</div>
      <input value={character.speed} onChange={e => setCharacter({...character, speed: e.target.value})}/>
    </div>
  </div>

  <div>
    <div>
      <div>Maximum Hit Points</div>
      <div>
        <input value={character.hitPoints.temporary} onChange={e => { const nextCharacter = {...character}; nextCharacter.hitPoints.temporary = e.target.value; setCharacter(nextCharacter) }}/> / 
        <input value={character.hitPoints.temporary} onChange={e => { const nextCharacter = {...character}; nextCharacter.hitPoints.temporary = e.target.value; setCharacter(nextCharacter) }}/>
      </div>
    </div>

    <div>
      <div>Temporary Hit Points</div>
      <div><input value={character.hitPoints.temporary} onChange={e => { const nextCharacter = {...character}; nextCharacter.hitPoints.temporary = e.target.value; setCharacter(nextCharacter) }}/></div>
    </div>
  </div>

  <div>
    <div className={BEM.composeClass(baseClass, 'hit-dice-wrap')}>
      <div>HIT DICE</div>
      <div className={BEM.composeClass(baseClass, 'hit-dice-container')}>
        <div><input value={character.hitDice.used} onChange={e => { const nextCharacter = {...character}; nextCharacter.hitDice.used = e.target.value; setCharacter(nextCharacter) }}/></div>
        <div><input value={character.hitDice.total} onChange={e => { const nextCharacter = {...character}; nextCharacter.hitDice.total = e.target.value; setCharacter(nextCharacter) }}/></div>
        <div className={BEM.composeClass(baseClass, 'hit-die')}>
          <input value={character.hitDice.type} onChange={e => { const nextCharacter = {...character}; nextCharacter.hitDice.type = e.target.value; setCharacter(nextCharacter) }}/>
        </div>
      </div>
    </div>

    <div>
      <div>DEATH SAVES</div>
      <div className={BEM.composeClass(baseClass, 'death-saves-container')}>
        <div>SUCCESSES</div>
        <div>
          <input type="checkbox" checked={character.deathSaves.successes[0]} onChange={e => { const nextCharacter = {...character}; nextCharacter.deathSaves.successes[0] = !character.deathSaves.successes[0]; setCharacter(nextCharacter) }}/>
          <input type="checkbox" checked={character.deathSaves.successes[1]} onChange={e => { const nextCharacter = {...character}; nextCharacter.deathSaves.successes[1] = !character.deathSaves.successes[1]; setCharacter(nextCharacter) }}/>
          <input type="checkbox" checked={character.deathSaves.successes[2]} onChange={e => { const nextCharacter = {...character}; nextCharacter.deathSaves.successes[2] = !character.deathSaves.successes[2]; setCharacter(nextCharacter) }}/>
        </div>
        <div>FAILURES</div>
        <div>
          <input type="checkbox" checked={character.deathSaves.failures[0]} onChange={e => { const nextCharacter = {...character}; nextCharacter.deathSaves.failures[0] = !character.deathSaves.failures[0]; setCharacter(nextCharacter) }}/>
          <input type="checkbox" checked={character.deathSaves.failures[1]} onChange={e => { const nextCharacter = {...character}; nextCharacter.deathSaves.failures[1] = !character.deathSaves.failures[1]; setCharacter(nextCharacter) }}/>
          <input type="checkbox" checked={character.deathSaves.failures[2]} onChange={e => { const nextCharacter = {...character}; nextCharacter.deathSaves.failures[2] = !character.deathSaves.failures[2]; setCharacter(nextCharacter) }}/>
        </div>
      </div>
      <div></div>
    </div>
  </div>
</div>

export default CombatAttributes