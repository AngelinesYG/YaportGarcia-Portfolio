import React from 'react'

import Icons from './Icons'

class Portfolio extends React.Component{
   render(){
      return(
         <div className="portfolio">
            <div id="resume">
              <h1>Resume</h1>
              <img id="resume" src="https://i.imgur.com/bg3s95S.png"/>
              <a href="https://drive.google.com/file/d/1uAmrLsU7CcoTef3M5EiEoLus_BNerDFx/view">
               <button>Click Here to Download Resume</button>
              </a>
            </div>
            <div id="projects">
             <h1>Recent Projects</h1>
              <div id="project1">
               <h2>Interesting Cat Facts</h2>
               <a href="https://mystifying-villani-56eb1f.netlify.app/"><img src="https://i.imgur.com/8nfXeiw.png" alt="First Project"/>
              </a>
              </div>
              <div id="project2">
              <h2>Mom Blog</h2>
             <a href="https://aygproject2.herokuapp.com/momblog"><img src="https://i.imgur.com/RZZwuMb.png" alt="Second Project"/>
             </a>
              </div>
              <div id="project3">
              <a href="https://salamviaje.herokuapp.com/"><img src="https://i.imgur.com/7pjM9Hl.png" alt="Third Project"/>
              </a>
              </div>
              <div id="project4">
              <a href="https://dry-cove-26271.herokuapp.com/"><img src="https://i.imgur.com/T9XqbEG.png" alt="Fourth Project"/>
              </a>
              </div>
              <div id="project5">
              <a href="https://momswhoblog-frontend.herokuapp.com/moms"><img src="https://i.imgur.com/p7czme1.png" alt="Fith Project"/>
             </a>
              </div>
              <Icons/>
            </div>
         </div>
      )
   }
}
export default Portfolio
