import React from "react";

import { SheetProps } from "../Sheet";

import { ClassFeature as ClassFeatureType } from "../../models/Character";
import ClassFeature from "./ClassFeature";

const RightColumn = ({character, setCharacter}: SheetProps) => <div>
  {character.classFeautres.map((classFeature: ClassFeatureType, i: number) => <ClassFeature key={`class-feature-${i}`} {...classFeature} />)}
</div>

export default RightColumn