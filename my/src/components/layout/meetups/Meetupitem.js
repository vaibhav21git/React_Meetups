import {useContext} from 'react';

import classes from './Meetupitem.module.css';
import Card from '../../ui/Card';
import FavoritesContext from '../../store/favourites-context';



function Meetupitem (props) 
{
     const favctx = useContext(FavoritesContext);

     const itemf = favctx.itemisfav(props.id);

     function togglefavstatushandler() 
     {
         if(itemf)
         {
             favctx.removefav(props.id);
         }
         else
         {
            favctx.addfav(
              {
                 id : props.id,
                 title : props.title,
                 description : props.description,
                 image: props.image,
                 address : props.address
              }
            )
         }
     }

  return <li  className={classes.item}>
    <Card>
     <div className= {classes.image}>
      <img src = {props.image} alt = {props.title} />
      </div>

      <div  className= {classes.content}>
      <h3> {props.title}</h3>
      <address>{props.address}</address>
      <p>{props.description}</p>
      </div>

      <div className= {classes.actions}>
      <button onClick={togglefavstatushandler}>{itemf ? 'Remove from Favorites' : 'To Favorites'}</button>
      </div>
      </Card>
  </li>
}

export default Meetupitem;