import React, { useContext, useEffect, useState } from 'react'
import { Switch } from '@mui/material'
import { LightMode, DarkMode } from '@mui/icons-material'

import { styles } from '../../../styles.js'
import ThemeBtn from '../../button/ThemeBtn.jsx'

import NavLogo from './NavLogo.jsx'
import MenuImg from '../../image/MenuImg.jsx'
import NavDropMenu from './NavDropMenu.jsx'
import NavMenus from './NavMenus.jsx'

const Navbar = (props) => {

  const { isDark, setDark } = props

  const [active, setActive] = useState('')
  const [toggle, setToggle] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const themeToggle = () => {
    setDark(!isDark)
  }


  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      if (scrollTop > 100) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [isDark])

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-3 fixed top-0 z-20 
                     ${scrolled ? "bg-primary" : "bg-transparent"} 
                     ${isDark ? 'bg-' : 'bg-'}
                     hover:bg-textColor`}
    >
      <div className={`w-full flex justify-between items-center mx-auto`}>
        <NavLogo
          setActive={setActive}
        />
        <NavMenus
          active={active}
          setActive={setActive}
        />

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <MenuImg
            toggle={toggle}
            setToggle={setToggle} />
          <NavDropMenu
            active={active}
            setActive={setActive}
            toggle={toggle}
            setToggle={setToggle}
          />
        </div>

        <div className='flex items-center cursor-pointer'>
          <div className={`text-${isDark ? 'dark' : 'white'}`}><LightMode /></div>
          <div onClick={themeToggle}><Switch /></div>
          <div className={`text-${isDark ? 'white' : ' dark'}`}><DarkMode /></div>
        </div>

        {/* <div className='pl-5 text-lightGray'>
          <div className='sm:hidden'><ThemeBtn /></div>
          <div className='hidden flex items-center cursor-pointer' >
            <LightMode />
            <Switch />
            <DarkMode />
          </div>
        </div> */}

      </div>
    </nav >
  )
}

export default Navbar