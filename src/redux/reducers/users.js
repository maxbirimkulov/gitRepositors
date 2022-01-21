import axios from "axios";

const SET_USERNAME ="SET_USERNAME";
const GET_REPOS ="GET_REPOS";
const RESET_ARR = "RESET_ARR";
const SET_MARKDOWN = 'SET_MARKDOWN';

const initialState = {
    users: "",
    repos: [],
    markDown: ''
};

export default  (state = initialState,action) =>{
   switch (action.type){
       case SET_USERNAME: {
           return {
               ...state,
               users: action.name
           }
       }
       case RESET_ARR:{
           return {
               ...state,
               users: '',
               repos: action.arr
           }
       }
       case GET_REPOS: {
           return {
               ...state,
               repos: action.arr
           }
       }
       case SET_MARKDOWN:{
           return {
               ...state,
               markDown: action.content
           }
       }
       default: return state
   }
}

export const handleSubmit =(name) => {
    return(dispatch) => {
        return dispatch({type: SET_USERNAME, name})
    }
};

export const getRepos = (userName) => {
    return(dispatch) => {
        axios(`https://api.github.com/users/${userName}/repos`)
            .then(({data}) => {
                return dispatch({type: GET_REPOS, arr: data})
            })
    }
};

export const resetArr = () => {
    return (dispatch)=>{
        return dispatch({type:RESET_ARR, arr: []})
    }
};

export const setMarkDown = (userName, repoName) => {
    return (dispatch)=>{
        axios(`https://raw.githubusercontent.com/${userName}/${repoName}/master/README.md`)
            .then(({data})=>{
                return dispatch({type:SET_MARKDOWN, content: data})
            })
    }
};