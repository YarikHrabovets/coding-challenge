import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../imgs/globe64.png'

const Header = () => {
    return (
        <header className="px-3 py-2 shadow bg-white">
            <div className="container">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                <Link to="/" className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none">
                    <img src={logo} alt="logo" />
                </Link>
                <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
                    <li>
                        <Link to="/" className="link nav-link text-dark">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/history" className="link nav-link text-dark">
                            History
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" className="link nav-link text-dark">
                            About Project
                        </Link>
                    </li>
                </ul>
                </div>
            </div>
        </header>
    )
}

export default Header
