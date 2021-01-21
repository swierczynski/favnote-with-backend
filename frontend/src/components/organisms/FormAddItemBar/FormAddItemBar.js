import React, { useContext, useState } from 'react';
import Button from '../../atoms/Button/Button';
import Input from '../../atoms/Input/Input';
import styles from './FormAddItemBar.module.scss'
// import withPageContext from '../../../hoc/withPageContext'
import Heading from '../../atoms/Heading/Heading';
import { ThemeContext } from '../../context/ThemeProvider';
import { PageContext } from '../../context/PageContext';
import { connect } from 'react-redux';
import { addItem } from '../../../store/actions';
import { Formik, Form, Field, ErrorMessage } from 'formik';
 
const FormAddItemBar = ({isVisible, addItem, closeModal}) => {

  const { pageType } = useContext(PageContext);

  const { themeBackground } = useContext(ThemeContext)

  const styleForVisible = {
    borderLeft: `10px solid ${themeBackground}`,
    transform: 'translateX(0%)',
  }
  const styleForNotVisible = {
    transform: 'translateX(100%)'
  }

  return ( 
    <div style={isVisible ? styleForVisible : styleForNotVisible} className={styles.form}>
      <Heading big>Create new {pageType}</Heading>
      <Formik
        initialValues={{title:'', content: '', articleUrl:'', created: '', twitterName: ''}}
        onSubmit={(values) => {
          addItem(pageType, values)
          closeModal()
        }}
      >
        {({ 
         values,
         handleBlur,
         handleChange,
         handleSubmit,
         }) => (
          <Form>
            <Input type='text' name={pageType == 'twitters' ? 'twitterName' : 'title'} placeholder={pageType == 'twitters' ? 'account name' : 'title'} value={pageType == 'twitters' ? values.twitterName : values.title} onChange={handleChange} onBlur={handleBlur} />
            {pageType === 'articles' && <Input placeholder='link' name='articleUrl' value={values.articleUrl} onChange={handleChange} onBlur={handleBlur} /> }
            <Input placeholder='description' name='content' textarea={true} value={values.content} onChange={handleChange} onBlur={handleBlur} />
            <Button type='submit'>Add Item</Button>
          </Form>
        )}
      </Formik>
    </div>
   );
}

const mapDispatchToProps = dispatch => ({
  addItem: (itemType, itemContent) => dispatch(addItem(itemType, itemContent)),
})

const FormAddItemBarConsumer = connect(null, mapDispatchToProps)(FormAddItemBar)

 
export default FormAddItemBarConsumer;