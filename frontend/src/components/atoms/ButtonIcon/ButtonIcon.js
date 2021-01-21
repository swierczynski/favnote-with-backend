import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeProvider';
import styles from './ButtonIcon.module.scss'

const ButtonIcon = ({icon, active, addItem, clicked}) => {

  const { themeBackground } = useContext(ThemeContext)

  const styleBtnIcon = {
    backgroundImage: `url(${icon})`,
  }
  const stylesButtonToAdd = {
    backgroundColor: themeBackground,
    backgroundImage: `url(${icon})`,
  }

  return ( 
    <button onClick={clicked} style={addItem ? stylesButtonToAdd :styleBtnIcon} className={styles.buttonIcon}></button>
   );
}
 
export default ButtonIcon;