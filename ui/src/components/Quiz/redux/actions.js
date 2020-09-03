const ADD_CONFIG = "ADD_CONFIG";
const ADD_QUES = "ADD_QUES";

export const addQuestions = (payload) => ({type: ADD_QUES, payload})

export const addData = (payload) => ({type: ADD_CONFIG, payload})