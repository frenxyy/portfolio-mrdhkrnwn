import React from 'react';
// Motiom
import {motion} from 'framer-motion'
// Variant
import {fadeIn} from '../variants'
// img
import Img1 from '../assets/portfolio-1.jpg'
import Img2 from '../assets/portfolio-2.jpg'
import Img3 from '../assets/portfolio-3.jpg'
import Img4 from '../assets/portfolio-4.jpg'
import Img5 from '../assets/portfolio-5.jpg'

const Work = () => {
  const portfolio = [
    {
      name: 'With JS Murni, Html, Boostrap',
      title: 'E-Commerce Website',
      img : Img1 ,
    },
    {
      name: 'With React JS',
      title: 'E-Commerce Landing Page',
      img : Img2 ,
    },
    {
      name: 'With NextJS and API MovieDB',
      title: 'Movie Website',
      img : Img3 ,
    },
    {
      name: 'With HTML, CSS',
      title: 'Coffe Shop Landing Page',
      img : Img4 ,
    },
  ]

  return (
    <section className="section" id="work">
      <div className="container mx-auto">
        <div className="flex flex-col justify-center items-center gap-x-10">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col text-center gap-y-12 mb-10"
          >
            {/* Text */}
            <div>
              <h2 className="h2 text-[46px] leading-tight text-accent">
                My Latest <br />
                Work
              </h2>
              <p className="max-w-lg mb-10">
                Ini adalah Beberapa Project yang saya Kerjakan, Dan Juga Latihan Saya Selama 5-6 Bulan.
                4 Contoh Website Ini adalah yang terbaik mungkin diantara Website yang saya buat selama ini. Namun 
                Ada beberapa lagi yang belum saya tampilkan. Seterusnya saya akan Masukkan disini. Next Project
              </p>
              <button className="btn btn-sm">View ALL Project</button>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-y-10 md:gap-x-[72px]">
            {portfolio.map((port) => {
              return (
                <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
                  <div
                    className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"
                  ></div>
                  <img
                    src={port.img} alt=""
                    className="group-hover:scale-125 transition-all duration-500"
                  />
                  <div className="absolute -bottom-full left-12 group-hover:bottom-16 transition-all duration-500 z-50">
                    <span className="text-gradient">{port.name}</span>
                  </div>
                  <div className="absolute -bottom-full left-12 group-hover:bottom-8 transition-all duration-700 z-50">
                    <span className="text-2xl text-white">{port.title}</span>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
