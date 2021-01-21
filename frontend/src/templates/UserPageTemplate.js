import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types'
import Sidebar from '../components/organisms/Sidebar/Sidebar';
import styles from './UserPageTemplate.module.scss';
import { ThemeContext  } from '../components/context/ThemeProvider';
import { themeOptions } from '../components/theme/MainTheme';
import withPageContext from '../hoc/withPageContext'

const UserPageTemplate = ({children, pageContext}) => {

  const { setThemeBackground } = useContext(ThemeContext);
  const changeColorTheme = () => {
    setThemeBackground(themeOptions[pageContext.pageType])
  }

  useEffect(()=> {
    changeColorTheme()
  }, [])



  return ( 
    <>
    <Sidebar />
    <main className={styles.mainContent}>
      {children}
    </main>
    </>
   );
}

export default withPageContext(UserPageTemplate);