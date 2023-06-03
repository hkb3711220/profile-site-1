import React from 'react'
import { workList } from '../constants'
import { styles } from '../styles'
import { useInView } from "react-intersection-observer"

const Work = () => {
  const [ref, inView] = useInView({
    rootMargin: '-200px 0px',
  });

  return (
    <div className='w-full' ref={ref}>
      <div className='w-full flex justify-center items-center mt-5'>
        <h2 className={`xl:text-[80px] lg:text-[60px] md:text-[50px] text-[40px] font-bold ${inView ? styles.show : 'opacity-0'}`}>My Work</h2>
      </div>
      {
        workList.map((workListItem, index) => 
          <div className={`mt-5 flex gap-5 flex-col p-10 ${ index%2 === 0 ? 'lg:flex-row': 'lg:flex-row-reverse bg-red-50' } ${inView ? styles.show : 'opacity-0'}`}>
            <div className='xl:w-1/2 w-full flex justify-center'>
              <img src={workListItem.image} className='w-3/4' alt="" />
            </div>
            <div className={`xl:w-1/2 w-full flex flex-col justify-center ${ index%2 === 0 ? 'lg:items-start': 'lg:items-end' } ${inView ? styles.show : 'opacity-0'}`}>
              <h3 className='text-[#ca3433] font-semibold lg:text-[30px] md:text-[20px] text-[15px]'>0{index+1}</h3>
              <h2 className='mt-5 lg:text-[40px] md:text-[30px] text-[25px] font-bold'>{workListItem.title}</h2>
              <ul className='flex gap-5 mt-5'>
                {
                  workListItem.tech.map((techName) => 
                  <li className='text-[#ca3433] font-medium md:text-[16px] text-[12px]'>{techName}</li>)
                }
              </ul>
              <p className={`text-secondary md:text-[16px] text-[12px] xl:w-3/4 w-full mt-3 ${ index%2 === 0 ? 'lg:text-start': 'lg:text-end' }`}>{workListItem.description}</p>
            </div>

          </div>
        )
      }


    </div>
  )
}

export default Work