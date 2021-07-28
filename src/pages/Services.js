import React from 'react'
import { useState } from 'react'
import ServicesMap from '../components/ServicesMap';

export default function Services() {
  const [text] = useState([
    {
    id: 0,
    boot: 'fas fa-shopping-cart fa-stack-1x fa-inverse',
    title: 'E-Commerce',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.'
    },
    {
    id: 1,
    boot: 'fas fa-laptop fa-stack-1x fa-inverse',
    title: 'Responsive Design',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.'
    },
    {
    id: 2,
    boot: 'fas fa-lock fa-stack-1x fa-inverse',
    title: 'Web Security',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.'
    }
  ]);

  return (
    <>
     <section className="page-section" id="services">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Services</h2>
                    <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
               <div className="row text-center">
                {text.map(data => (
                <ServicesMap key={data.id} data={data}/>
                ))}
                </div>
            </div>
        </section> 
    </>
  )
}
