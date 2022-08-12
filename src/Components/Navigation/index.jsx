import React from 'react';

export default function Navigation() {
  return (
    <nav className='navbar navbar-expand-lg navbar-light sticky-top'>
      <div className='container'>
        <a className='navbar-brand' href='#/'>
          My Portfolio
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav d-flex'>
            <li className='nav-item'>
              <a className='nav-link active' aria-current='page' href='#/'>
                Home
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#skills'>
                Skills
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#projects'>
                Projects
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#experiences'>
                Experiences
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#contact'>
                Contact Me
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
