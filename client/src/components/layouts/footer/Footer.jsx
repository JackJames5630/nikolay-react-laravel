import React from 'react'
import { styles } from '../../../styles'
import DarkButton from '../../button/DarkButton'
import SendIcon from '@mui/icons-material/Send'
import EmailIcon from '@mui/icons-material/Email'
import SkillButtons from '../../../pages/welcome/SkillButtons'
import FooterBtn from '../../button/FooterBtn'
import { SiHabr } from "react-icons/si";
import { LiaLinkedinIn } from "react-icons/lia";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";
import { TbBrandX } from "react-icons/tb";
import { vcRu } from '../../../assets'
import { navLinks } from '../../../constants'

const Footer = () => {

  const footerBtns = [
    'Lorem', 'Ipsum', 'Dolor sit', 'Amet', 'Aenean'
  ]

  return (
    <>
      <div className={styles.footerStyle}>
        <div className={styles.footerPart}>
          <div className='w-[40%] pd-3'>
            Physical space is often conceived in three linear dimensions,
            although modern physicists usually con
          </div>
          <input className='bg-info p-3 w-[200px]' />
        </div>
        <div className={styles.footerPart}>
          <div className='text-[25px]'>
            <div className='cursor-pointer'><SendIcon className='text-lightPurple' />@login</div>
            <div className='cursor-pointer'><EmailIcon className='text-lightPurple' />mail@site.ru</div>
          </div>
          <div className='flex items-center'>
            <DarkButton title='Lorem ipsum sit' />
          </div>
        </div>
        <div className={styles.footerPart}>
          <ul className='flex my-3 gap-2'>
            {
              navLinks.map((nav) => (
                <a href={`#${nav.id}`}
                  key={nav.id}
                  onClick={() => setActive(nav.title)}
                >
                  <FooterBtn title={nav.title} />
                </a>
              ))
            }
          </ul>
          <ul className='flex my-3 gap-1'>
            <li className={styles.footerBtn}><SiHabr /></li>
            <li className={styles.footerBtn}><img src={vcRu} /></li>
            <li className={styles.footerBtn}><LiaLinkedinIn /></li>
            <li className={styles.footerBtn}><FaFacebookF /></li>
            <li className={styles.footerBtn}><IoLogoYoutube /></li>
            <li className={styles.footerBtn}><TbBrandX /></li>
          </ul>
        </div>
        <hr className='border border-lightGray my-4' />
        <div className={`${styles.footerPart} text-lightGray text-[15px]`}>
          <p>© 2024 прикрепить файл</p>
          <p>обработку персоналных данных</p>
        </div>
      </div>
    </>
  )
}

export default Footer