import React from 'react'

export default function ServicesMap({data}) {
  return (
    <>
      <div className="col-md-4">
                        <span className="fa-stack fa-4x">
                            <i className="fas fa-circle fa-stack-2x text-primary"></i>
                            <i className={data.boot}></i>
                        </span>
                        <h4 className="my-3">{data.title}</h4>
                        <p className="text-muted">{data.subtitle}</p>
                    </div>
    </>
  )
}
