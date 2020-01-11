import React from 'react'

export default function About() {
    return(
        <div className='home'>
            <div className='imgDiv'>
                <img src='https://cdn.discordapp.com/attachments/632280517013930044/646137622149726208/myface.jpg' alt='myprofile' />
            </div>
            <div className='aboutDiv'>
                <p>Growing up, I always loved the interactive nature of video games. 
                    I loved being able to influence the story and be an active part of it in ways that other media could not quite capture. 
                    I went to college and studied art and video games design because of this interest, 
                    and while I learned many amazing skills from my education, I never felt like it was quite what I wanted to do. 
                    After graduating, I changed my career path to web development because I realized that development captures all of the things I love about creating video games, 
                    but in a way that brings those fun, interactive elements to everyday life. 
                    Our world today is dependant on the internet for so many things, 
                    and I want to be able to bring my passion for fun and interactive design to the web.</p>
            </div>
            <div className='homeInfo'>
                <a href="https://www.linkedin.com/in/jaxclark/">LinkedIn</a>
                <a href="https://github.com/jaxclark">GitHub</a>
                <p>Phone: (801) 661-9908</p>
                <p>Email: jamaecla@gmail.com</p>
            </div>
        </div>
    )
}