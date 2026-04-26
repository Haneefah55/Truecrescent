import React from 'react'

const HomeHero = () => {
  return (
    <div className="w-screen min-h-screen relative bg-no-repeat bg-cover" style={{ backgroundImage: `url(${'/images/herobg.jpg'})` }}>
      <div className="absolute inset-0 flex items-center justify-center bg-black/50"></div>

    </div>
  )
}

export default HomeHero