import React from 'react'
import classes from './MyLoader.module.css'

const Loader = () => {
    return (
        <div className='text-center mt-5'>
            <div className={'spinner-border text-secondary ' + classes.large} role='status'>
                <span className='visually-hidden'>Loading...</span>
            </div>
        </div>
    )
}

export default Loader
