import {useContext} from 'react';

import FavoritesContext from '../components/store/favourites-context';
import Meetuplist from '../components/layout/meetups/Meetuplist'

function  Fav(){

    const favctx = useContext(FavoritesContext);

    let content;

    if(favctx.totalfavorites === 0)
    {
        content  = <p>You Have No Favorites... Start adding some ? </p>
    }
    else
   {
      content = <Meetuplist meetups = {favctx.favorites}/>
   }

    return <section>
        <h1>My Favorites</h1>
        {content}
    </section>
}

export default Fav;