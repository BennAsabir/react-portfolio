import React from 'react';
import './style.css'

const Footer = () => {

    return (
        <footer className='footer'>
            <nav>
                <ul className='nav'>
                    <li className='nav-item'>
                        <a href='https://github.com/BennAsabir'><span><i className='fab fa-github fa-3x'></i></span></a>
                    </li>

                    <li className='nav-item'>
                        <a href='https://www.linkedin.com/in/benasabir/'><span><i className='fab fa-linkedin fa-3x'></i></span></a>
                    </li>

                    <li className='nav-item'>
                        <a href='mailto: benasabir@gmail.com'><span><i class="fas fa-envelope fa-3x"></i></span></a>
                    </li>
                </ul>
            </nav>
        </footer>
    )
}

export default Footer