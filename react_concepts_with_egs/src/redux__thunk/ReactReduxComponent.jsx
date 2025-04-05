import { useDispatch, useSelector } from "react-redux"
import { addTodo, fetchData, removeTodo } from "./withThunk/todoSlice";
import { useState } from "react";

const styles = {
  deleteButton: {
    border: '1px solid brown',
    marginLeft: '1em',
    marginTop: '1px',
    padding: '2px 8px',
    borderRadius: '0.7em',
    background: 'red',
    color: 'white'
  },
  heSt: {
    borderBottom: '1px dotted gray',
    // width: 'max-content',
    margin: '1px',
    color: 'black',
    backgroundColor: 'wheat',
    padding: '2px 5px',
    borderRadius: '6px'
  },
  li: {
    borderBottom: '1px dotted gray',
    width: 'max-content',
    margin: '1px',
    backgroundColor: 'lightblue',
    padding: '2px 5px',
    borderRadius: '6px'
  }
}
function ReactReduxComponent() {
  // const globalStates = useSelector((all) => all)
  // console.log(globalStates);
  const todosList = useSelector((allReduxStates) => allReduxStates.todoSlice);
  console.log(todosList);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>ReactReduxComponent</h2>
      <hr />
      <h1 style={styles.heSt}>Todo list</h1>
      <br />
      <AddTodo />
      <br />
      <ol start="50">
        {todosList.todos.length > 0 ? todosList.todos.map((eachTodo, index) => <li style={styles.li} key={eachTodo.id}>
          {index + 1}). {eachTodo.text}
          <button style={styles.deleteButton} onClick={(e) => dispatch(removeTodo({ id: eachTodo.id }))}>Delete</button></li>) :
          "Add new"}
      </ol>

      <div>
        <h3>Fetch and log</h3>
        <button onClick={() => dispatch(fetchData())} >Log pokemon</button>
      </div>
    </div>
  )
}
function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    if (!input) return;
    dispatch(addTodo(input))	// addTodo() takes payload
    setInput("");
  }

  return (
    <form onSubmit={addTodoHandler} className='space-s-3 m-2'>
      <input type='text' placeholder='Enter a text..' value={input} onChange={(e) => setInput(e.target.value)} />
      <button type="submit" >Add Todo</button>
    </form>
  )
}
export default ReactReduxComponent