import Meetuplist from "../components/layout/meetups/Meetuplist";
import { useState, useEffect } from "react";

function Allmeetups() {
  const [isloading, setisloading] = useState(true);
  const [loadedmeetups, setloadedmeetups] = useState([]);

  useEffect(() => {

       setisloading(true);

    fetch('https://reactd1-default-rtdb.firebaseio.com/meetups.json')
      .then((response) => { return response.json(); })
      .then((data) => {

        const meetups = [];

        for(const key in data)
        {
           const meetup = {
                  id  : key,
                  ...data[key]
           };
           
            // console.log(meetup.image);
            meetups.push(meetup);
        }
        setisloading(false);
        setloadedmeetups(meetups);
      });
  }, []);




  if (isloading) {
    return (<section>
      <p>Loading......</p>
    </section>
    );
  }

  return <section>
    <h1>All Meetups</h1>
    <Meetuplist meetups={loadedmeetups} />
  </section>;
}

export default Allmeetups;


// with the use of useeffect the infinite loop is stopped 