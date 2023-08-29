import axios from 'axios';
const toDoListTitle = ['全部', '待完成', '已完成']

export default function toDoList({ tasks, dispatch }) {

  async function updateItemDispatch(e, id) {
    const obj = {
      id: id,
      item: e.target.value
    }
    try {
      await axios.patch(`https://fathomless-brushlands-42339.herokuapp.com/todo2/${obj.id}`, obj)
      return dispatch({
        type: 'updateItem',
        id: obj.id,
        item: obj.item
      })
    }
    catch (err) {
      console.log(err)
    }
  }

  async function deleteItemDispatch(id) {
    try {
      await axios.delete(`https://fathomless-brushlands-42339.herokuapp.com/todo2/${id}`)
      return dispatch({
        type: 'deleteItem',
        id: id
      })
    }
    catch (err) {
      console.log(err)
    }
  }

  async function toggleCompleteItemDispatch(id) {
    try {
      await axios.patch(`https://fathomless-brushlands-42339.herokuapp.com/todo2/${id}`)
      return dispatch({
        type: 'toggleCompleteItem',
        id: id,
      })
    }
    catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="container w-[500px] bg-white mx-auto mt-4 rounded-[10px] shadow-[0_0_15px_0_rgba(0,0,0,0.15)]">
      <div className="flex title border-b-2">
        {toDoListTitle.map((title, index) => (
          <div className="h-[51px] w-full text-center leading-[51px] font-bold text-tertiary" key={index}>
            {title}
          </div>
        ))}
      </div>
      <ul className="content p-6 flex flex-col g-4">
        {tasks.map((task, index) => (
          <li className="border-b mb-4 pb-4 w-full" key={index}>
            <button type='button' className={task.completed ? "completeBtn" : "unCompleteBtn"} onClick={() => toggleCompleteItemDispatch(task.id)} />
            <input className="ms-4 w-[85%] outline-none" value={task.item} onChange={(e) => updateItemDispatch(e, task.id)} />
            <button type='button' className="bg-deleteBtn w-[16px] h-[16px] bg-no-repeat" onClick={() => deleteItemDispatch(task.id)} />
          </li>
        ))}
      </ul >
      <div className="list flex justify-between px-6 pb-6">
        <span>5 個待完成項目</span>
        <span className='ms-auto'>清除已完成項目</span>
      </div>
    </div>

  )
}