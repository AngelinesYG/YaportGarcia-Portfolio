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
              <br />
               <button>Click Here to Download Resume</button>
              </a>
            </div>
            <div id="pro-text">
            <h1>Recent Projects</h1>
            </div>
            <div id="projects">
              <div id="project1">
               <a href="https://mystifying-villani-56eb1f.netlify.app/"><h2>Interesting Cat Facts</h2><img src="https://i.imgur.com/8nfXeiw.png" alt="First Project"/>
              </a>
              </div>
              <div id="project2">
             <a href="https://aygproject2.herokuapp.com/momblog"> <h2>Mom Blog</h2><img src="https://i.imgur.com/RZZwuMb.png" alt="Second Project"/>
             </a>
              </div>
              <div id="project3">
              <a href="https://salamviaje.herokuapp.com/"><h2>Jalan-Jalan(travel in Indonesian)</h2><img src="https://i.imgur.com/7pjM9Hl.png" alt="Third Project"/>
              </a>
              </div>
              <div id="project4">
              <a href="https://dry-cove-26271.herokuapp.com/"><h4>Bingo</h4><img src="https://i.imgur.com/T9XqbEG.png" alt="Fourth Project"/>
              </a>
              </div>
              <div id="project5">
              <a href="https://momswhoblog-frontend.herokuapp.com/moms"><h2>Moms Who Blog</h2><img src="https://i.imgur.com/p7czme1.png" alt="Fith Project"/>
             </a>
              </div>
            </div>
          <Icons/>
         </div>
      )
   }
}
export default Portfolio
