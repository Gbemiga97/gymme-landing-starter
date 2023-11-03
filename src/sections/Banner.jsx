import { data, variants } from "../constants";
import { motion } from "framer-motion";

const Banner = () => {

  const {titlePart1, titlePart2, subtitle, textBtn, img} = data.banner

  return (
    <section className="bg-neutral-500 h-[790px]">
      <motion.div
      variants={variants.staggerContainer}
      initial='initial'
      whileInView={'animate'}
      className="container mx-auto h-full">
        <div className="flex items-center h-full relative -space-x-48 lg:-space-x-24">

          <motion.div 
          variants={variants.fadeInDown}
          className="text-white flex-1 z-10 pl-6 lg:pl-0">
            <h1 className="h1 text-white mb-8">
              {titlePart1} <br /> 
              <span className="text-primary-200">
                {titlePart2}</span>
              </h1>
              <p className="max-w-[415px] text-body-md lg:text-body-lg mb-8">
                {subtitle}</p>
              <button className="btn btn-sm lg:btn-lg btn-secondary">
                {textBtn}</button>
          </motion.div>

          <motion.div
          variants={variants.fadeInRight}
          className="bg-blue-300 w-full h-full bg-banner bg-cover bg-right
          lg:bg-center bg-no-repeat flex-1" />
            
         
        </div>
      </motion.div>
    </section>
  )
};

export default Banner;
