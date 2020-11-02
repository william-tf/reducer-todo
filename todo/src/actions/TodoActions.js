export const ADD_ITEM = 'ADD_ITEM'
export const DELETE_ITEM = 'DELETE_ITEM'
export const STRIKE_THROUGH = 'STRIKE_THROUGH'




const addItems = (todo)=>{
    return({type:ADD_ITEM, payload:todo})
}

const deleteItem = ()=>{
    return({type:DELETE_ITEM,})
}

const toggleStrike = (toggle) =>{
    return({type:STRIKE_THROUGH, payload:toggle})
}


export default{
    addItems,
    deleteItem,
    toggleStrike,
}