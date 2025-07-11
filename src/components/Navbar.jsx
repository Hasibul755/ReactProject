
import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaWindowClose } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);
     const [activeLink, setActiveLink] = useState('/');
     const location =  useLocation();
     

     useEffect(() => {
        setActiveLink(location.pathname || '/');
     }, [location.pathname]);

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    const handleLinlClick = (path) => {
        setActiveLink(path);

    }


  return (

    <nav className="bg-gray-800 text-white py-4 md:py-10 sticky top-0 z-10 border-b-4 border-green-500">
        <div className=" container mx-auto flex justify-between items-center">
            <h3 className="text-xl font-bold"> Simple React</h3>

            {/* mobail menu Button */}
            <div className="md:hidden">
                <button  onClick={toggleMenu}>

                    {
                        isOpen ? <FaWindowClose /> :  <FaBars /> 
                    }
                    
                </button>
            </div>

            <ul className=" space-x-4 md:space-x-8 hidden md:flex">

                <li>
                     <Link to={'/'}
                        onClick={() => handleLinlClick('/')}
                        className={`${activeLink === '/' ? 'text-green-600' :' hover:text-green-600' }`}>
                        
                        Home
                    </Link>    
                </li>              
                <li>
                     <Link to={'/products'} 

                        onClick={() => handleLinlClick('/products')} 
                        className={`${activeLink === '/products' ? 'text-green-600' :' hover:text-green-600' }`}>
                          Products 
                    </Link>
                </li>               
                <li>
                     <Link to={'/blogs'}
                        onClick={() => handleLinlClick('/blogs')}
                        className={`${activeLink === '/blogs' ? 'text-green-600' :' hover:text-green-600' }`}>
                        
                        Blogs 
                    </Link>
                </li>
                <li>
                     <Link to={'/contact'}
                        onClick={() => handleLinlClick('/contact')}
                        className={`${activeLink === '/contact' ? 'text-green-600' :' hover:text-green-600' }`}>

                         Contact
                    </Link>
                </li>
                
                <li>
                    <Link to={'/about'}
                        onClick={() => handleLinlClick('/about')}
                        className={`${activeLink === '/about' ? 'text-green-600' :' hover:text-green-600' }`}>

                         About 
                     </Link>
                </li>
            </ul>

            <button className="hidden md:block bg-white text-black px-4 py-1 rounded cursor-pointer hover:bg-green-500  "> Login </button>

            {/* mobail menue colufs */}
            <div className={`md:hidden w-full absolute bg-green-500 top-full left-0 ${isOpen ? 'block' : 'hidden'}`}>
            <ul className="flex flex-col items-center py-4 space-y-2">
                <li className="hover:text-black"> Home </li>
                <li className="hover:text-black"> Products </li>
                <li className="hover:text-black"> Blogs </li>
                <li className="hover:text-black"> Contact </li>
                <li className="hover:text-black"> About </li>
                <li>
                    <button className=" bg-white text-black px-4 py-1 rounded cursor-pointer hover:bg-green-2000 "> Login </button>
                </li>
            </ul>

            </div>
        </div>
    </nav>
  )
}

export default Navbar





