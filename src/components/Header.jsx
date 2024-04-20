import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaCartArrowDown } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useContext } from 'react';
import { cartContext } from './context/Context';
import { Link } from 'react-router-dom';

function Header() {
  const [open, setOpen] = useState(false);

  const value = useContext(cartContext)

  return (
    <div className='flex  justify-between border border-gray-700 text-white text-xl p-4 fixed z-10 w-full bg-black '>
      <div>
        {/* logo */}
        <span className='text-4xl font-bold'>zaki</span>
        <span className='text-4xl font-bold text-yellow-600'>Food</span>
      </div>

      <div className='hidden md:block'>
        {/* menu bar */}
        <ul className='flex gap-9 font-bold mt-2 '>
          <li>
          <NavLink
                to="/"
                    className={({isActive}) =>
                        `block py-2 ${isActive ? "text-orange-700" : "" } pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-700 hover:text-2xl lg:p-0`
                    }
                >
                    Home
                 </NavLink>
          </li>
          <li>
          <NavLink
                to="/about"
                    className={({isActive}) =>
                        `block py-2 ${isActive ? "text-orange-700" : "" } pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-700 hover:text-2xl lg:p-0`
                    }
                >
                    About
                 </NavLink>
          </li>
          <li>
          <NavLink
                to="/ourfood"
                    className={({isActive}) =>
                        `block py-2 ${isActive ? "text-orange-700" : "" } pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-700 hover:text-2xl lg:p-0`
                    }
                >
                    Our Food
                 </NavLink>
          </li>
          <li>
          <NavLink
                to="/contact"
                    className={({isActive}) =>
                        `block py-2 ${isActive ? "text-orange-700" : "" } pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-700 hover:text-2xl lg:p-0`
                    }
                >
                    Contact
                 </NavLink>
          </li>
        </ul>
      </div>

      <div className='flex'>
        {/* icons */}
        <GiHamburgerMenu
          className='md:hidden block '
          onClick={() => setOpen(!open)}
        />
        <button className='text-2xl hover:text-orange-500'><span className='text-sm'> { value.cart} </span> <FaCartArrowDown  /> </button>
        
      </div>

      {/* Responsive menu */}
      {open && (
        <div className='md:hidden absolute  top-16 left-0 right-0  p-4'>
          <ul className='flex flex-col gap-3'>
            <li>
              <Link to='/' onClick={() => setOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to='/about' onClick={() => setOpen(false)}>
                About
              </Link>
            </li>
            <li>
              <Link to='/our-food' onClick={() => setOpen(false)}>
                Our Food
              </Link>
            </li>
            <li>
              <Link to='/contact' onClick={() => setOpen(false)}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Header;
