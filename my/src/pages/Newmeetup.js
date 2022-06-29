import Newmeetupform from '../components/layout/meetups/Newmeetupform'
import { useNavigate } from 'react-router-dom';

function Newmeetups()
{
    const navigate = useNavigate();

   function getmeetupdata(meetupdata)
   {
    console.log(meetupdata);
      fetch('https://reactd1-default-rtdb.firebaseio.com/meetups.json',
      {
        method: 'POST' , 
        body: JSON.stringify(meetupdata),
        headers : {
            'Content-Type' : 'application/json'
        }
      }
      ).then(()=>
      {
        navigate('/');
      });


   }

    return <section>
         <h1>Add New Meetup</h1>
         
         <Newmeetupform onaddmeetup = {getmeetupdata}/>
    </section>;
};

export default Newmeetups;