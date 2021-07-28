import React from 'react';
import { useState } from 'react';
import AboutMap from '../components/AboutMap';

export default function About() {
  const [time] = useState([
  {
  id: 0,
  img: 'assets/img/about/1.jpg',
  title: '2009-2011',
  subtitle: 'Our Humble Beginnings',
  text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!'
  },
  {
  id: 1,
  timeline: 'timeline-inverted',
  img: 'assets/img/about/2.jpg',
  title: 'March 2011',
  subtitle: 'An Agency is Born',
  text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!'
  },
  {
  id: 2,
  img: 'assets/img/about/3.jpg',
  title: 'December 2015',
  subtitle: 'Transition to Full Service',
  text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!'
  },
  {
  id: 3,
  timeline: 'timeline-inverted',
  img: 'assets/img/about/4.jpg',
  title: 'July 2020',
  subtitle: 'Phase Two Expansion',
  text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!'
  },
  
])


  return (
    <>
     <section className="page-section" id="about">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">About</h2>
                    <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
                <ul className="timeline">

                  {time.map(data => (
                      <AboutMap key={data.id} data={data}/>
                    ))}


                    
                    <li className="timeline-inverted">
                        <div className="timeline-image">
                            <h4>
                                Be Part
                                <br />
                                Of Our
                                <br />
                                Story!
                            </h4>
                        </div>
                    </li>
                </ul>
            </div>
        </section> 
    </>
  )
}
