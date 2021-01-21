const initialState = {
  isLoading: false,
}

/* 

const json = [
   {
      "_id": "1",
     "title": "Hello Romannn",
     "userID": "6006d4f37c126d0ab425af03",
     "type": "twitters",
     "content":
        "111Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi",
      "twitterName": "hello_roman",
      "__v": 0
    },
   {
      "id": "2",
     "title": "Hello Romannn",
     "userID": "6006d4f37c126d0ab425af03",
     "type": "twitters",
     "content":
        "222Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi",
      "twitterName": "hello_roman",
      "__v": 0
    },
   {
      "id": "3",
     "title": "Hello Romannn",
     "userID": "6006d4f37c126d0ab425af03",
     "type": "twitters",
     "content":
        "333Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi",
      "twitterName": "hello_roman",
      "__v": 0
    },
]

*/



export const rootReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'REMOVE_ITEM_SUCCESS':
      return {
        ...state,
        [action.payload.itemType] : [
          ...state[action.payload.itemType].filter(elem => elem._id !== action.payload.id)
        ]
      };
    case 'ADD_ITEM_SUCCESS': 
      return {
        ...state,
        [action.payload.itemType] : [
          ...state[action.payload.itemType],
          action.payload.data
        ]
      }
    case 'AUTHENTICATE_SUCCESS': 
      return {
        ...state,
        userID: action.payload.data._id
      }
    case 'FETCH_SUCCESS':
      return {
        ...state,
        [action.payload.itemType] : [
          ...action.payload.data
        ]
      }
    default:
      return state
  }
}