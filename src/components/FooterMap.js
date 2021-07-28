import React from 'react'

export default function FooterMap({data}) {
  return (
    <>
      <a className="btn btn-dark btn-social mx-2" href="#!"><i className={data.icon}></i></a>
    </>
  )
}
