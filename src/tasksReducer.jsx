export default function tasksReducer(tasks, action) {
  switch (action.type) {
    case 'addItem': {
      console.log(tasks);
      return [
        ...tasks, {
          item: action.value,
          complete: false
        }
      ]
    }
    case 'updateItem': {
      const result = tasks.map((task) => {
        if (task.item === action.item) {
          return {
            ...task,
            item: action.value
          }
        } else {
          return task
        }
      });
      return result
    }
    case 'deleteItem': {
      const result = tasks.filter((task) => task.item !== action.item);
      return result
    }
  }
}