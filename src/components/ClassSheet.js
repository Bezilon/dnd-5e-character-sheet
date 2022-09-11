import Heading from './ClassSheet/Heading';

import './ClassSheet.scss';

import Sheet from './Sheet';

import BEM from '../models/BEM';
import LeftColumn from './ClassSheet/LeftColumn';
import CenterColumn from './ClassSheet/CenterColumn';

export const baseClass = 'class-sheet';

const ClassSheet = props => <Sheet>
  <Heading {...props}/>
  <div className={BEM.composeClass(baseClass, 'content')}>
    <LeftColumn {...props}/>
    <CenterColumn {...props}/>
  </div>
</Sheet>;

export default ClassSheet;
