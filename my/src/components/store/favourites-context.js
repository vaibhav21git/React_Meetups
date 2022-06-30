import { createContext , useState } from "react";

const FavoritesContext = createContext({
    favorites : [],
    totalfavorites : 0,
    addfav : (favmeetup) => {},
    removefav :  (meetupid) => {},
    itemisfav : (meetupid) =>{}
});



export function FavoritesContextProvider(props)
{
    const [userfav , setuserfav] = useState([]);

    function addfavhandler(favmeetup) 
    {
        setuserfav((prevuserfav)=>
        {
             return prevuserfav.concat(favmeetup);
        });
    }

    function removefavhandler(meetupid) {
        setuserfav((prevuserfav)=>
        {
            return prevuserfav.filter(meetup => meetupid !== meetup.id);
        });
    }

    function itemisfavhandler(meetupid) {
         return userfav.some(meetup => meetupid === meetup.id);
    }

    const context = {
               favorites: userfav,
               totalfavorites : userfav.length,
               addfav : addfavhandler,
               removefav :  removefavhandler,
               itemisfav : itemisfavhandler

    };

    return <FavoritesContext.Provider value = {context}>
            {props.children}
    </FavoritesContext.Provider>
} 

export default FavoritesContext;

// here FavoritiesContext is a component itself which needs intialization