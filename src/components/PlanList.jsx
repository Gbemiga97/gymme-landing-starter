import { useState } from 'react';
import {BsCheckCircleFill} from 'react-icons/bs'
import { motion } from 'framer-motion'; 
import { variants } from '../constants';


const PlanList = ({plans}) => {
  const [index, setIndex] = useState(1)


  return (
    <motion.div 
    variants={variants.staggerContainer}
    initial='initial'
    whileInView={'animate'}
    viewport={{once: true}}
    className='flex flex-col lg:flex-row items-center justify-center max-w-[1280px] mx-auto gap-y-4'>
      {
        plans.map(({name, price, list, delay}, Ci) => (
          <motion.article
          variants={variants.fadeInUp}
          onClick={() => setIndex(Ci)}
          className='w-full md:max-w-[620px] lg:max-w-[405px] rounded-sm px-4 lg:min--[550px]'
          key={Ci}>

            <div className={`${Ci === index ? 'bg-neutral-500 text-white lg:scale-110        ' : 'bg-neutral-400/10 text-neutral-500'}
            flex flex-row lg:flex-col gap-x-16 gap-y-8 lg:gap-x-0 items-center justify-center lg:justify-normal  py-[40px] px-[1.8rem] lg:min-h-[550px] transition `} >
              <div >
              <div>
                <h5 className={`${Ci === index ? 'bg-white text-neutral-500' : 'bg-neutral-500 text-white'} h-[26px] 
                font-primary text-sm font-semibold min-w-min mx-auto px-[14px] flex items-center justify-center lg:mb-8  mb-4`}>
                  {name}</h5>
              </div>
              <h3 className={`${Ci === index ? 'text-white' : ''} text-[40px] lg:text-[50px] font-primary font-extrabold text-center
              tracking-[0.1px] leading-none`}>
                {price}<span className='text-3xl'>$</span>
                </h3>
                <p className='text-center text-sm font-medium'>/month</p>
            </div>
            

            <div>
            <ul className='flex flex-col gap-y-4 mb-8'>
              {
                list.map(({name}, i) => (
                <li className='flex items-center gap-x-[10px]'>
                  <BsCheckCircleFill className='text-lg' />
                  <p>{name}</p>
                </li>
                ))
              }
            </ul>
            <button className={`${Ci === index ? 'bg-white text-neutral-500' : 'border border-neutral-500'}
            btn btn-lg rounded-[1px] lg:mx-auto`}>
              Join Now</button>
            </div>
            </div>
          </motion.article>
        ))
      }
    </motion.div>
  )
};

export default PlanList;
