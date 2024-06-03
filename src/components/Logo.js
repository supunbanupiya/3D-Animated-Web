import React from 'react'
import { motion } from 'framer-motion'

const Logo = () => {
  return (
    <motion.div 
    initial={{y:-100}}
    animate={{y:0}}
    transition={{
      delay:1.3,
      type:'spring',
      stiffness:130
    }}
    className='text-white'>
     <div className='text-3xl tracking-widest uppercase'> Fashion Bug </div>
     <div className='text-sm tracking-widest text-gray-300 uppercase text'> Best in the Market right now!</div>
    </motion.div>
   
  )
}

export default Logo