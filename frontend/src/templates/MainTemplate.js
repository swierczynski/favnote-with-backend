import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux';
import { store } from '../store/store'


const MainTemplate = ({children}) => {
  return ( 
    <div>
      <Provider store={store}>
        <Router> 
          {children}
        </Router>
      </Provider>
    </div>
   );
}
 
export default MainTemplate;