
const initState = {
  todos: [],
};

export const actionTypes = {
  ADD: "ADD",
  EDIT: "EDIT",
  COMPLETED: "COMPLETED",
  DELETE: "DELETE",
  DELETE_ALL: "DELETE_ALL",
};

export const todoReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.ADD:
      return {
        todos: [...state.todos, { title: action.payload, id: Date.now(), completed: false }],
      };
    case actionTypes.DELETE:
      return {
        ...state,
        todos: state.todos.filter((el) => el.id !== action.payload),
      };
    case actionTypes.DELETE_ALL:
      return initState;
    case actionTypes.EDIT:
      return {
        ...state,
        todos: state.todos.map((item) => {
          if (item.id === action.id) {
            return { ...item, title: action.value };
          }
          return item;
        }),
      };
    case actionTypes.COMPLETED:
      return {
        ...state,
        todos: state.todos.map((el) => {
          if (el.id === action.payload) {
            return { ...el, completed: !el.completed };
          }
          return el;
        }),
      };
    default:
      return state;
  }
};

