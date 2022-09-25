import React from "react";

import "./CenterColumn.scss";

import { SheetProps } from "../Sheet";

import CombatAttributes from "./CombatAttributes";

const CenterColumn = (props: SheetProps) => {
  const { character, setCharacter } = props;
  return <div>
    <CombatAttributes {...props}/>
  </div>
}

export default CenterColumn
