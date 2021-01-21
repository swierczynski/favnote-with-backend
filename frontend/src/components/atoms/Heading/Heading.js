import React, { useContext } from 'react';
import styles from './Heading.module.scss';
import { ThemeContext } from '../../context/ThemeProvider';

const Heading = ({children, big}) => {

  // const { themeBackground } = useContext(ThemeContext);

  // const styleHeading = {
  //   backgroundColor: themeBackground,
  // }

  return ( 
    <h2 className={big ? styles.main : styles.inCards}>{children}</h2>
   );
}
 
export default Heading;