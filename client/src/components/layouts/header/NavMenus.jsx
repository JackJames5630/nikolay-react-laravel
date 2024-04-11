import React from 'react'
import { navLinks, signInData, signUpData } from '../../../constants'
// import { StyledWhiteButton } from '../../button/LinkBtn'
// import DialogModal from '../../modal/DialogModal'
import WhiteButton from '../../button/WhiteButton'


const NavMenus = (props) => {

  const { active, setActive } = props

  return (
    <ul className='list-none hidden sm:flex flex-row md:gap-5 xm:gap-2 '>
      {
        navLinks.map((nav) => (
          <a href={`#${nav.id}`}
            key={nav.id}
            onClick={() => setActive(nav.title)}
          >
            <WhiteButton title={nav.title} />
          </a>
        ))
      }
      {/* <li>
        <DialogModal modalTitle='Sign Up' data={signUpData} />
      </li>
      <li>
        <DialogModal modalTitle='Sign In' data={signInData} />
      </li>
      <li> <StyledWhiteButton style={{ backgroundColor: 'red', color: 'yellow' }}>Sign Out</StyledWhiteButton></li> */}
    </ul>
  )
}

export default NavMenus