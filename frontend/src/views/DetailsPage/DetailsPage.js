import React, { useContext, useEffect, useState } from 'react';
import DetailsTemplate from '../../templates/DetailsTemplate/DetailsTemplate';
import { connect } from 'react-redux';
import axios from 'axios';
import withPageContext from '../../hoc/withPageContext';

const DetailsPage = ({match, pageContext, activeItem = {
  title: '',
  content: '',
  articleUrl: '',
  twitterName: '',
}}) => {
  const [activeItemNote, setActiveItemNote] = useState(activeItem)
  const { id } = match.params

  const fetchData = () => {

    axios.get(`http://localhost:9000/api/note/${id}`)
        .then(({data}) => {
          console.log(`konkretna notatka  ${data}`)
          setActiveItemNote(data)
        })
        .catch(err => console.log(err))
  }

  useEffect(()=> {

    if(!activeItemNote.content) {
      console.log('weszło w warunek');
      fetchData()
    }
    }, [])

  
  return ( 
      <DetailsTemplate
        title={activeItemNote.title}
        content={activeItemNote.content}
        articleUrl={activeItemNote.articleUrl}
        twitterName={activeItemNote.twitterName}
      />
   );
}

const mapStateToProps = (state, ownProps) => {

  const { pageType } = ownProps.pageContext

  if(state[pageType]) {
    return {
      activeItem: state[pageType].filter(item => item._id === ownProps.match.params.id)
    }
  }
}

const DetailsPageConsumer = withPageContext(connect(mapStateToProps)(DetailsPage))
 
export default DetailsPageConsumer;