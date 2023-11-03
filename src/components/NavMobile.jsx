import { Link } from "react-scroll";
import { data } from "../constants";


const NavMobile = ({showNav, setShowNav}) => {
  return (
    <nav className={`${showNav ? 'min-h-screen' : 'min-h-0'} lg:hidden w-full  bg-neutral-500   
    fixed top-0 left-0 right-0 -bottom-12 -z-10 overflow-hidden transition-all h-0`}>
      <ul className="flex flex-col justify-center items-center gap-y-8 w-full h-full">
        {
          data.nav.map(({name, href}, i) => (
            <li key={i}>
              <Link
              onClick={() => setShowNav(false)}
              to={href}
              className="text-white text-body-md"
              >
              {name}
              </Link>
            </li>
            
          ))
        }
      </ul>
           <div className="-mt-44 flex justify-center gap-x-8">
           <button className="btn btn-lg text-white">
            Log in</button>
             <button className="btn btn-lg btn-primary">
              Sign up</button>
           </div>
    </nav>
  )
};

export default NavMobile;
