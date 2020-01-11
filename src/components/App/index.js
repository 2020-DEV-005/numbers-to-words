import React from 'react';
import {AppConst} from '../../constants/App.const';
import Converter from '../Converter/index';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <h1>{AppConst.APP_TITLE}</h1>
      </header>
        <Converter />
    </div>
  );
}

export default App;
