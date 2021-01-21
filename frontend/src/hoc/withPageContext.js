import React from 'react';
import { PageContext } from '../components/context/PageContext';

const withComponent = (Component) => {
  return ( 
    function contextComponent(props) {
      return (
        <PageContext.Consumer>
          {context => (
              <Component {...props} pageContext={context}  />
            )
          }
        </PageContext.Consumer>
      )
    }
   );
}
 
export default withComponent;