import React from 'react'
import Card from './card'
import NavBar from '../NavBar/NavBar'
const providers = [
  {
    title: "Kmit1 ",
    description: "One of the well known college in the colleges of hyderabad. XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    rating: 1
  },
  {
    title: "Kmit2 ",
    description: "One of the well known college in the colleges of hyderabad. XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    rating: 1
  },
  {
    title: "Kmit 3",
    description: "One of the well known college in the colleges of hyderabad. XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    rating: 1
  },
  {
    title: "Kmit 4",
    description: "One of the well known college in the colleges of hyderabad. XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    rating: 1
  },
]
const Explore = () => {
  return (
    <>
      
      <div className='p-10'>
        <p className='' style={{ fontFamily: "Inter,sans-serif", fontSize: '39.49px' }}>Top Insurance Providers</p>
        <div>

          <Card providers={providers} />
        </div>
      </div>
    </>
  )
}

export default Explore
