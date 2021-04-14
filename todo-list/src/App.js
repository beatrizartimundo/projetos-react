import React, {useState} from 'react'

import "./App.css";

const App = () => {

  const [value, setValue] = useState("")
  const [itens, setItens] = useState([])

  return (
    
    <div className="container">
      <h1>Todo List</h1>
      <form
        onSubmit={event => {
          event.preventDefault()
          if(!!value){
            setItens([...itens,value])
            setValue("")
          }
            return
          
        }}
        >
          <input 
            type='text'
            value={value}
            onChange={event => setValue(event.target.value)}
          /> 
          <button type="submit">Adicionar</button>
          
        </form>
        <ul>
          {itens.map((todo,index)=>(
            <li key={index}>{todo}</li>
          ))}
        </ul>
     
    </div>
    


  )
  

}
export default App
