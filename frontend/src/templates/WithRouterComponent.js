import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { PageContext } from '../components/context/PageContext'

class WithRouterComponent extends Component {
  state = { 
    pageType: 'notes'
   }
  setPageType = (prevState='')=> {
    const pageTypes = ['twitters', 'notes', 'articles'];

    const [currentPage] = pageTypes.filter(page => this.props.location.pathname.includes(page));

    if(prevState.pageType === currentPage) return

    this.setState({
      pageType: currentPage
    })
  }

  componentDidMount() {
    this.setPageType()
  }
  componentDidUpdate(prevProps, prevState) {
    this.setPageType(prevState)
  }

  render() { 
    const {pageType} = this.state
    return ( 
      <PageContext.Provider value={{pageType}}>
      {this.props.children}
      </PageContext.Provider>
     );
  }
}
 
export default withRouter(WithRouterComponent);



