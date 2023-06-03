import React, {useEffect} from 'react'
import { Navbar, Hero, About, Work, Contact, Footer } from './components'
import { BrowserRouter as Router } from 'react-router-dom'
import { motion, useMotionValue, useSpring } from "framer-motion";

const App = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // TODO
    const moveCursor = (e:MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <Router>
      <div>
        <div className='relative w-full'>
          <Navbar />
          <Hero /> 
        </div>
        <About />
        <Work />
        <Contact />
        <Footer />
        <motion.div
        className=" fixed left-0 top-0 w-[32px] h-[32px] rounded-2xl border-2 border-black mix-blend-difference z-999 pointer-events-none bg-white"
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
        }}
      />
    </div>
    </Router>
  )
}

export default App