import React from 'react'
import { FaLocationArrow } from 'react-icons/fa6'
import MagicButton from "./ui/MagicButton";
import { socialMedia } from '../data/index';

const Footer = () => {
  return (
    <footer className='w-full  pb-10 mb-[100px] md:mb-5' id="contact">
      <div className='flex flex-col items-center'>
        <h1 className='heading lg:max-w-[45vw]' >
        Big opportunity to hire a  junior <span className='text-purple'>backend </span> developer!
        </h1>
        <p className='text-white-200 md:mt-10 my-5 text-center'>
        Reach out today, and let&apos;s discuss how you can benefit from having me on your project.
        </p>
        <a href='mailto:ralonsoad@gmail.com'>
          <MagicButton
            title="Contact Me"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>

      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © Berlincoders 2024
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300">
              <a href={info.link} target="_blank" rel="noopener noreferrer">
                  <img src={info.img} alt="icons" width={20} height={20} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};
export default Footer
