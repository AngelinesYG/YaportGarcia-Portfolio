import React from 'react'

import Icons from './Icons'

class Portfolio extends React.Component{
   render(){
      return(
         <div className="portfolio">
            <div id="resume">
              <h1>Resume</h1>
              <a rel="noopener noreferrer" href="https://drive.google.com/file/d/1jIRs4J8V3_RYwDPVK6GR-tfKtPeSJkw1/view?usp=sharing" target="_blank">
              <br />
               <button>Click Here to View Resume in New Tab</button>
              </a>
            </div>
            <hr/>
            <Icons/>
            <hr/>
            <div id="pro-text">
            <h1>Recent Projects</h1>
            </div>
            <div id="projects">
               <div id="project-list">
               <h2>Moms Who Blog</h2>
               <img src="https://i.imgur.com/p7czme1.png" alt="Fith Project"/>
             <br />
             <p>Full Stack CRUD, MERN Stack, built with Expess, Bcrypt, and Node JS for the separate back-end; and JS, React-App, and React-Router for the front-end</p>
             <h5>Description</h5>
             <p>Moms Who Blog is an improvement to Mom Blog with more improvements cominging in the next few months. This web application will eventually be released to the public so that moms have a safe place to vent and know that they are not alone. A place where they can cry, laugh, complain, and brag whithout the fear of judgment or backlash. In addition, it will be a place where moms can connect with other moms for more personal and live support and form meaningful relatonships.</p>
             <button><a href="https://momswhoblog-frontend.herokuapp.com/moms"><h3>Live Site</h3></a></button>
               </div>
               <br />

              <div id="project-list">
              <h2>Mom Blog</h2>
             <img src="https://i.imgur.com/RZZwuMb.png" alt="Second Project"/>
             <br />
             <p>Full Stack CRUD App, built with JS(EJS), Express, Bcrypt, Express-Sessions, MongoDB, Mongoose, and Node JS</p>
             <h5>Description</h5>
             <p>This was the first version of Moms Who Blog. Created with busy moms in mind, Mom Blogs allows moms to vent, annonimously, while also getting a good laugh when looking at the picture memes and other moms's blogs.</p>
             <button><a href="https://aygproject2.herokuapp.com/momblog"><h3>Live Site</h3></a></button>
              </div>
              <br />

              <div id="project-list">
              <h2>Jalan-Jalan(travel in Indonesian)</h2>
              <img src="https://i.imgur.com/7pjM9Hl.png" alt="Third Project"/>
              <br />
              <p>Full Stack CRUD App, built with JS, React, Express, MongoDB, Mongoose, and Node JS</p>
              <h5>Description</h5>
              <p>This group project was the incredible collaboration of <a href="https://www.linkedin.com/in/christophernugroho/">Christopher Nugroho</a> and myself, to create an app that showcases and gives descriptions of different travel places to help people choose their next vacation spot. It incorporates a wheather feature to help travelers look up their destination's weather. The whether data comes from a third party API and is set to have improvements in the future so that travelers can see what the weather would be like weeks ahead.</p>
              <button><a href="https://salamviaje.herokuapp.com/"><h3>Live Site</h3></a></button>
              </div>
              <br />

              <div id="project-list">
              <h2>Bingo</h2>
              <img src="https://i.imgur.com/T9XqbEG.png" alt="Fourth Project"/>
              <br />

              <p>Full Stack CRUD App, built with JS, React, Django, and PostgreSQL</p>
              <h5>Description</h5>
              <p>This group project was the collaboration of <a href="https://www.linkedin.com/in/christophernugroho/">Christopher Nugroho,</a> <a href="https://www.linkedin.com/in/clareeisentrout/">Clare Eisentrout,</a> and myself. This app helps dog lovers find the nearest dog parks to take their furry friends. It incorporates an external weather API so that the user can check the local wheter before heading out and it also includes Goole Maps, which allows the user to expand their search and view the proximities for each dog park in their area.</p>
              <button><a href="https://dry-cove-26271.herokuapp.com/"><h3>Live Site</h3></a></button>
              </div>
              <br />

              <div id="project-list">
              <h2>Interesting Cat Facts</h2>
               <img src="https://i.imgur.com/8nfXeiw.png" alt="First Project"/>
              <br />
              <p>Built with JS, jQuery and Ajax</p>
              <h5>Description</h5>
              <p>Love cats? This simple little app was my very first ever project. It's purpose is to simply entertain the cat lover in you by providing some informative and fun for cat facts that most of us never knew. Who knew cats were so interesting?</p>
              <button><a href="https://mystifying-villani-56eb1f.netlify.app/"><h3>Live Site</h3></a></button>
              </div>
              <br />

            </div>
            <hr/>

         </div>
      )
   }
}
export default Portfolio
