import { Link } from "react-scroll";
import { data } from "../constants";


const Nav = () => {
  return (
    <nav className="hidden lg:flex">
      <ul className="flex text-white gap-x-8">
        {
          data.nav.map(({name, href}, i) => (
            <li key={i}>
              <Link
              to={href}
              className="hover:text-primary-200 cursor-pointer transition"
              >
              {name}
              </Link>
            </li>
          ))
        }
      </ul>
    </nav>
  )
};

export default Nav;
