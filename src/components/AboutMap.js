import React from 'react'

export default function AboutMap({data}) {
  return (
    <>
      <li className={data.timeline}>
                        <div className="timeline-image"><img className="rounded-circle img-fluid" src={data.img} alt="..." /></div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                <h4>{data.title}</h4>
                                <h4 className="subheading">{data.subtitle}</h4>
                            </div>
                            <div className="timeline-body"><p className="text-muted">{data.text}</p></div>
                        </div>
                    </li>
    </>
  )
}
