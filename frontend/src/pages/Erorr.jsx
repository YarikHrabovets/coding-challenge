import React from 'react'
import { Link } from 'react-router-dom'

import erorrImg from '../imgs/404.svg'

const Erorr = () => {
    return (
        <main className='main'>
            <div className='position-absolute top-50 start-50 translate-middle'>
                <img src={erorrImg} alt='error img' className='w-100' />
                <Link to='/' className='btn btn-outline-info w-100'>Go Home</Link>
            </div>
        </main>
    )
}

export default Erorr
