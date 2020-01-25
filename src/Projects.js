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
            <div className='note'>
                <p>Please note that slow loading time is due to how herokuapp handles images, and not the code itself.</p>
                <p>Content inside an iframe loses its responsiveness, but the websites themselves are responsive.</p>
            </div>
            <div className='project1'>
                <a href="https://plotchaser.herokuapp.com/login">Full-Stack Writer's Helper App</a>
                <a href="https://plotchaser.herokuapp.com/login"><iframe title='Plot Chaser' src="https://plotchaser.herokuapp.com/login" alt="project1"/></a>
            </div>
            <div className='project2'>
                <a href="https://cluemurdermystery.herokuapp.com/">Full-Stack Clue Murder Mystery Game</a>
                <a href="https://cluemurdermystery.herokuapp.com/"><iframe title='Clue Murder Mystery' src="https://cluemurdermystery.herokuapp.com/" alt="project2"/></a>
            </div>
            <div className='project3'>
                <a href="http://jax-hp-react-app.surge.sh/">Frontend Harry Potter Axios Project</a>
                <a href="http://jax-hp-react-app.surge.sh/"><iframe title='Harry Potter Axios Project' src="http://jax-hp-react-app.surge.sh/" alt="project3"/></a>
            </div>
        </div>
    )
}