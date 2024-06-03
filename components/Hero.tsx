// rafce  emoji blows head
import React from 'react'
import { Vortex } from './ui/Vortex'

export const Hero = () => {
  return (
    <div className="w-[calc(100%-4rem)] mx-auto rounded-md  h-[30rem] overflow-hidden">
    <Vortex
      backgroundColor="black"
      className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
    >
      <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
        Berlincoders
      </h2>
      <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
      You Dream It, We Code It.
      {/* We are a team of developers who are passionate about creating beautiful and functional websites and applications.*/}
      </p>
    </Vortex>
  </div>
  )
}
