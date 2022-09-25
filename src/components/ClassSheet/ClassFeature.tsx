import React from "react";

import "./ClassFeature.scss";

import { ClassFeature as ClassFeatureType } from "../../models/Character";

import BEM from "../../models/BEM";

const ClassFeature = ({name, description, levelRequirement}: ClassFeatureType) => {
  const baseClass = "class-feature"

  return <div className={BEM.composeClass(baseClass, 'container')}>
    <div className={BEM.composeClass(baseClass, 'name')}>{name}</div>
    <div className={BEM.composeClass(baseClass, 'level-requirement')}>{levelRequirement}</div>
    <div className={BEM.composeClass(baseClass, 'description')}>{description}</div>
  </div>
}

export default ClassFeature

