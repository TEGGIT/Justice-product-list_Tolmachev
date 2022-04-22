export const GET_PRODUCT = 'GET_PRODUCT'
export const ADD_NEW_PRODUCT = 'ADD_NEW_PRODUCT'

export const getProductAction = (payload) => {
  return {
    type: GET_PRODUCT,
    payload
  }
}

export const addNewCardAction = (payload) => {
  return {
    type: ADD_NEW_PRODUCT,
    payload
  }
}


