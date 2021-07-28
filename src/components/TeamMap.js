import React from 'react'

export default function TeamMap({data}) {
  return (
    <>
      <div className="col-lg-4">
                        <div className="team-member">
                            <img className="mx-auto rounded-circle" src={data.img} alt="..." />
                            <h4>{data.title}</h4>
                            <p className="text-muted">{data.subtitle}</p>
                            <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-twitter"></i></a>
                            <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
    </>
  )
}
