import React from 'react';
import './style.css'

const Footer = () => {

    return (
        <footer className='footer'>
            <nav>
                <ul className='nav'>
                    <li className='nav-item'>
                        <a href='https://github.com/BennAsabir' target="_blank"><span><i className='fab fa-github fa-3x'></i></span></a>
                    </li>

                    <li className='nav-item'>
                        <a href='https://www.linkedin.com/in/benasabir/' target="_blank"><span><i className='fab fa-linkedin fa-3x'></i></span></a>
                    </li>

                    <li className='nav-item'>
                        <a href='mailto: benasabir@gmail.com' target="_blank"><span><i class="fas fa-envelope fa-3x"></i></span></a>
                    </li>
                </ul>
            </nav>
        </footer>
    )
}

export default Footer