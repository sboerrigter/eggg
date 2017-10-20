import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

/**
 * Base styles
 */
import 'normalize.css';
import './styles/body.js'
import './styles/heading.js'
import './styles/link.js'
import './styles/paragraph.js'

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
