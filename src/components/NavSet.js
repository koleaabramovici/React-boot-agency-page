import React from 'react'

export default function NavSet({data}) {
  return (
    <>
      <li className="nav-item"><a className="nav-link" href={data.href}>{data.element}</a></li>
    </>
  )
}
