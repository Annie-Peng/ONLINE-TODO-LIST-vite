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
    case 'toggleCompleteItem': {
      const result = tasks.map((task) => {
        if (task.id === action.id) {
          return {
            ...task,
            completed: !task.completed
          }
        } else {
          return task
        }
      })
      return result;
    }
    case 'showFilterTitle': {
      let result;
      if (action.index === 0) {
        result = action.initial
      } else if (action.index === 1) {
        result = action.initial.filter(task => !task.completed)
      } else if (action.index === 2) {
        result = action.initial.filter(task => task.completed)
      }
      return result
    }
  }
}