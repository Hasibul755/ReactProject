
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaWindowClose } from "react-icons/fa";

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

  return (

    <nav className="bg-gray-800 text-white py-4 md:py-10">
        <div className=" container mx-auto flex justify-between items-center">
            <h3> React Practice</h3>

            {/* mobail menu Button */}
            <div>
                <button  onClick={toggleMenu}>
                    {
                        isOpen ? <FaWindowClose /> :  <FaBars /> 
                    }
                
               
                </button>
            </div>

            <ul className="flex space-x-4 md:space-x-8">
                <li> Home </li>
                <li> Products </li>
                <li> Blogs </li>
                <li> Contact </li>
                <li> About </li>
            </ul>

            <button> Login </button>
        </div>
    </nav>
  )
}

export default Navbar