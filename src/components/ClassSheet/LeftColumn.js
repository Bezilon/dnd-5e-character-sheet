import "./LeftColumn.scss";

import BEM from "../../models/BEM";
import Character from "../../models/Character";

import { baseClass } from "../ClassSheet";
import AttributesAndSkills from "./AttributesAndSkills";

const LeftColumn = props => {
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
  </div>;
}

export default LeftColumn;