import { data, variants } from "../constants";
import { motion } from "framer-motion";

const Join = () => {

  const {image, subtitle, btnText} = data.join

  return (
    <section className="bg-neutral-500 mt-[10rem]  min-h-[537px]">
      <div className="container mx-auto">
        <motion.div
        variants={variants.staggerContainer}
        initial='initial'
        whileInView={'animate'}
        viewport={{ once: true }}
        className="flex flex-col relative md:flex-row md:items-center md:-space-x-12
        -space-y-24 justify-center items-center  ">

          <motion.div
          variants={variants.fadeInRight}
          className="-mt-[80px]  max-w-[276px] md:max-w-[442px] lg:max-w-full self-start">
            <img src={image} alt="trainer" />
          </motion.div>

          <motion.div 
          variants={variants.fadeInLeft}
          className="max-w-[350px]">
            <h1 className="text-white h1 md:text-[60px] md:leading-[62px] mb-4 lg:mb-6">
            Wanna join <span className="text-primary-200 ">&</span> have fun?
            </h1>
            <p className="text-body-sm md:text-body-md mb-4 lg:mb-6 max-w-[348px]
             text-white  md:max-w-[470px] lg:max-w-[492px]">
              {subtitle}</p>
            <button className="btn btn-secondary btn-lg">
              {btnText}</button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
};

export default Join;
