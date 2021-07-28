import React from 'react'

export default function PortofolioMap({data}) {
  return (
    <>
      <div className="col-lg-4 col-sm-6 mb-4">
                        <div className="portfolio-item">
                            <a className="portfolio-link" data-bs-toggle={data.href}>
                                <div className="portfolio-hover">
                                    <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" src={data.img} alt="..." />
                            </a>
                            <div className="portfolio-caption">
                                <div className="portfolio-caption-heading">{data.title}</div>
                                <div className="portfolio-caption-subheading text-muted">{data.subtitle}</div>
                            </div>
                        </div>
                    </div>
    </>
  )
}
