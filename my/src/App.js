import {Routes , Route } from 'react-router-dom'

import Allmeetups from './pages/Allmeetups';
import Newmeetups from './pages/Newmeetup';
import Fav from './pages/Fav';


function App() {
  return ( 
  <div>
    <Routes>
      <Route path = "/" element  = {<Allmeetups/>}/>
      <Route path = "/" element  = {<Newmeetups/>}/>
      <Route path = "/" element  = {<Fav/>}/>
      </Routes>
    </div>
  );
}

export default App;

// when the url of router changes than page renders again..