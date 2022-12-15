import React, {useState, useRef, useEffect} from 'react';


import 'bootstrap/dist/css/bootstrap.min.css';


export default function Todo({task, checked, id, setTodos}) {

  const [isChecked, setIsChecked] = useState(checked)

  
  function handleDelete(){
    setTodos(prev=>{
      let prevTodos = [...prev]
      let newTodos = []
      for (let i = 0; i<prevTodos.length;i++){
        
        if (prevTodos[i].id == id){
          continue

        }else{
          newTodos.push(prevTodos[i])
        }
      }
        console.log(newTodos)
        return newTodos
      
      
    })
  }

  function changeCheck(){

    
    setTodos(prev=>{
      console.log(prev)
      let todoToChange;
      for (let i =0; i < prev.length; i++){
        if (prev[i].id == id){
          todoToChange = i
        }
      }
      let oldPrev = [...prev]
      console.log(oldPrev[todoToChange])
      oldPrev[todoToChange].checked = !oldPrev[todoToChange].checked
      return oldPrev

    })

    setIsChecked(prev=>{
      
      return !prev
    })


    

  }
  
  if (checked){
    console.log(isChecked, task)
    setTodos(prev=>{
      console.log(prev)
      return prev
    })

    return (

      <div className="row mx-1 mb-2 mt-2" id={id}>
            <div className="col-10 form-check">
              <input className="form-check-input checkbox-xl" type="checkbox" value="" id="checkbox-3" onChange={changeCheck} checked/>
              <label className="mx-2 form-check-label large-label " for="checkbox-3"><span className="strike-through">{task}</span></label>
            </div>
            <button className="col-2 btn btn-primary btn-sm" onClick={handleDelete}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
              <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
              <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
            </svg>
          </button>
        </div>
    )

  }
  else{
    console.log(isChecked, task)
    return (

      
      

      <div className="row mx-1 mb-2 mt-2" id={id}>
            <div className="col-10 form-check">
              <input className="form-check-input checkbox-xl" type="checkbox" value="" id="checkbox-3" onChange={changeCheck}/>
              <label className="mx-2 form-check-label large-label " for="checkbox-3">{task}</label>
            </div>
            <button className="col-2 btn btn-primary btn-sm" onClick={handleDelete}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
              <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
              <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
            </svg>
          </button>
        </div>
    )
  }


 

    

  
  
}
