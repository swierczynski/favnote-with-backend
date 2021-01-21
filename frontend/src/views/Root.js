import React from 'react';
import MainTemplate from '../templates/MainTemplate';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import NoteView from './NoteView/NoteView';
import TwitterView from './TwitterView/TwitterView';
import ArticleView from './ArticleView/ArticleView';
import DetailsPage from './DetailsPage/DetailsPage';
import { routes } from '../roots/roots';
import WithRouterComponent from '../templates/WithRouterComponent';
import ThemeProvider from '../components/context/ThemeProvider';
import LoginPage from './LoginPage/LoginPage';


const Root = () => {

  const { notes, note, twitters, twitter, articles, article, home, login } = routes;

  return ( 
    <MainTemplate>
      <WithRouterComponent>
        <ThemeProvider>
          <Switch>
              <Route exact path={home} render={()=> <Redirect to={notes} />}/>
              <Route exact path={notes} component={NoteView} />
              <Route exact path={login} component={LoginPage} />
              <Route path={note} render={({match}) => <DetailsPage match={match} />} />
              <Route exact path={twitters} component={TwitterView} />
              <Route path={twitter} render={({match}) => <DetailsPage  match={match} />} />
              <Route exact path={articles} component={ArticleView} />
              <Route path={article} render={({match}) => <DetailsPage  match={match} />} />
          </Switch>
        </ThemeProvider>
      </WithRouterComponent>
    </MainTemplate>
   );
}
 
export default Root;