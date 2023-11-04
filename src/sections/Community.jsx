import { CommunitySlider } from "../components";
import { data, variants } from "../constants";
import { motion } from "framer-motion";

const Community = () => {

  const {icon, title, testimonials,} = data.community


  return (
    <section  id='community' className="section relative mt-24 py-24">
      <div className="container mx-auto">
        <motion.div 
        variants={variants.staggerTextContainer}
        initial='initial'
        whileInView={'animate'}
        viewport={{ once: true }}
        className="flex">

          <motion.div
          variants={variants.fadeInRight}
           className="section-title-group max-w-[240px]  px-4 lg:px-0 lg:ml-0 mx-auto">
            <img 
            src={icon}
             alt="icon" />
            <h2 className="h2 section-title">
              {title}<span className="text-primary-200">.</span>
              </h2>
          </motion.div>

          <motion.div 
          variants={variants.fadeInLeft}
          className="absolute -right-[375px] lg:-right-[280px] w-[1140px] top-[16rem] lg:top-20">
            <CommunitySlider testimonials={testimonials} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
};

export default Community;
