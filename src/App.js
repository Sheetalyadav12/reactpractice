import { useState } from "react"


const App = ()=>
{
  const [todo,setTodo]=useState([])
  const [editingFlag,setediting] = useState(-1)
  

  function addTodo()
  {
    console.log("----------addTodo------")
    let tempTodo=document.getElementById("todoInput").value
    console.log("tempTodo:" +tempTodo)
    //  addToArray(tempTodo,false)
    if(todo.length>0){
      addToArray(todo[todo.length-1].id+1,tempTodo,false)
    }
    else{
      addToArray(0,tempTodo,false)
    }
    document.getElementById("todoInput").value=""
    
  }

  function addToArray(id,text,completed)
  {
    let tempTodoObject ={
      id:id,
      text:text,
      completed:completed
    }
    todo.push(tempTodoObject)
    console.log(todo)
    setTodo([...todo])
   
    console.log(todo)
    document.getElementById("todoInput").value=""
  } 

  function deleteTodo(id)
  {

    console.log("........deletetodo.....")
    let tempTodo= todo.filter(element=>
    {
      return element.id !=id
    })
    setTodo([...tempTodo])
  }

  function mock()
  {
    if(todo.length>0){
    addToArray(todo[todo.length-1].id+1,"todo1",true)
    addToArray(todo[todo.length-1].id+1,"todo2",false)
    addToArray(todo[todo.length-1].id+1,"todo3",false)
    addToArray(todo[todo.length-1].id+1,"todo3",false)
    }
    else{
      addToArray(0,"todo1",true)
      addToArray(todo[todo.length-1].id+1,"todo2",false)
      addToArray(todo[todo.length-1].id+1,"todo3",false)
      addToArray(todo[todo.length-1].id+1,"todo3",false)

    }
  }
  function checkListener(id){
    console.log("...console...")
    todo.map(element =>{
      if(element.id==id){
        element.completed =!element.completed
      }
      return element
    })
    console.log(todo)
    setTodo([...todo])
  }
  
  function editTodo(id){
    console.log("...editbutton...")
    setediting(id)
  }
  function updateTodo(){
    let tempTodo =todo.map(element=>{
      if(element.id == editingFlag)
      {
        element.text = document.getElementById("updateTodo").value
      }
      return element
    })
    setediting(-1)
    setTodo([...tempTodo])
  }

  return <div>
    <button onClick={()=>mock()}>mock</button>
    <h1>To-do Application</h1>
    <input type="text" id="todoInput" placeholder="Enter todo here"/>
    <button onClick={()=>addTodo()}>Add To-do</button>
    {
  todo.map(element=>
  {
    return <div>
    {
      element.completed ?
      //compited todo
      <div>
        <input type="checkbox" onClick={()=>checkListener(element.id)} checked/>
        <s>{element.text+""}</s>
        
      </div> :
      //incompited todo
      (element.id ==editingFlag ?
        <div>
        <input type="checkbox" onClick={()=>checkListener(element.id)} />
        <input type="text"  Value= {element.text+ " "}placeholder="edit " id="updateTodo"/>
        
        <button onClick={()=>deleteTodo(element.id)}>Delete</button>
        <button onClick={()=>updateTodo()}>save to-do</button>

      </div>:
      <div>
      <input type="checkbox" onClick={()=>checkListener(element.id)} unchecked/>
      {element.text+"  "}
      <button onClick={()=>deleteTodo(element.id)}>Delete</button>
      <button onClick={()=>editTodo(element.id)}>Edit</button>
    </div>
        
        )
      
      
    }
    </div>
  
  })
}
    </div>
  }
export default App;


