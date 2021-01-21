import axios from "axios";

// export const removeItem = (itemType, id) => ({
//   type: 'REMOVE_ITEM',
//   payload: {
//     itemType,
//     id
//   }
// })

export const removeItem = (itemType, id) => dispatch => {
  dispatch({type: 'REMOVE_ITEM_REQUEST'})

  return axios.delete(`http://localhost:9000/api/note/${id}`)
    .then(()=> {
      dispatch({
        type: 'REMOVE_ITEM_SUCCESS',
        payload: {
        itemType,
        id
        }
      })
    })
    .catch(err => console.log(err))
  
}


// export const addItem = (itemType, itemContent) => ({
//   type: 'ADD_ITEM',
//   payload: {
//     itemType,
//     item: {
//       id: getId(),
//       ...itemContent
//     }
//   }
// })

export const addItem = (itemType, itemContent) => (dispatch, getState) => {
  dispatch({type: 'ADD_ITEM_REQUEST'})

  return axios.post('http://localhost:9000/api/note', {
    userID: getState().userID,
    type: itemType,
    ...itemContent
  })
  .then(({data})=> {
    dispatch({type: 'ADD_ITEM_SUCCESS', payload: {
      data,
      itemType
    }})
  })
  .catch(err => console.log(err))
}




export const authenticate = (username, password) => (dispatch) => {
  dispatch({type: 'AUTHENTICATE_REQUEST'});

  return axios.post('http://localhost:9000/api/user/login', {
    username,
    password
  }) 
    .then(res => {
      dispatch({type: 'AUTHENTICATE_SUCCESS', payload: res})
      console.log(res);
    })
    .catch(err => {
      console.log(err)
      dispatch({type: 'AUTHENTICATE_FAILURE '})
    })

}
export const fetchItems = (itemType) => (dispatch, getState) => {
  dispatch({type: 'FETCH_REQUEST'})

    return axios.get('http://localhost:9000/api/notes/type', {
      params: {
        type: itemType,
        userID: getState().userID
      }
    })
      .then(({data}) => {
        console.log(data);
        dispatch({type:'FETCH_SUCCESS', payload: {
          data, 
          itemType
        }})
      })
      .catch(err => dispatch({type: 'FETCH_FAILURE'}))
}