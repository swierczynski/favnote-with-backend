import React, { useEffect } from 'react';
import Heading from '../../components/atoms/Heading/Heading';
import Input from '../../components/atoms/Input/Input';
import Paragraph from '../../components/atoms/Paragraph/Paragraph';
import Card from '../../components/moleculs/Card/Card';
import UserPageTemplate from '../../templates/UserPageTemplate';
import styles from './ArticleView.module.scss';
import { connect } from 'react-redux';
import AddItem from '../../components/organisms/AddItem/AddItem';
import { fetchItems } from '../../store/actions';



const ArticleView = ({articles, fetchArticles}) => {

  const allArticles = articles && articles.map(article => <Card key={article.id} {...article} />)

  const connect =()=> fetchArticles()


  useEffect(()=> {
    connect()
  }, [articles])


  return ( 
    <UserPageTemplate>
      <div className={styles.heading}>
        <Input searchInput />
        <Heading big >Articles</Heading>
        <Paragraph>6 Articles</Paragraph>
      </div>
      <div className={styles.main}>
        {allArticles}
      </div>
      <AddItem />
    </UserPageTemplate>
   );
}
 
const mapStateToProps = (state) => {
  return {
    articles: state.articles
  }
}
const mapDispatchToProps = dispatch => ({
  fetchArticles: ()=> dispatch(fetchItems('articles'))
})

const ArticleViewConsumer = connect(mapStateToProps, mapDispatchToProps)(ArticleView);

export default ArticleViewConsumer;