import React, {useState, useReducer} from 'react'
//import reducer from '../reducers/TodoReducer'

const ListForm = (props) => {
    const initialForm =  {
        name: '',
        id:Date.now(),
        finished: false
      }

   const [form, setForm] = useState(initialForm)
    //const {handleAddItem} = props
const handleChanges = e => {
    const {name, value} = e.target
    setForm({...form, [name]:value})
}

    const handleSubmit = (e) =>{
        e.stopPropagation()
        e.preventDefault();
        props.handleAddItem(form)
        //console.log(form)
        setForm(initialForm)
    }

   
        return(
            <form onSubmit={handleSubmit}>
                <input value={form.name} onChange={handleChanges} type="text" name="name"/>
                <button>Add</button>
            </form>
        )
    }


export default ListForm

