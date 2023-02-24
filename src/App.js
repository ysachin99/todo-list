import {useState} from 'react'
import './App.css';
import DeleteIcon from './delete.svg'
import AddIcon from './add.svg'

function App() {
  const [input, setInput]=useState('')
  const [items, setItems]=useState([])

  const eventhandler = (e)=>{
    setInput(e.target.value)
  }

  const submitHandler = () => {
    setItems((prev)=>{
      return [...prev, input]
    })
    setInput("")
  }

  const deleteHandler = (itemName) => {
    const newItems = items.filter((item)=>{
      return item !== itemName
    })
    setItems(newItems)
  }
 
  return (
    <div className="App">
     <h1>Todo-List</h1>
     <div>
      <input className='input' type='text' value={input} placeholder='Add item...' onChange={eventhandler} />
      <button id='btn' onClick={submitHandler}><img src={AddIcon} width={30} /></button>
     </div>
          <ol>
          {items.map((item)=>{
            return(
              <div className='list-item'>
                   <div className='item'>
                   <div><input className='checkbox' type='checkbox' /></div>
                   <div className='item-name'>{item}</div> 
                    <button className='deletebtn' onClick={()=>deleteHandler(item)}><img src={DeleteIcon} width={15} /></button>
                    </div>
              </div>
             
            ) 
          })}
          </ol>
  
    </div>
  );
}

export default App;
