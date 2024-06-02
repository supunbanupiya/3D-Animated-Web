import React from 'react'
import { motion } from "framer-motion"

const BgAnimation = () => {
  return (
    <>
    <motion.div 
     initial={{
        width: 0,
     }}
     animate={{
        width: "100vw",
     }}
     transition={{
        duration: 1.1,
        ease: 'easeInOut',
        delay: 0.2
     }}
    className='absolute top-0 left-0 z-0 h-screen bg-gradient-to-b from-red-300 to-yellow-400'>
    </motion.div>
    <motion.div 
    iniitial={{
        width:0,
    }}
    animate={{
       width:'90vw'
    }}
    transition={{
        duration:1,
        ease:'easeInOut',
        delay:0.7
    }}
    className='bg-red-400 border-t-2 border-brown-600 h-[20vh] z-20 absolute left-0 bottom-0'>

    </motion.div>
    <motion.div 
    initial={{
       x:'-100vw',
       rotateZ:20
    }}
    animate={{
        x:0,
       
    }}
    transition={{
        duration:1,
        ease:'easeInOut',
        delay:0.9
    }}
    className='bg-yellow-600 h-[170vh] w-[60vw] z-10 absolute -left-[10vw] -top-[50vh]'>

    </motion.div>
    </>
  )
}

export default BgAnimation;
