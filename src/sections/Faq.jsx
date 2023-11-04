import { Accordion } from "../components";
import { data, variants } from "../constants";
import { motion } from "framer-motion";

const Faq = () => {

  const {icon, title, accordions} = data.faq

  return (
    <section id="faq" className="section py-24 mt-[480px] lg:mt-[280px]">
      <div className="container mx-auto max-w-[768px] lg:bg-faq bg-no-repeat bg-custom
      bg-center lg:h-[1160px] lg:pt-6">

        <motion.div 
        variants={variants.staggerTextContainer}
        initial='initial'
        whileInView={'animate'}
        viewport={{once: true}}
        className="section-title-group justify-start lg:justify-center -space-x-4 
        lg:max-w-[540px] mx-auto px-4 lg:px-0">
          <img src={icon} alt="icon"
          className="lg:hidden"
          />
          <motion.h2 
          variants={variants.fadeInUp}
          className="h2 section-title lg:mt-[100px]">
            {title} <span className="text-primary-200">.</span>
            </motion.h2>
        </motion.div>
        <motion.div 
        variants={variants.staggerAccordionContainer}
        initial='initial'
        whileInView={'animate'}
        viewport={{once: true}}
        className="flex flex-col gap-y-4 px-4">
          {
            accordions.map((accordion, i) => (
              <Accordion accordion={accordion} key={i} />
            ))
          }
        </motion.div>
      </div>
    </section>
  )
};

export default Faq;
