import React, { useState } from 'react';
import { Bars4Icon, XMarkIcon } from '@heroicons/react/24/solid'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const routes = [
        {
          id: 1,
          name: "Home",
          path: "/"
        },
        {
          id: 2,
          name: "About",
          path: "/about"
        },
        {
          id: 3,
          name: "Products",
          path: "/products"
        },
        {
          id: 4,
          name: "Services",
          path: "/services"
        },
        {
          id: 5,
          name: "Contact",
          path: "/contact"
        }
      ];
      

    return (
        <div className='px-8 py-2'>
            <nav>
                <div className='cursor-pointer md:hidden' onClick={()=>setIsOpen(!isOpen)}>
                    <span>
                        {isOpen ? 
                        <XMarkIcon className='h-6 w-6 text-red-500' />
                        :<Bars4Icon className="h-6 w-6 text-blue-500" />
                        }
                     </span>
                  
                </div>

                <ul className={`md:flex duration-500 p-4 md:static rounded-md bg-teal-200 absolute ${isOpen?'top-10': '-top-80'}`} >
                {
                    routes.map(route => <li className='mr-8 hover:bg-teal-400 px-4 py-2 rounded-md' key={route.id}><a className='font-semibold' href={route.path}>{route.name}</a></li>)
                }
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;