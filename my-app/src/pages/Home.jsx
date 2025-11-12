import React from 'react'
import Products from './Products'
import Hero from '../components/Hero'
import Brand_name from '../components/Brand_name'
import Brand_name_2 from '../components/Brand_name_2'

const Home = () => {
  return (
    <div className='mx-auto p-4 bg-blue-400'>
      <Hero/>
      
      <Products/>
    </div>
  )
}

export default Home