import React from 'react';
import './css/main.css';
import {BrowserRouter, Switch , Route} from 'react-router-dom';
import Landing from './views/Landing/Landing';
import Home from './views/Home/Home';
import Register from './components/Register/Register';
import Profile from './views/Profile/Profile';
import MovieProfile from './views/Movie-Profile/Movie-profile';
import Data from './components/User/Data-user/Data-user';
import Series from './views/Series/Series';


function App() {
  return (

    <div className="App">
      <BrowserRouter>
         <Switch>
              <Route path="/" exact component={Landing}/>
              <Route path="/register" exact component={Register}/>
              <Route path="/home" exact component={Home}/>
              <Route path='/home/movie' exact component={MovieProfile}/> 
              <Route path='/profile' exact component={Profile}/>
              <Route path='/profile/data' exact component={Data}/>
              <Route path='/series' exact component={Series}/>
         </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
