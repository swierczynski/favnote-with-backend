import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types'
import Button from '../../atoms/Button/Button';
import Heading from '../../atoms/Heading/Heading';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import { ThemeContext } from '../../context/ThemeProvider';
import LinkIcon from '../../atoms/LinkIcon/LinkIcon'
import styles from './Card.module.scss'
import Avatar from '../../atoms/Avatar/Avatar';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeItem } from '../../../store/actions';
import withPageContext from '../../../hoc/withPageContext'

const Card = ({_id: id, title, created, twitterName, articleUrl, content, removeItem, pageContext}) => {

  const { themeBackground } = useContext(ThemeContext);
  const { pageType } = pageContext;
  const [redirect, setRedirect] = useState(false)

  const styleHeadingWrapper = {
    backgroundColor: themeBackground,
  }

  const handleCardClick = () => setRedirect(true);

  if(redirect) {
    return <Redirect to={`${pageType}/${id}`} />
  }
  return ( 
    <div className={styles.outsideWrapper}>
      <div onClick={handleCardClick}>
        <div style={styleHeadingWrapper} className={styles.headingWrapper}>
          <Heading >{title}</Heading>
          <Paragraph>{created}</Paragraph>
          {pageType ==='twitters' && <Avatar account={`https://unavatar.now.sh/${twitterName}`} />}
          {pageType ==='articles' && <LinkIcon link={articleUrl} />}
        </div>
        <Paragraph>
          {content}
        </Paragraph>
      </div>
      <Button secandary type='button' onClick={()=> removeItem(pageType, id)} >Remove</Button>
    </div>
   );
}


Card.propTypes = {
  title: PropTypes.string.isRequired,
  created: PropTypes.string.isRequired,
  twitterName: PropTypes.string,
  articleUrl: PropTypes.string,
  content: PropTypes.string.isRequired,
  removeItem: PropTypes.func.isRequired
}
Card.defaultProps = {
  twitterName: null,
  articleUrl: null
}

const mapDispatchToProps = dispatch => ({
  removeItem: (itemType, id) => dispatch(removeItem(itemType, id))
})

const CardConsumer = connect(null, mapDispatchToProps)(withPageContext(Card))
 
export default CardConsumer;

