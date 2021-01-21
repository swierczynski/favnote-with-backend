import React, { useContext } from 'react';
import styles from './Sidebar.module.scss';
import ButtonIcon from '../../atoms/ButtonIcon/ButtonIcon'
import { ThemeContext } from '../../context/ThemeProvider';
import logoutIcon from './../../../assets/icons/logout.svg'
import bulbIcon from './../../../assets/icons/bulb.svg'
import penIcon from './../../../assets/icons/pen.svg'
import twitterIcon from './../../../assets/icons/twitter.svg';
import logoIcon from './../../../assets/icons/logo.svg';
import { NavLink } from 'react-router-dom'

const Sidebar = () => {

  const {themeBackground} = useContext(ThemeContext);

  const styleSidebar = {
    backgroundColor: themeBackground
  }

  return ( 
    <div style={styleSidebar} className={styles.wrapper}>
      <div className={styles.logo}>
        <NavLink to='/'>
          <img src={logoIcon} alt=""/>
        </NavLink>
      </div>
      <ul className={styles.mainBtn}>
        <li>
          <NavLink to='/notes' activeClassName={styles.active}>
            <ButtonIcon icon={penIcon} />
          </NavLink>
        </li>
        <li>
          <NavLink to='/twitters' activeClassName={styles.active}>
            <ButtonIcon icon={twitterIcon}/>
          </NavLink>
        </li>
        <li>
          <NavLink to='/articles' activeClassName={styles.active}>
            <ButtonIcon icon={bulbIcon}/>
          </NavLink>
        </li>
      </ul>
      <ul className={styles.logout}>
        <li>
          <NavLink to='/login' >
            <ButtonIcon icon={logoutIcon}/>
          </NavLink>
        </li>   
      </ul>
    </div>
   );
}
 
export default Sidebar;