import React from 'react'
import profile from '../assets/profile.jpg'
import { styles } from '../styles'
import { AiFillInstagram, AiOutlineTwitter, AiFillFacebook } from 'react-icons/ai';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <div className='w-full h-[85vh] mx-auto flex lg:flex-row flex-col sm:p-10 p-3'>
      <div className='lg:w-1/2 w-full lg:h-full h-[50vh] p-3'>
        <img src={profile} alt="profile" className='rounded-2xl m-auto h-full drop-shadow-lg' />
      </div>
      <div className={`${styles.paddingX} flex flex-col lg:items-start items-center md:justify-center lg:w-1/2 w-full lg:gap-5 gap-2 mx-auto h-full`}>
        <h1 className='font-bold xl:text-[80px] lg:text-[60px] md:text-[50px] text-[40px] xl:leading-[98px] md:mt-2'>
          I'm <TypeAnimation sequence={[
            'Chanhu', // Types 'One'
            2000,
            ''
          ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
            deletionSpeed={1}
            className='text-[#ca3433]'
          />
        </h1>
        <p className='font-medium xl:text-[30px] lg:text-[26px] md:text-[20px] text-[16px] xl:leading-[40px]'>
          I'm a System/Cloud Engineer
        </p>
        <p className=' font-normal text-secondary text-[16px] md:text-start text-center xl:flex hidden'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic cum, veritatis, incidunt repudiandae harum in deserunt tempora eligendi dignissimos nobis earum? Perferendis eligendi debitis voluptates tenetur labore, qui impedit quaerat!
        </p>
        <div className='flex flex-row gap-5 md:mt-3'>
          <a href='#about' className='bg-black w-150 p-3 lg:text-[20px] sm:text-[16px] xs:text-[20px] text-[16px] rounded-md text-white 
            font-normal text-center hover:bg-white hover:border-2 hover:border-black hover:text-black'>
            About Me
          </a>
          <a href='#contact' className='bg-white border-2 border-black  w-150 p-3 lg:text-[20px] sm:text-[16px] xs:text-[20px] text-[16px] rounded-md font-normal text-center
          hover:bg-black hover:border-2 hover:text-white'>
            Contact Me
          </a>
        </div>
        <div className='lg:mt-10 mt-2'>
          <p className='text-secondary lg:text-[20px] sm:text-[16px] xs:text-[20px] text-[16px] lg:leading-[40px] md:text-start text-center'>Also find me on:</p>
          <div className='flex flex-row md:gap-5 md:mt-2 gap-2 '>
            <AiFillInstagram className='md:h-50 md:w-50 h-10 w-10 hover:text-[#ca3433] duration-500' />
            <AiOutlineTwitter className='md:h-50 md:w-50 h-10 w-10 hover:text-[#ca3433] duration-500' />
            <AiFillFacebook className='md:h-50 md:w-50 h-10 w-10 hover:text-[#ca3433] duration-500' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero