import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Avatar from '../../components/atoms/Avatar/Avatar';
import Button from '../../components/atoms/Button/Button';
import Heading from '../../components/atoms/Heading/Heading';
import LinkIcon from '../../components/atoms/LinkIcon/LinkIcon';
import Paragraph from '../../components/atoms/Paragraph/Paragraph';
import { PageContext } from '../../components/context/PageContext';
import UserPageTemplate from '../UserPageTemplate';
import styles from './DetailsTemplate.module.scss'

const DetailsTemplate = ({title, content, articleUrl, twitterName}) => {

  const {pageType} = useContext(PageContext);

  const history = useHistory()

  return ( 
    <UserPageTemplate>
      <div className={styles.outsideWrapper}>
        <div className={styles.headingWrapper}>
          <Heading >{title}</Heading>
          {pageType ==='twitters' && <Avatar account={`https://unavatar.now.sh/${twitterName}`} />}
          {pageType ==='articles' && <LinkIcon link={articleUrl} />}
        </div>
        <Paragraph>
        {content}
        </Paragraph>
        <Button secandary onClick={() => history.push(`/${pageType}`)}>Close</Button>
      </div>
    </UserPageTemplate>
   );
}
 
export default DetailsTemplate;