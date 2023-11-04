import { data, variants } from "../constants";
import { IoIosArrowDroprightCircle } from 'react-icons/io'
import { motion } from "framer-motion";


const About = () => {

  const {icon, title, subtitle1, subtitle2, link} = data.about


  return (
    <section id="about" className="py-[80px] md:py-[110px] lg:pt-[140px] lg:pb-[180px]">
      <motion.div 
      variants={variants.staggerContainer}
      initial='initial'
      whileInView={'animate'}
      viewport={{ once: true}}
      className="container mx-auto px-[20px] lg:px-[135px]">
        <motion.div
        variants={variants.fadeInUp}
        className="section-title-group justify-start">
          <img src={icon} alt="icon" />
          <h2 className="h2 section-title">
            {title}
            <span className="text-primary-200">.</span>
            </h2>
        </motion.div>

        <motion.p 
        variants={variants.fadeInUp}
        className="md:text-body-md mb-12">
          {subtitle1}</motion.p>
        <motion.p 
        variants={variants.fadeInUp}
        className="md:text-body-md mb-12">
          {subtitle2}</motion.p>

          <motion.div
          variants={variants.fadeInUp}
          >
            <a 
            className="link flex items-center gap-x-4 hover:gap-x-6 transition-all"
            href="#">
              {link}
              <IoIosArrowDroprightCircle className="text-2xl" />
            </a>
          </motion.div>
      </motion.div>
    </section>
  )
};

export default About;
