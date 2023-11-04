import { Link } from "react-scroll";
import { data, variants } from "../constants";
import { Nav, NavMobile } from "../components";
import {RiCloseFill, RiMenu4Fill} from 'react-icons/ri'
import { useEffect, useState } from "react";
import { motion } from "framer-motion";


const Header = () => {
  

  


  const {logo, btnLoginText, btnSignupText} = data.header

  const [isActive, setIsActive] = useState(false)

  const [showNav, setShowNav] = useState(false)


  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 80 ? setIsActive(true) : setIsActive(false)
    })
  })

  return (
    <motion.header
    variants={variants.fadeInDown}
    initial='initial'
    whileInView={'animate'}
    viewport={{once: true}}
    className={`${isActive ? 'bg-neutral-500 py-[1rem] ' : 'bg-transparent py-[20px]'}
    fixed max-w-[1440px] z-30 left-0 right-0 mx-auto flex justify-between items-center px-[20px] 
    lg:px-[80px] transition-all duration-300`}>

        <Link 
        to='/'
        spy={true}
        >
        <img
        className="h-[1.8rem] cursor-pointer" 
        src={logo}
         alt="logo" />
        </Link>

        <Nav />

        <div className="hidden xl:flex space-x-4"> 
        <button className="btn btn-sm text-white hover:text-primary-200 transition">
          {btnLoginText}</button>
          <button className="btn btn-sm btn-primary">
            {btnSignupText}</button>
        </div>

        <button 
        onClick={() => setShowNav(prev => !prev)}
        className=" text-primary-200 text-3xl xl:hidden absolute right-4  cursor-pointer">
          {
            showNav ? <RiCloseFill /> : <RiMenu4Fill />
          }
        </button>

        <NavMobile showNav={showNav} setShowNav={setShowNav} />
    </motion.header>
  )
};

export default Header;
