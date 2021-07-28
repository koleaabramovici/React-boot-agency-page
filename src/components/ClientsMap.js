import React from 'react'

export default function ClientsMap({data}) {
  return (
    <>
                    <div className="col-md-3 col-sm-6 my-3">
                        <a href="#!"><img className="img-fluid img-brand d-block mx-auto" src={data.img} alt="..." /></a>
                    </div> 
    </>
  )
}
