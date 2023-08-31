import React, { useRef } from 'react'
import { contact } from '../constants'
import { styles } from '../styles'
import { useInView } from "react-intersection-observer"
import emailjs from "@emailjs/browser"

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const inputList = [
    { name: "user_name", placeholder: "Name" },
    { name: "user_subject", placeholder: "Subject" },
    { name: "user_email", placeholder: "Email" },
  ]
  const [ref, inView] = useInView({
    rootMargin: '-200px 0px',
  });

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formRef.current != null) {
      emailjs.sendForm(
        process.env.REACT_APP_SERVICE_ID!,
        process.env.REACT_APP_TEMPLATE_ID!,
        formRef.current,
        process.env.REACT_APP_PUBLIC_KEY!)
        .then((result) => {
          console.log(result.text);
        }, (error) => {
          console.log(error.text);
        });
    }

  }


  return (
    <div className='mt-5 flex xl:flex-row flex-col sm:p-10 p-10 w-full gap-5' ref={ref}>
      <div className='xl:w-1/2 w-full xl:ml-20'>
        <h2 className='xl:text-[80px] lg:text-[60px] md:text-[50px] text-[40px] font-bold'>Contact Me</h2>
        <p className='text-secondary mt-2 md:text-[16px] text-[12px] lg:w-[85%] w-full'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis reprehenderit dolorum eum quo, expedita cumque consequuntur quisquam sed, harum dolores non odit, exercitationem ipsam quas. Adipisci aliquid ullam rem quam.
        </p>
        <div className={`mt-10 ${inView ? styles.show : 'opacity-0'}  xl:items-end item-start`}>
          {
            contact.map((item) =>
              <div className='lg:text-[26px] text-[20px] my-2 w-500 flex flex-row items-center gap-5'>
                {<item.icon className='text-[#ca3433]' />}
                {item.info}
              </div>
            )
          }
        </div>

      </div>
      <div className='xl:w-1/2 w-full justify-center items-center p-3'>
        <form ref={formRef} onSubmit={sendEmail} className='flex flex-col items-center justify-center mt-[20px]'>
          {
            inputList.map((item) =>
              <label className='relative w-full mt-5'>
                <input type="text" placeholder={item.placeholder} autoComplete='off' name={item.name} required
                  className='bg-white border-1 rounded-xl border-opacity-50 outline-none h-20 lg:w-[90%] w-full focus:border-[#ca3433] focus:text-black p-4 placeholder-opacity-0 placeholder-gray-300 ' />
                <span className='lg:text-[26px] md:text-[20px] text-secondary text-[16px] absolute top-6 left-0 mx-3 px-2 transition duration-200 input-text'>{item.placeholder}</span>
              </label>
            )
          }
          <label className='relative w-full mt-5'>
            <textarea rows={5} placeholder="message" autoComplete='off' name="message" required
              className='bg-white border-1 rounded-xl border-opacity-50 outline-none h-[25vh] lg:w-[90%] w-full focus:border-[#ca3433] focus:text-black p-4 resize-none placeholder-opacity-0 placeholder-gray-300' />
            <span className='lg:text-[26px] md:text-[20px] text-[16px] text-secondary absolute top-6 left-0 mx-3 px-2 transition duration-200 input-text'>Message</span>
          </label>
          <div className='mt-10 w-full flex'>
            <button type='submit' className='lg:text-[26px] md:text-[20px] text-[16px] border-2 w-150 p-3 border-black rounded-xl hover:text-white hover:bg-black'>Submit</button>
          </div>
        </form>
      </div>

    </div>
  )
}

export default Contact