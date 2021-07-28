import React from 'react'
import { useState } from 'react'
import PortofolioMap from '../components/PortofolioMap'


export default function Portofolio() {
  const [port] = useState([
  {
  id: 0,
  href: '#portfolioModal1',
  img: 'assets/img/portfolio/1.jpg',
  title: 'Threads',
  subtitle: 'Ilustration'
  },
  {
  id: 1,
  href: '#portfolioModal2',
  img: 'assets/img/portfolio/2.jpg',
  title: 'Explore',
  subtitle: 'Graphic Design'
  },
  {
  id: 2,
  href: '#portfolioModal3',
  img: 'assets/img/portfolio/3.jpg',
  title: 'Finish',
  subtitle: 'Identity'
  },
  {
  id: 3,
  href: '#portfolioModal4',
  img: 'assets/img/portfolio/4.jpg',
  title: 'Lines',
  subtitle: 'Branding'
  },
  {
  id: 4,
  href: '#portfolioModal5',
  img: 'assets/img/portfolio/5.jpg',
  title: 'Southwest',
  subtitle: 'Website Design'
  },
  {
  id: 5,
  href: '#portfolioModal6',
  img: 'assets/img/portfolio/6.jpg',
  title: 'Window',
  subtitle: 'Photography'
  },
])

  return (
    <>
       <section className="page-section bg-light" id="portfolio">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Portfolio</h2>
                    <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
                <div className="row">
                  
                  {port.map(data => (
                    <PortofolioMap key={data.id} data={data}/>
                  ))}

                    
                </div>
            </div>
        </section>
    </>
  )
}
