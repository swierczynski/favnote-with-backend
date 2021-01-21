import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeProvider';
import styles from './Input.module.scss';
import searchIcon from '../../../assets/icons/magnifier.svg'

const Input = ({searchInput, placeholder, textarea, type, name, value, onChange, onBlur}) => {

  const { themeBackground } = useContext(ThemeContext)

  const styleInput = {
    backgroundColor: themeBackground,
  }
  const styleInputSearch = {
    backgroundImage: `url(${searchIcon})`
  }

  return ( 
    <>
    {textarea ? <textarea style={searchInput ? styleInputSearch : styleInput} className={searchInput ? styles.inputSearch : styles.input} type={type}  placeholder={placeholder} name={name} value={value} onChange={onChange}  onBlur={onBlur} />
    :
    <input style={searchInput ? styleInputSearch : styleInput} className={searchInput ? styles.inputSearch : styles.input} type={type}  placeholder={placeholder}  name={name} value={value} onChange={onChange} onBlur={onBlur} />
    }
    </>
   );
}
 
export default Input;