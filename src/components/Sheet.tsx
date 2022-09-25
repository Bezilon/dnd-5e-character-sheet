import React from 'react';

import BEM from '../models/BEM';

import './Sheet.scss';

export type SheetProps = {
  character: any;
  setCharacter: any;
  children?: any;
};

const Sheet = (props: SheetProps) => <div className={BEM.composeClass('sheet')}>{props.children}</div>;

export default Sheet;
