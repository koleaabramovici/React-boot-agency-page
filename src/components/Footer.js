import React from 'react'
import { useState } from 'react'
import FooterMap from './FooterMap'

export default function Footer() {
  const [foot] = useState([
  {
  id: 0,
  icon: 'fab fa-twitter'
  },
  {
  id: 1,
  icon: 'fab fa-facebook-f'
  },
  {
  id: 2,
  icon: 'fab fa-linkedin-in'
  }
])

  return (
    <>
     <footer className="footer py-4">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-4 text-lg-start">Copyright &copy; Your Website 2021</div>
                    <div className="col-lg-4 my-3 my-lg-0">
                        
                    {foot.map(data => (
                      <FooterMap key={data.id} data={data}/>
                    ))}

                    </div>
                    <div className="col-lg-4 text-lg-end">
                        <a className="link-dark text-decoration-none me-3" href="#!">Privacy Policy</a>
                        <a className="link-dark text-decoration-none" href="#!">Terms of Use</a>
                    </div>
                </div>
            </div>
        </footer> 
    </>
  )
}
