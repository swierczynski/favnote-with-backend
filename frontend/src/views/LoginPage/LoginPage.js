import { Form, Formik } from 'formik';
import React from 'react';
import Heading from '../../components/atoms/Heading/Heading';
import Input from '../../components/atoms/Input/Input';
import styles from './LoginPage.module.scss'
import logo from '../../assets/icons/logo.svg'
import { themeOptions } from '../../components/theme/MainTheme';
import Button from '../../components/atoms/Button/Button';
import { connect } from 'react-redux';
import { authenticate } from '../../store/actions'
import { Redirect } from 'react-router-dom';
import { routes } from '../../roots/roots'

const LoginPage = ({userID = null, authenticate}) => {

  const styleForBg = {
    backgroundColor: themeOptions.login
  }

  if(userID) {
    return <Redirect to={routes.home} />
  }
  return ( 
    <div style={styleForBg} className={styles.welcomePage}>
      <div className={styles.main}>
        <img src={logo} alt="favnote"/>
        <Heading big>Your Favplace to store notes, articles or twitter data</Heading>
        <div className={styles.form}>
          <Heading big>Sign in</Heading>
           <Formik
           initialValues={{username: '', password:''}}
           onSubmit={({username, password}) => {
            authenticate(
               username,
               password
             )
           }}
           >
             { ({values, handleChange})=> (
               <Form>
                <Input name='username' type='text' value={values.username} onChange={handleChange} placeholder='login'/>
                <Input name='password' type='password' value={values.password} onChange={handleChange} placeholder='password'/>
                <Button type='submit'>Sign in</Button>
               </Form>
             )
             }
           </Formik>
        </div>
      </div>
    </div>
   );
}

const mapDispatchToProps = dispatch => ({
  authenticate: (username, password) => dispatch(authenticate(username, password))
})


const mapStateToProps = state => ({
  userID: state.userID
})

const LoginPageConsumer = connect(mapStateToProps, mapDispatchToProps)(LoginPage)

 
export default LoginPageConsumer;
