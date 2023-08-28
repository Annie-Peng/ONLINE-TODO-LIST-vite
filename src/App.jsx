import Header from "./components/Header";
import EmptyCover from './components/EmptyCover';
import ToDoList from './components/ToDoList';
import { useRef, useReducer, useEffect } from 'react';
import tasksReducer from "./tasksReducer";
import axios from 'axios';

let initialTasks = [];


function App() {

  const inputRef = useRef(null);
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  useEffect(() => {
    (async () => {
      try {
        const res = await axios('https://fathomless-brushlands-42339.herokuapp.com/todo2');
        console.log(res)
        initialTasks = res.data;
      }
      catch (err) {
        console.log(err)
      }
    })()
  }, [])

  return (
    <div className="h-screen bg-colorBackground"  >
      <Header />
      <label className="flex justify-center items-center mt-12">
        <input className="w-[500px] h-[47px] rounded-[10px] p-1 shadow-[0_0_15px_0_rgba(0,0,0,0.15)] indent-4 placeholder:text-tertiary
        " placeholder="新增待辦事項" ref={inputRef} />
        <button className="ms-[-44px] w-10 h-10 bg-addBtn bg-no-repeat" type='button' onClick={() => dispatch({
          type: 'addItem',
          value: inputRef.current.value,
        }
        )} />
      </label>
      <ToDoList tasks={tasks} dispatch={dispatch} />
      <EmptyCover />
    </div>
  )
}

export default App

