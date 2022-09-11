import BEM from "../../models/BEM"

import "./Heading.scss";

import { baseClass } from "../ClassSheet";

const Heading = ({character, setCharacter}) => <div className={BEM.composeClass(baseClass, 'heading')}>
  <div className={BEM.composeClass(baseClass, 'heading-column')}>
    <div>
      <input value={character.name} onChange={e => setCharacter({...character, name: e.target.value})}/>
    </div>
    <div>
      CHARACTER NAME
    </div>
  </div>
  <div className={BEM.composeClass(baseClass, 'heading-column')}>
    <div className={BEM.composeClass(baseClass, 'heading-center-row')}>
      <div>
        <div><input value={character.race} onChange={e => setCharacter({...character, race: e.target.value})}/></div>
        <div>RACE</div>
      </div>
      <div>
        <div><input value={character.background} onChange={e => setCharacter({...character, background: e.target.value})}/></div>
        <div>BACKGROUND</div>
      </div>
    </div>
    <div className={BEM.composeClass(baseClass, 'heading-center-row')}>
      <div>
        <div><input value={character.alignment} onChange={e => setCharacter({...character, alignment: e.target.value})}/></div>
        <div>ALIGNMENT</div>
      </div>
      <div>
        <div><input value={character.experience} onChange={e => setCharacter({...character, experience: e.target.value})}/></div>
        <div>EXPERIENCE POINTS</div>
      </div>
    </div>
  </div>
  <div className={BEM.composeClass(baseClass, 'heading-right-column')}>
    <div>ICON</div>
    <div><input value={character.class} onChange={e => setCharacter({...character, class: e.target.value})}/></div>
    <div><input value={character.level} onChange={e => setCharacter({...character, level: e.target.value})}/></div>
    <div><input value={character.subClass} onChange={e => setCharacter({...character, subClass: e.target.value})}/></div>
  </div>
</div>

export default Heading