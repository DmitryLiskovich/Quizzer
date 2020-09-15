const ADD_CONFIG = "ADD_CONFIG";
const ADD_QUES = "ADD_QUES";
const ADD_FULL = "ADD_FULL";

export const addQuestions = (payload) => ({type: ADD_QUES, payload})

export const addData = (payload) => ({type: ADD_CONFIG, payload})

export const addFull = (payload) => ({type: ADD_FULL, payload})