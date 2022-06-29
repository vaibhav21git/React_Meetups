import { Link } from 'react-router-dom'

import classes from './Mainnavigation.module.css';

function Mainnavigation () {
    return  <header className = {classes.header}>
         <div className={classes.logo}>React Meetups</div>
         <nav>
            <ul>
                <li>
                  <Link to = '/' >all meetsups</Link>
                </li>
                <li>
                  <Link to = '/new-meetup' >Add new meetupk</Link>
                </li>
                <li>
                  <Link to = '/fav' >My fav</Link>
                </li>
            </ul>
         </nav>
    </header>
}

export default Mainnavigation;


// by the use of link the request is not sent to the browser instaed on the basis of
// it the rerendering is done. so saves time of reloading

//module.css contains components specific styles