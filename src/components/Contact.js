import React from 'react';
// Motion
import {motion} from 'framer-motion'
// Variants
import {fadeIn} from '../variants'

const Contact = () => {
  return (
    <section className='py-16 lg:section' id='contact'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          {/* TEXT */}
          <motion.div 
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: false, amount: 0.3}}
            className='flex-1 flex justify-center items-center'>
            <div >
              <h4 className='text-xl uppercase text-accent font-medium mb-2 tracking-wide'>Get in Touch</h4>
              <h2 className='text-[45px] lg:text-[90px] leading-none mb-12'>
                Let's Work <br/>Together! 
              </h2>
            </div>
          </motion.div>
          {/* Form */}
          <motion.form 
            variants={fadeIn('left', 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: false, amount: 0.3}}
            className='flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start'>
            <input type='text' className='bg-transparent border-b py-3 outline-none w-full 
            placeholder:text-white focus:border-accent transition-all' placeholder='Your name' />
            <input type='text' className='bg-transparent border-b py-3 outline-none w-full 
            placeholder:text-white focus:border-accent transition-all' placeholder='Your email' />
            <textarea className='bg-transparent border-b py-3 outline-none w-full 
            placeholder:text-white focus:border-accent transition-all resize-none mb-12' placeholder='Your massage'></textarea>
            <button className='btn btn-lg'>Send Massage</button>
          </motion.form>
        </div>
      </div>
    </section>
  )
};

export default Contact;
