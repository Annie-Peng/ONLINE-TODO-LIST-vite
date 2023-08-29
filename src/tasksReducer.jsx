export default function tasksReducer(tasks, action) {
  switch (action.type) {
    case 'getItem': {
      return [
        ...action.data
      ]
    }
    case 'addItem': {
      return [
        ...tasks, {
          item: action.item,
          completed: action.completed
        }
      ]
    }
    case 'updateItem': {
      const result = tasks.map((task) => {
        if (task.id === action.id) {
          return {
            ...task,
            item: action.item
          }
        } else {
          return task
        }
      });
      return result
    }
    case 'deleteItem': {
      const result = tasks.filter((task) => task.id !== action.id);
      return result
    }
  }
}