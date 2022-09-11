import "./CenterColumn.scss";

import CombatAttributes from "./CombatAttributes";

const CenterColumn = props => {
  const { character, setCharacter } = props;
  return <div>
    <CombatAttributes {...props}/>
  </div>
}

export default CenterColumn
