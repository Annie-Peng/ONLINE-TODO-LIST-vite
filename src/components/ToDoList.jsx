const toDoListTitle = ['全部', '待完成', '已完成']

export default function toDoList({ tasks, dispatch }) {
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
            <button type='button' className="bg-completeBtn w-[20px] h-[20px]" />
            <input className="ms-4 w-[85%] outline-none" value={task.item} onChange={(e) => {
              dispatch({
                type: 'updateItem',
                item: task.item,
                value: e.target.value
              })
            }} />
            <button type='button' className="bg-deleteBtn w-[16px] h-[16px] bg-no-repeat" onClick={() => {
              dispatch({
                type: 'deleteItem',
                item: task.item
              })
            }} />
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