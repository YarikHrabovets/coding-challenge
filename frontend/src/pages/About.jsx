import React from 'react'
import banner from '../imgs/banner.jpeg'

const About = () => {
    return (
        <main className='main'>
            <img src={banner} alt='Banner' className='d-block w-100' />
            <div className='container shadow-lg p-5 mt-5'>
                <h1>About project</h1>
                <hr />
                <p className='lh-base'>
                    This project is a valuable resource for anyone interested in traveling and exploring the world. 
                    Its user-friendly interface and comprehensive features make it an essential tool for planning and organizing your next adventure.
                </p>
           </div>
        </main>
    )
}

export default About
