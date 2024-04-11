import React from 'react'
import { navLinks } from '../../../constants';



const NavDropMenu = (props) => {

  const { toggle, setToggle, active, setActive } = props

  return (
    <div className={`${!toggle ? "hidden" : "flex"} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
      <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
        {navLinks.map((nav) => (
          <li key={nav.id}
            className={`font-poppins font-medium cursor-pointer text-[16px] ${active === nav.title ? "text-white" : "text-secondary"}`}
            onClick={() => {
              setToggle(!toggle);
              setActive(nav.title);
            }}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default NavDropMenu