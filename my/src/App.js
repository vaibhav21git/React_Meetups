import { Routes, Route } from 'react-router-dom'

import Allmeetups from './pages/Allmeetups';
import Newmeetups from './pages/Newmeetup';
import Fav from './pages/Fav';
import Mainnavigation from './components/layout/Mainnavigation';


function App() {
  return (
    <div>
      <Mainnavigation/>
      <Routes>
        <Route path="/" element={<Allmeetups/>} />
        <Route path="/new-meetup" element={<Newmeetups/>} />
        <Route path="/fav" element={<Fav/>} />
      </Routes>
    </div>
  );
}

export default App;

// when the url of router changes than page renders again..
// switch and exact  are  not needed in latest version on react-router-dom 6.3.0 routes itself takes care of it