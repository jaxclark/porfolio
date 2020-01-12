import React from 'react'

export default function Projects() {
    return(
        <div className='projects'>
            <div className='project1'>
                <a href="https://plotchaser.herokuapp.com/login">Full-Stack Writer's Helper App</a>
                <a href="https://plotchaser.herokuapp.com/login"><img src="https://cdn.discordapp.com/attachments/632280517013930044/665316886828810281/Screen_Shot_2020-01-10_at_3.09.14_PM.png" alt="project1"/></a>
            </div>
            <div className='project2'>
                <a href="https://cluemurdermystery.herokuapp.com/">Full-Stack Clue Murder Mystery Game</a>
                <p>Please note that slow loading time is due to how herokuapp handles images, and not the code itself.</p>
                <a href="https://cluemurdermystery.herokuapp.com/"><img src="https://cdn.discordapp.com/attachments/632280517013930044/656994347346296913/Screen_Shot_2019-12-18_at_3.51.40_PM.png" alt="project2"/></a>
            </div>
            <div className='project3'>
                <a href="http://jax-hp-react-app.surge.sh/">Frontend Harry Potter Axios Project</a>
                <a href="http://jax-hp-react-app.surge.sh/"><img src="https://cdn.discordapp.com/attachments/632280517013930044/656994327037214740/Screen_Shot_2019-12-18_at_3.52.10_PM.png" alt="project3"/></a>
            </div>
        </div>
    )
}