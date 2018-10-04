import App from './App';
import attachRawCss from '../shared/attachRawCss';
import appStyle from '!!raw-loader!./App.css'; // eslint-disable-line

export default attachRawCss(appStyle, 'create react app', App);
