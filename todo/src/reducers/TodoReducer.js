import {ADD_ITEM, DELETE_ITEM, STRIKE_THROUGH } from '../actions/TodoActions'



const reducer = (state, action) =>{
    switch(action.type){
        case(ADD_ITEM):
        console.log(action.payload)
        return state.concat(action.payload)
        case(DELETE_ITEM):
        console.log(action.payload)
        return state.filter((item)=> !item.finished)
        case(STRIKE_THROUGH):
        console.log(action.payload)
        return state.map((todo) =>{
            if (todo.id === action.payload){
                return{
                    ...todo,
                    finished:!todo.finished
                }
            } return todo;
        })
        default:
            console.log(action.payload)
            return (state)
    }
    
}

export default reducer