import BEM from '../models/BEM';

import './Sheet.scss';

const Sheet = (props) => <div className={BEM.composeClass('sheet')}>{props.children}</div>;

export default Sheet;
