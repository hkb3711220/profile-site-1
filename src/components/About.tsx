import React from 'react'
import { styles } from '../styles'
import profile from '../assets/profile2.jpg'
import { aboutMeList } from '../constants'
import { useInView } from "react-intersection-observer"

const About = () => {

  const [ref, inView] = useInView({
    rootMargin: '-200px 0px',
  });
  
  return (
    <div className={`relative w-full flex lg:flex-row flex-col md:gap-3 sm:p-10 p-3`} ref={ref}>
      <div className={`xl:w-1/2 w-full p-5 flex flex-col md:justify-center scale-50 ${inView ? styles.show : 'opacity-0'} xl:items-end item-start`}>
        <h2 className={`xl:text-[80px] lg:text-[60px] md:text-[50px] text-[40px] font-bold xl:text-end text-start`}>About Me</h2>
        <div className='xl:w-[90%]'>
        <p className={`mt-3 md:text-[16px] text-[12px]`}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad, debitis officia aliquam alias exercitationem neque at ab non consequatur sunt amet quae expedita nulla laudantium quas! Quisquam fugiat corporis in.
        </p>
        <p className='mt-3 md:text-[16px] text-[12px]'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur modi quas dicta repellendus assumenda. Accusantium voluptatum ea voluptatem aliquid eligendi deserunt animi consequuntur quos quis, eveniet, soluta nesciunt nisi vel?
        </p>
        <div className='grid grid-cols-2 md:gap-x-10 gap-y-4 mt-5'>
          {aboutMeList.map((aboutMeInfo) => 
            <div key={aboutMeInfo.title}>
              <p className='font-bold text-[#ca3433] md:text-[16px] text-[12px]'>{aboutMeInfo.subTitle}</p>
              <p className='font-semibold md:text-[16px] text-[12px]'>{aboutMeInfo.title}</p>
            </div>
          )}
        </div>
        </div>

      </div>
      <div className={`xl:w-1/2 w-full p-5 flex justify-center ${inView ? styles.show : 'opacity-0'}`}>
        <img src={profile} alt="profile" className='m-auto xl:w-[85%]' />
      </div>
    </div>
  )
}

export default About