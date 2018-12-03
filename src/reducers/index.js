function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {n:state.n + action.payload}
    case 'DECREMENT':
      return {n:state.n - action.payload}
    default:
      return {n:0}
  }
}

export default reducer