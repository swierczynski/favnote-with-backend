import React from 'react';
import styles from './Avatar.module.scss'

const Avatar = ({account}) => {
  return ( 
      <img className={styles.avatar} src={account}  alt="twitter account"/>
   );
}
 
export default Avatar;