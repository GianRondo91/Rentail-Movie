import React from 'react';
import './css/main.css';
import {BrowserRouter, Switch , Route} from 'react-router-dom';
import Landing from './views/Landing/Landing';
import Home from './views/Home/Home';


function App() {
  return (

    <div className="App">
      <BrowserRouter>
         <Switch>
              <Route path="/" exact component={Landing}/>
              <Route path="/Home" exact component={Home}/>
         </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
