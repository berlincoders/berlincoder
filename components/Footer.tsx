import React from 'react'
import { FaLocationArrow } from 'react-icons/fa6'
import MagicButton from "./ui/MagicButton";

const Footer = () => {
  return (
    <footer className='w-full  pb-10 mb-[100px] md:mb-5' id="contact">
      <div className='flex flex-col items-center'>
        <h1 className='heading lg:max-w-[45vw]' >
        Big opportunity to hire a  junior <span className='text-purple'>backend </span> developer!
        </h1>
        <p className='text-white-200 md:mt-10 my-5 text-center'>
        Reach out today, and we can discuss how I fit into your project.
        </p>
        <a href='mailto:ralonsoad@gmail.com'>
          <MagicButton
            title="Contact Me"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
    </footer>
  )
}
export default Footer
