import React from 'react';
import NavSet from './NavSet';
import { useState } from 'react';



export default function Nav() {
  const [nav] = useState([
  {
  id: 0,
  href: '#services',
  element: 'Services'
  },
  {
  id: 1,
  href: '#portofolio',
  element: 'Portofolio'
  },
  {
  id: 2,
  href: '#about',
  element: 'About'
  },
  {
  id: 3,
  href: '#team',
  element: 'Team'
  },
  {
  id: 4,
  href: '#contact',
  element: 'Contact'
  },

  
])

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
            <div className="container">
                <a className="navbar-brand" href="#page-top"><img src="assets/img/navbar-logo.svg" alt="..." /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i className="fas fa-bars ms-1"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
                        {nav.map(data => (
                        <NavSet key={data.id} data={data}/>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    </>
  )
}
