import React from 'react'
import Hero from '../hero/Hero'
import Main from '../main/Main'
import Products from '../products/Products'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Main />
      <Products/>
    </div>
  )
}

export default React.memo(Home)
