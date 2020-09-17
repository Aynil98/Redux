export default (state=[], action)=>{
  switch (action.type) {
    case 'FETCH_USER':
      return [...state, action.playload];
    default:
      return state;
  }
};
