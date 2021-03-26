import React from 'react';
import './css/main.css';
import {BrowserRouter, Switch , Route} from 'react-router-dom';
import Landing from './views/Landing/Landing';
import Home from './views/Home/Home';
import Register from './components/Register/Register';


function App() {
  return (

    <div className="App">
      <BrowserRouter>
         <Switch>
              <Route path="/" exact component={Landing}/>
              <Route path="/Register" exact component={Register}/>
              <Route path="/Home" exact component={Home}/>
         </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
