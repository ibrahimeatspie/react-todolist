import React from 'react'
import Todo from './Todo'

export default function TodoList({todos, setTodos}) {
  return (
    todos.map(todo=>{

        return <Todo task={todo.task} checked={todo.checked} id={todo.id} setTodos={setTodos}/>
    })
  )
}
