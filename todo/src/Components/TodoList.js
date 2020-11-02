// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react'
import Todo from '../Components/Todo'




const TodoList = props => {
    const {actualList, handleClearItems, handleToggleItem} = props

    console.log(typeof actualList)
    console.log(actualList)
   const handleClick = () => {
        handleClearItems();
    }


    return(
        <div className="todo-list">
            {actualList.map(item => (
                <Todo handleToggleItem={handleToggleItem} item={item}/>
                
            ))}
            <button onClick={handleClick} className="clear-btn">Remove Finished</button>
        </div>
    )
}

export default TodoList