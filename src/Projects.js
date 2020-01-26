import React, { useEffect } from 'react'

export default function Projects() {
    useEffect(() => {
        const frames = window.frames;
        for (let i = 0; i < frames.length; i++) { 
          const sounds = frames[i].document.getElementsByTagName('audio');
          for(let j = 0; j<sounds.length; j++){
            sounds[j].pause();
          }
        }
    }, [])
    return(
        <div className='projects'>
            <div className='projectHeader'>
                <h1>
                    Web Development
                </h1>
            </div>
            <div className='note'>
                <p>Please note that slow loading time is due to how herokuapp handles images, and not the code itself.</p>
                <p>Content inside an iframe loses its responsiveness, but the websites themselves are responsive.</p>
            </div>
            <div className='project1'>
                <a href="https://www.djluvaluva.com/" target="_blank">DJ Luva Luva</a>
                <p>Professional website for local musician, DJ Luva Luva.<br/>Built with React, JavaScript, HTML, SCSS, Express, MongoDB, and Node.js.</p>
                <a href="https://www.djluvaluva.com/" target="_blank"><iframe title='DJ Luva Luva' src="https://www.djluvaluva.com/" alt="project1"/></a>
            </div>
            <div className='project2'>
                <a href="https://plotchaser.herokuapp.com/login" target="_blank">Plot Chaser</a>
                <p>Full-Stack CRUD app to help writers organize their thoughts and their plots.<br/>Built with React, JavaScript, HTML, SCSS, Express, MongoDB, and Node.js.</p>
                <a href="https://plotchaser.herokuapp.com/login" target="_blank"><iframe title='Plot Chaser' src="https://plotchaser.herokuapp.com/login" alt="project2"/></a>
            </div>
            <div className='project3'>
                <a href="https://cluemurdermystery.herokuapp.com/" target="_blank">Clue Murder Mystery</a>
                <p>Full-stack app inspired by the 1949 Clue board game.<br/>Built with React, JavaScript, HTML, CSS, Express, MongoDB, and Node.js.</p>
                <a href="https://cluemurdermystery.herokuapp.com/" target="_blank"><iframe title='Clue Murder Mystery' src="https://cluemurdermystery.herokuapp.com/" alt="project3"/></a>
            </div>
            <div className='project4'>
                <a href="http://jax-hp-react-app.surge.sh/" target="_blank">Harry Potter Axios Project</a>
                <p>Frontend project pulling from a Harry Potter API.<br/>Built with React, JavaScript, HTML, CSS, Axios, and Node.js.</p>
                <a href="http://jax-hp-react-app.surge.sh/" target="_blank"><iframe className='hpIframe' title='Harry Potter Axios Project' src="http://jax-hp-react-app.surge.sh/" alt="project4"/></a>
            </div>
            <div className='gameHeader'>
                <h1>Game Development</h1>
            </div>
            <div className='game1'>
                <a href="https://www.facebook.com/StepPetsGame/" target="_blank">Step Pets</a>
                <p>Random Breakfast Internship<br/> Built by a team of 5 with Unity, Photoshop, and Spine.</p>
                <a href="https://www.facebook.com/StepPetsGame/" target="_blank"><iframe src="https://www.youtube.com/embed/mKADpZYGNL8" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></a>
                <a href="https://www.facebook.com/StepPetsGame/" target="_blank"><img src="https://cdn.discordapp.com/attachments/632280517013930044/670768845446840348/t4_snowy_mountain_mockup_v1y.png" alt="Snowy Mountain Art Assets"/></a>
                <a href="https://www.facebook.com/StepPetsGame/" target="_blank"><img src="https://cdn.discordapp.com/attachments/632280517013930044/670772864026148874/t5_fantasy_forest_mockup_v4.png" alt="Fantasy Forest Art Assets"/></a>
            </div>
            <div className='game2'>
                <a href="https://major-flex.itch.io/project-rat" target="_blank">Project R.A.T.</a>
                <p>University of Utah Capstone Project<br/> Built by a team of 17 with Unity, Photoshop, Maya, and ZBrush.</p>
                <a href="https://major-flex.itch.io/project-rat" target="_blank"><iframe src="https://www.youtube.com/embed/8D8uQDKHlJc" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></a>
            </div>
        </div>
    )
}