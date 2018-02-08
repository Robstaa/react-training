import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Hello from './components/hello.js';
import App from './App'
// import registerServiceWorker from './registerServiceWorker';

const hi = <div>
  <Hello firstName="Robin" lastName="Zuschke" />
  <Hello firstName="Fabian" lastName="Zuschke" />
</div>

ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
