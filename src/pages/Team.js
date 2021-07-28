import React from 'react'
import { useState } from 'react';
import TeamMap from '../components/TeamMap';

export default function Team() {
  const [guys] = useState([
    {
    id: 0,
    img: 'assets/img/team/1.jpg',
    title: 'Parveen Anand',
    subtitle: 'Lead Designer'
    },
    {
    id: 1,
    img: 'assets/img/team/2.jpg',
    title: 'Diana Petersen',
    subtitle: 'Lead Marketer'
    },
    {
    id: 2,
    img: 'assets/img/team/3.jpg',
    title: 'Larry Parker',
    subtitle: 'Lead Developer'
    }
  ])

  return (
    <>
      <section className="page-section bg-light" id="team">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Our Amazing Team</h2>
                    <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
                <div className="row">
 
                {guys.map(data => (
                  <TeamMap key={data.id} data={data}/>
                ))}
                

                </div>
                <div className="row">
                    <div className="col-lg-8 mx-auto text-center"><p className="large text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p></div>
                </div>
            </div>
        </section> 
    </>
  )
}

