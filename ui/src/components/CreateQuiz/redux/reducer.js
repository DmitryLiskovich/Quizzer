export const reducer = (state={}, action) => {
  switch(action.type) {
    case "ADD_CONFIG":
      return {...state, config: action.payload};
    case "ADD_QUES":
      return {...state, questions: action.payload};
    case "ADD_FULL": 
      return action.payload;
    default:
      return state;
  }
}