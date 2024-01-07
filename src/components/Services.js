import React from 'react';
// Icon
import {BsArrowUpRight} from 'react-icons/bs'
// Motion
import {motion} from 'framer-motion'
// Variant
import {fadeIn} from '../variants'


// Service Data
const services = [
  {
    name: 'UI/UX Designer',
    description: 
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pretium ex at turpis dignissim, vel dapibus odio fringilla.',
    link: 'Learn More'
  },
  {
    name: 'Development',
    description: 
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pretium ex at turpis dignissim, vel dapibus odio fringilla.',
    link: 'Learn More'
  },
  {
    name: 'Digital Marketing',
    description: 
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pretium ex at turpis dignissim, vel dapibus odio fringilla.',
    link: 'Learn More'
  },
  {
    name: 'Product Branding',
    description: 
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pretium ex at turpis dignissim, vel dapibus odio fringilla.',
    link: 'Learn More'
  }
]


const Services = () => {
  return (
    <section className="section" id="service">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* Text */}
          <motion.div 
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: false, amount: 0.3}}
            className="flex-1 lg:bg-services lg:bg-contain lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0">
            <h2 className="h2 text-accent mb-6">What I Do.</h2>
            <h3 className="h3 max-w-[455px] mb-16">
              I'm a Freelance FrontEnd Developer With 6 Months of experience
            </h3>
            <button className="btn btn-sm">See My WORK</button>
          </motion.div>
          {/* Service */}
          <motion.div 
            variants={fadeIn('left', 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: false, amount: 0.3}}
            className='flex-1'>
            {/* Service List */}
            <div>
              {services.map((service, index) => {
                // Destructure service
                const {name, description, link} = service
                return (
                  <div className='border-b border-white/20 h-[146px] mb-[38px] flex' key={index}>
                    <div className='max-w-[476px]'>
                      <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6'>{name}</h4>
                      <p className='font-secondary leading-tight'>{description}</p>
                    </div>
                    <div className='flex flex-col flex-1 items-end'>
                      <a href='#' className='btn w-9 h-9 mb-[42px] flex justify-center items-center'>
                        <BsArrowUpRight />
                      </a>
                      <a href='#' className='text-gradient text-sm'>
                        {link}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
