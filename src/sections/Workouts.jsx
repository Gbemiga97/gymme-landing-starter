import { WorkoutSlider } from "../components";
import { data, variants } from "../constants";
import { motion } from "framer-motion";

const Workouts = () => {

  const { title, icon, programs } = data.workouts

  return (
    <section id="workouts" className="section py-24">
      <motion.div
      variants={variants.staggerContainer}
      initial="initial"
      whileInView={'animate'}
      viewport={{ once: true }}
      className="container mx-auto">
        <motion.div 
        variants={variants.fadeInUp}
        className="section-title-group max-w-[540px] mx-auto px-4 lg:px-0">
          <img src={icon} alt="icon" />
          <h2 className="h2 section-title">
            {title}</h2>
        </motion.div>
      </motion.div>

      <motion.div
      variants={variants.fadeInLeft}
      initial='initial'
      whileInView={'animate'}
      viewport={{once: true}} 
      >
        <WorkoutSlider programs={programs} />
      </motion.div>
    </section>
  )
};

export default Workouts;
