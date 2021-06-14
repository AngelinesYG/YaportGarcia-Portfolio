import React from 'react'

class About extends React.Component{

   render(){
      return(
         <div className="About-container">
          <h3 id="AboutMe">Hi! Thanks for Visiting!</h3>
          <div className="MeImages">
            <img src="https://i.imgur.com/iYvwBpg.jpg" alt="AngelinesYG"/>
            <img src="https://i.imgur.com/tVKt0zn.jpg" alt="Angelines"/>
          </div>
          
          <div id="text">
            <h4>I am a mother to four amazing boys, who is filled with a passion for writing and creativity. My background in problem solving and attention to detail make me a great Software Engineering Fellow and will soon allow me to become an even better Developer. My resilient and steadfast attitude make me a strong woman who will not give up easily.
            Aside from my love for developing useful apps, I enjoy spending time with my children, listening to the calming sound of waves and rain drops, and a good family movie every now and then.</h4>
            <h5>Let's connect to learn more about each other!</h5>
          </div>
         </div>
      )
   }
}
export default About
