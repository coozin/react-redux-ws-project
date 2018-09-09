export default (state = {}, action) => {
  switch (action.type) {
    case 'ADD_ORDER':
    return {
      result: action.payload
    }
    default:
    return state
  }
}
