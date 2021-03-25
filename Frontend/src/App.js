import React from 'react';
import './css/main.css';
import {BrowserRouter, Switch , Route} from 'react-router-dom';
import Main from './views/Main/Main';
import Home from './views/Home/Home';


function App() {
  return (

    <div className="App">
      <BrowserRouter>
         <Switch>
              <Route path="/" exact component={Main}/>
              <Route path="/Home" exact component={Home}/>
         </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
