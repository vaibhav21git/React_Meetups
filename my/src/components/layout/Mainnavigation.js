import { Link } from 'react-router-dom'
import { useContext } from 'react';

import classes from './Mainnavigation.module.css';
import FavoritesContext from '../store/favourites-context';

function Mainnavigation () {

  const favctx  = useContext(FavoritesContext);

    return  <header className = {classes.header}>
         <div className={classes.logo}>React Meetups</div>
         <nav>
            <ul>
                <li>
                  <Link to = '/' >All Meetsups</Link>
                </li>
                <li>
                  <Link to = '/new-meetup' >Add  a new meetup</Link>
                </li>
                <li>
                  <Link to = '/fav' >My favourites
                  <span className={classes.badge}>{favctx.totalfavorites}</span>
                  </Link>
                </li>
            </ul>
         </nav>
    </header>
}

export default Mainnavigation;


// by the use of link the request is not sent to the browser instaed on the basis of
// it the rerendering is done. so saves time of reloading

//module.css contains components specific styles
