import { useState } from 'react';
import {FaChevronCircleUp, FaChevronCircleDown} from 'react-icons/fa'
import { motion } from 'framer-motion';
import { variants } from '../constants';

const Accordion = ({accordion}) => {
  const {question, answer} = accordion

  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.article
    variants={variants.fadeInLeft}
    onClick={() => setIsOpen(prev => !prev)}
    className='cursor-pointer'>
      <div className='bg-white border rounded-sm'>
        <div className='min-h-[60px] flex items-center justify-between px-[1.8rem]'>
          <h6 className='h6'>
            {question}</h6>
            <div>
              {
                isOpen ? (
                  <FaChevronCircleUp className='text-[20px] text-neutral-500' />
                 ) : (
                    <FaChevronCircleDown className='text-[20px] text-neutral-500'/>
                  )    
              }
            </div>
        </div>
        <div className={`${isOpen ? 'min-h-[200px] lg:min-h-[160px]' : 'min-h-0'}
        max-h-0 overflow-hidden flex justify-center transition-all px-[1.8rem]`}>
          <p className='mt-6'>
            {answer}</p>
        </div>
      </div>
    </motion.article>
  )
};

export default Accordion;
