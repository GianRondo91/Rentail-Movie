import React from 'react';
import './css/main.css';
import {BrowserRouter, Switch , Route} from 'react-router-dom';
import Landing from './views/Landing/Landing';
import Home from './views/Home/Home';
import Register from './components/Register/Register';
import Loading from './components/Loading/Loading';
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
              <Route path="/Register" exact component={Register}/>
              <Route path="/Home" exact component={Home}/>
              <Route path='/loading' exact component={Loading}/>
              <Route path='/profile' exact component={Profile}/>
              <Route path='/profile/data' exact component={Data}/>
              <Route path='/MovieProfile' exact component={MovieProfile}/>
              <Route path='/series' exact component={Series}/>
         </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
