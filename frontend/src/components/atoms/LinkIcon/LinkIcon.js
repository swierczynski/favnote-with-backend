import React from 'react';
import linkIcon from '../../../assets/icons/link.svg'
import styles from './LinkIcon.module.scss'

const LinkIcon = ({link}) => {

  const styleLink = {
    backgroundImage: `url(${linkIcon})`
  }

  return ( 
      <a style={styleLink} className={styles.linkIcon} href={link}/>
   );
}
 
export default LinkIcon;