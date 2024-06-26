import { AssetsImage } from "../../../../../assets/assets"
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import { DropMenu } from "./components/DropMenu"
import { useState } from "react"
import { ProfileNavigate } from "./components/ProfileNavigate"

export const Header = ({ ClickHadel }) => {
    const [isClick, setIsClick] = useState();
    const token = localStorage.getItem('token');
    
    const link_view = {
        
        visible: {
            opacity: 1,
            transition: {
                when: 'beforeChildren',
                staggerChildren: 0.1
            }
        },
        
        hidden: {opacity: 0},
    }

    const link_children_view = {
        visible: {opacity: 1, y: 0},
        
        hidden: {opacity: 0, y: -20},
    }

    const HandelClickName = (event) => {
        ClickHadel(event.target.name)
    }

    return (
        <>
            <nav className="topnav">
                <NavLink to={'/'}>
                    <motion.img 
                        variants={link_children_view}
                        initial='hidden'
                        animate='visible' 
                        transition={{delay: 0.2}}
                        src={AssetsImage.logo} 
                        alt="logo" 
                    />
                </NavLink>

                <section className="topnav_links">
                    <motion.ul
                        initial='hidden'
                        whileInView='visible'
                        variants={link_view}
                        viewport={{once: true}}
                    >
                        <motion.li variants={link_children_view}>
                            <NavLink to={'/'} className="actived">Главная</NavLink>
                        </motion.li>

                        <motion.li variants={link_children_view}>
                            <NavLink to={'/tours'}>Туры</NavLink>
                        </motion.li>

                        <motion.li variants={link_children_view}>
                            <NavLink to={'/service'}>Услуги</NavLink>
                        </motion.li>

                        <motion.li variants={link_children_view}>
                            <NavLink to={'/contact'}>FAQ/Контакты</NavLink>
                        </motion.li>

                        {/* <motion.li variants={link_children_view}>
                            <NavLink>Язык</NavLink>
                        </motion.li> */}

                    </motion.ul>
                </section>


               {
                    token ?
                    <ProfileNavigate />
                    :
                    <motion.section 
                        variants={link_view}
                        initial='hidden'
                        whileInView='visible'
                        viewport={{once: true}}
                        className="topnav_auth"
                    >
                        <button onClick={HandelClickName} name="Регистрация"><span>Регистрация</span></button>
                        <button onClick={HandelClickName} name="Вход"><span>Вход</span></button>
                    </motion.section>
               }

                <motion.button whileTap={{scale: 0.8}} onClick={(event) => {setIsClick(event)}} className="topnav_dropmenu_btn"><span className="material-symbols-outlined">menu</span></motion.button>
            </nav>
            <DropMenu isClicked={isClick} />
        </>
    )
}