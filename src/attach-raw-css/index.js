import App from './App';
import attachRawCss from '../utils/attachRawCss';
import appStyle from '!!raw-loader!./App.css'; // eslint-disable-line

export default attachRawCss(appStyle, 'create react app', App);
