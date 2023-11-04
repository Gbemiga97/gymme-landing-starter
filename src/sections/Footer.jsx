import { Link } from "react-scroll";
import { data, variants } from "../constants";
import { motion } from "framer-motion";

const Footer = () => {
  const {logo, copyrightText} = data.footer

  return (
    <motion.footer
    variants={variants.staggerFooterContainer}
    initial='initial'
    whileInView={'animate'}
    viewport={{
      once: true
    }}
    className="bg-neutral-500 h-[125px] md-[195px] px-[20px]">
      <motion.div 
      variants={variants.fadeInUp}
      className="container mx-auto h-full flex justify-between items-center md:items-end md:pb-[50px]">

        <Link
        to="/"
        spy={true}
        className="cursor-pointer"
        >
        <img src={logo} alt="logo" />
        </Link>

        <small className="text-neutral-300 text-sm">
          {copyrightText}
          </small>
      </motion.div>
    </motion.footer>
  )
};

export default Footer;
