import React, {useReducer} from 'react';
import ToDoList from './Components/TodoList'
import ToDoForm from './Components/ToDoForm'
import './Components/TodoStyle.css'
import reducer from './reducers/TodoReducer'
import actions from './actions/TodoActions'


const initialList = [
  {
    name: 'workout',
    id:Date.now(),
    finished: false
  },
  {
    name: 'workout2',
    id:Date.now(),
    finished: false
  }
]

const App = () => {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  const [state, dispatch] = useReducer(reducer, initialList)

  console.log(typeof state)
  
  const toggleItem = (itemId)=>{
    dispatch(actions.toggleStrike(itemId))
    //console.log(itemId)
  }


  const clearItems = () => {
    dispatch(actions.deleteItem())
  }

  const addItem = (todo) => {
   dispatch(actions.addItems(todo))
   console.log(todo)
  }

  
    return (
      <div className="App">
        <div className='header'>
        <h1>Get ur shit done:</h1>
        <ToDoForm handleAddItem={addItem}/>
      </div>
        <ToDoList handleClearItems={clearItems} handleToggleItem={toggleItem} actualList={state}/>
        </div>
    );
  }


export default App;







