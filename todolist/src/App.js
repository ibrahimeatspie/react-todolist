import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Todo from './Todo.js'
import React, {useState, useRef, useEffect} from 'react';
import TodoList from './TodoList';
import { v4 as uuidv4 } from 'uuid';


const LOCAL_STORAGE_KEY = 'todoApp.todos'

function App() {

  const [todos, setTodos] = useState([])
  const inputRef = useRef()

  useEffect(()=>{
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    setTodos(storedTodos)
  }, [])

  useEffect(()=>{

    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  function addTodo(){
    const todo_obj = {task: inputRef.current.value, checked: false, id: uuidv4()}
    setTodos(prev=>{
      return [...prev,todo_obj]
    })
    inputRef.current.value=''
  }

  return (
    
    <>
      <nav className="navbar navbar-dark bg-primary">
        <a className="navbar-brand mx-4" href=""><h1>React To-do List</h1></a>
      </nav>
    <div className="container">
        <div className="row my-5">
            <div className="col-8">
                <input type="text" id="text" className="form-control form-control-lg" placeholder="Enter task" ref={inputRef}/>
            </div>
            <div className="col">
                <button className="btn btn-primary btn-lg w-100" onClick={addTodo}>Add</button>
            </div>
            
        </div>
      <div className="container" id="tasks">
     
      <TodoList todos={todos} setTodos={setTodos} />
       
    </div>

    

      </div>
        
        
        
            

           


        

        
            
        
       
        


    
    </>
  );
}

export default App;
