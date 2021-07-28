import React from 'react'

export default function PortofolioMap({data}) {
  return (
    <>
    <div className="portfolio-modal modal fade" id={data.id} tabindex="-1" role="dialog" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="close-modal" data-bs-dismiss="modal"><img src="assets/img/close-icon.svg" alt="Close modal" /></div>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="modal-body">
                                    
                                    <h2 className="text-uppercase">{data.title}</h2>
                                    <p className="item-intro text-muted">{data.subtitle}</p>
                                    <img className="img-fluid d-block mx-auto" src={data.img} alt="..." />
                                    <p>{data.text}</p>
                                    <ul className="list-inline">
                                        <li>
                                            <strong>Client:</strong>
                                            {data.client}
                                        </li>
                                        <li>
                                            <strong>Category:</strong>
                                            {data.category}
                                        </li>
                                    </ul>
                                    <button className="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                                        <i className="fas fa-times me-1"></i>
                                        Close Project
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

