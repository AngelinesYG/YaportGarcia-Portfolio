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
            <h4>I am a mother to four amazing boys, who is filled with a passion for writing and creativity. My strength lies in my ability to problem solve with a keen attention to detail. These are qualities that support my work as a Developer.

            My resilient and steadfast attitude makes me a strong woman who will not give up easily. Aside from my love for developing useful apps, I enjoy spending time with my children, listening to the calming sound of waves and rain drops, and a good family movie every now and then.</h4>
            <h5>
            <a href="mailto:angelinesyg@gmail.com">Let's connect to learn more about each other!</a>
            </h5>

          </div>
         </div>
      )
   }
}
export default About
