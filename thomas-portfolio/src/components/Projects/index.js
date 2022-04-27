import React from 'react'
import RunBuddyImage from '../../assets/Images/New-Run-Buddy-img.jpg';
import PursuitImage from '../../assets/Images/pursuit-of-hoppyness-screenshot.png';
import AlgorhythmImage from '../../assets/Images/algorhythm-app-screenshot.png';
import Project3Image from '../../assets/Images/02-portfolio-3.jpg';
import Project4Image from '../../assets/Images/02-portfolio-4.jpg';


function Projects() {
    return (
        <section class="work" id="work">
        <div class="projects">
                <div class="project-container">
                    <div class="card">             
                        <a href="https://thoma77s.github.io/Run-Buddy/" target="_blank"> 
                        <img src={RunBuddyImage}/> 
                        </a>                   
                            <div class="card-block">
                                <p>
                                    Run Buddy: CSS/HTML
                                </p>
                            </div>
                    </div>  
                </div>
                <div class="project-container">
                    <div class="card">
                        <a href="https://thoma77s.github.io/pursuit-of-hoppyness/"> 
                        <img src={PursuitImage}/>

                        </a>
                        <div class="card-block">
                            <p>
                                 Pursuit of Hoppyness: JavaScript/HTML/CSS
                            </p>
                        </div>
                    </div>
                </div>
                <div class="project-container">
                    <div class="card">
                        <a href="https://algorhythm-app.herokuapp.com/"> 
                        <img src={AlgorhythmImage}/>

                        </a>
                        <div class="card-block">
                            <p>
                                 Algorhthym-App: Javascript/SQL/Node
                            </p>
                        </div>
                    </div>
                </div>
                <div class="project-container">
                    <div class="card">
                        <a href="project3"> 
                        <img src={Project3Image}/>
                        </a>                 
                        <div class="card-block">
                            <p>
                                 Project 3: 
                            </p>
                        </div>
                    </div>
                </div>
                <div class="project-container">
                    <div class="card">
                        <a href="project4"> 
                        <img src={Project4Image}/>
                        </a>                 
                        <div class="card-block">
                            <p>
                             Project 4: 
                            </p>
                        </div>
                    </div>
                </div>  
            </div>
    </section>
    );
}
export default Projects;