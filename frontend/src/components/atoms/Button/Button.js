import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeProvider';
import styles from './Button.module.scss';

const Button = ({children, secandary, onClick}) => {

  const { themeBackground } = useContext(ThemeContext);

  const stylesBtn = {
    backgroundColor: themeBackground
  }

  return ( 
    <button onClick={onClick} style={secandary ? null : stylesBtn} className={secandary ? styles.secandaryButton : styles.button}>{children}</button>
   );
}
 
export default Button;