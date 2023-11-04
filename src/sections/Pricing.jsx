import { PlanList } from "../components";
import { data, variants } from "../constants";
import { motion } from "framer-motion";

const Pricing = () => {

  const {icon, title, plans} = data.pricing


  return (
    <section id="pricing" className="section py-24">
      <motion.div
      variants={variants.staggerTextContainer}
      initial='initial'
      whileInView={'animate'}
      viewport={{
        once: true
      }}
      className="container mx-auto">
        <motion.div
        variants={variants.fadeInUp}
        className="section-title-group max-w-[540px] mx-auto px-4 lg:px-0">
          <img src={icon} alt="icon" />
          <h2 className="h2">
            {title}
            <span className="text-primary-200">.</span>
            </h2>
        </motion.div>
      </motion.div>

      <PlanList plans={plans} />
    </section>
  )
};

export default Pricing;
