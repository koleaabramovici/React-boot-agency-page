import React from 'react'
import { useState } from 'react'
import PortofolioMap from '../PortofolioMap'

export default function PortofolioModal() {
  const [modals] = useState([
  {
  key: 0,
  id: 'portfolioModal1',
  title: 'Project Name',
  subtitle: 'Lorem ipsum dolor sit amet consectetur.',
  img: 'assets/img/portfolio/1.jpg',
  text: 'Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!',
  client: 'Threads',
  category: 'Ilustration',
  },
  {
  key: 1,
  id: 'portfolioModal2',
  title: 'Project Name',
  subtitle: 'Lorem ipsum dolor sit amet consectetur.',
  img: 'assets/img/portfolio/2.jpg',
  text: 'Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!',
  client: 'Explore',
  category: 'Graphic Design',
  },
  {
  key: 2,
  id: 'portfolioModal3',
  title: 'Project Name',
  subtitle: 'Lorem ipsum dolor sit amet consectetur.',
  img: 'assets/img/portfolio/3.jpg',
  text: 'Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!',
  client: 'Finish',
  category: 'Identity',
  },
  {
  key: 3,
  id: 'portfolioModal4',
  title: 'Project Name',
  subtitle: 'Lorem ipsum dolor sit amet consectetur.',
  img: 'assets/img/portfolio/4.jpg',
  text: 'Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!',
  client: 'Lines',
  category: 'Branding',
  },
  {
  key: 4,
  id: 'portfolioModal5',
  title: 'Project Name',
  subtitle: 'Lorem ipsum dolor sit amet consectetur.',
  img: 'assets/img/portfolio/5.jpg',
  text: 'Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!',
  client: 'Southest',
  category: 'Web Design',
  
  },
  {
  key: 5,
  id: 'portfolioModal6',
  title: 'Project Name',
  subtitle: 'Lorem ipsum dolor sit amet consectetur.',
  img: 'assets/img/portfolio/6.jpg',
  text: 'Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!',
  client: 'Window',
  category: 'Photography',
  }
  
  
])

  return (
    <>
    
      {modals.map(data => (
      <PortofolioMap key={data.key} data={data}/>
      ))}
        
    </>
  )
}


