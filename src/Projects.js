import React from 'react'

export default function Projects() {
    return(
        <div className='projects'>
            <div className='project1'>
                <a href="https://github.com/jaxclark/final-fullstack-project">Full Stack Final Project</a>
                <img src="https://lamountaincoaching.com/wp-content/uploads/2014/08/Under-Construction-Success-Image.jpg" alt="project1"/>
            </div>
            <div className='project2'>
                <a href="https://cluemurdermystery.herokuapp.com/">Full Stack Group Project</a>
                <img src="https://cdn.discordapp.com/attachments/632280517013930044/656994347346296913/Screen_Shot_2019-12-18_at_3.51.40_PM.png" alt="project2"/>
            </div>
            <div className='project3'>
                <a href="http://jax-hp-react-app.surge.sh/">Front End Axios Project</a>
                <img src="https://cdn.discordapp.com/attachments/632280517013930044/656994327037214740/Screen_Shot_2019-12-18_at_3.52.10_PM.png" alt="project3"/>
            </div>
        </div>
    )
}