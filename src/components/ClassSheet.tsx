import React from 'react';

import './ClassSheet.scss';

import Heading from './ClassSheet/Heading';
import Sheet, { SheetProps } from './Sheet';

import BEM from '../models/BEM';
import LeftColumn from './ClassSheet/LeftColumn';
import CenterColumn from './ClassSheet/CenterColumn';

export const baseClass = 'class-sheet';

const ClassSheet = (props: SheetProps): JSX.Element => <Sheet {...props}>
  <Heading {...props}/>
  <div className={BEM.composeClass(baseClass, 'content')}>
    <LeftColumn {...props}/>
    <CenterColumn {...props}/>
  </div>
</Sheet>;

export default ClassSheet;
