import './App.css';
import Header from './components/TodoHeader/Header';
import { useState } from 'react';
import TodoForm from './components/TodoForm/TodoForm';

import Block2 from './components/Block2/block2';
import Clock from './components/Clock/Clock';

function App() {
  const [todo,setTodo] = useState([{
    id:1,
    status: true,
    name: "First list",
    type: "work"
  },
  {
    id:2,
    status: true,
    name: "Second list",
    type: "work"
  },
  {
    id:3,
    status: true,
    name: "Third list",
    type: "work"
  }])

  const [time, setTime] = useState("23:59:59")

  return (
    <div className='container'>
        <Header/>
        <section className='main'>
          <div className='left_side'>
          <TodoForm todo={todo} setTodo={setTodo}/>
        
          </div>
          <Block2 todo={todo} setTodo={setTodo}/>
          <div className='right_side'>
           
          </div>
        </section>
        <Clock time={time} setTime={setTime}/>
    </div>
      
    
  );
}


export default App;
