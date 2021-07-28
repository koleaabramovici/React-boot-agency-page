import React from 'react'
import { useState } from 'react'
import ClientsMap from '../components/ClientsMap'

export default function Clients() {
  const [icon] = useState([
    {
    id: 0,
    img: 'assets/img/logos/microsoft.svg'
    },
    {
    id: 1,
    img: 'assets/img/logos/google.svg'
    },
    {
    id: 2,
    img: 'assets/img/logos/facebook.svg'
    },
    {
    id: 3,
    img: 'assets/img/logos/ibm.svg'
    },
  ])

  return (
    <>
     <div className="py-5">
            <div className="container">
                <div className="row align-items-center">
                 
                 {icon.map(data => (
                   <ClientsMap key={data.id} data={data}/>
                 ))}
                    
                </div>
            </div>
        </div> 
    </>
  )
}
