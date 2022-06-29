import Card from "../../ui/Card";
import classes from './Newmeetupform.module.css'
import { useRef } from 'react';

function Newmeetform (props)
{
       const titleInputRef =  useRef();
       const imgInputRef =  useRef();
       const addInputRef =  useRef();
       const descInputRef =  useRef();
  

      function submithandler(event) 
      {
           event.preventDefault();


      const enteredTitle = titleInputRef.current.value;
      const enteredimg  = imgInputRef.current.value;
      const enteredadd = addInputRef.current.value;
      const entereddesc = descInputRef.current.value;

      const meetupdata  = 
      {
         title: enteredTitle,
         images: enteredimg,
         address: enteredadd,
         description: entereddesc,
      };

        props.onaddmeetup(meetupdata);
        // console.log(meetupdata);
    }


     return <Card>
          <form className  = {classes.form} onSubmit = {submithandler}>

             <div className = {classes.control}>
              <label  htmlFor = "title">Meetup Title</label>
             <input type ="text" required id = "title" ref = {titleInputRef}/>
             </div>

             <div className = {classes.control}>
              <label  htmlFor = "image">Meetup Image</label>
             <input type ="url" required id = "image" ref = {imgInputRef}/>
             </div>

             <div className = {classes.control}>
              <label  htmlFor = "address">Address</label>
             <input type ="text" required id = "address " ref = {addInputRef}/>
             </div>

             <div className = {classes.control}>
              <label  htmlFor = "description">Description</label>
             <textarea  id = "description"  required rows = '5' ref = {descInputRef}> </textarea>
             </div>
              
              

             <div className = {classes.actions}>
             <button>Add Meetup</button>
             </div>

          </form>
        </Card>
}

export default Newmeetform;


// in jsx for is used as htmlfor in label 
// use ref is a hook that hooks our component directly with the dom and changes made in the dom by the user is collected by the useref hook