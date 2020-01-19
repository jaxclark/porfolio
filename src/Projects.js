import React from 'react'

export default function Projects() {
    return(
        <div className='projects'>
            <div className='project1'>
                <a href="https://plotchaser.herokuapp.com/login">Full-Stack Writer's Helper App</a>
                <a href="https://plotchaser.herokuapp.com/login"><iframe src="https://plotchaser.herokuapp.com/login" alt="project1"/></a>
            </div>
            <div className='project2'>
                <a href="https://cluemurdermystery.herokuapp.com/">Full-Stack Clue Murder Mystery Game</a>
                <p>Please note that slow loading time is due to how herokuapp handles images, and not the code itself.</p>
                <a href="https://cluemurdermystery.herokuapp.com/"><iframe src="https://cluemurdermystery.herokuapp.com/" alt="project2"/></a>
            </div>
            <div className='project3'>
                <a href="http://jax-hp-react-app.surge.sh/">Frontend Harry Potter Axios Project</a>
                <a href="http://jax-hp-react-app.surge.sh/"><iframe src="http://jax-hp-react-app.surge.sh/" alt="project3"/></a>
            </div>
        </div>
    )
}