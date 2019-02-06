
export const addTodo = text => ({
        type:'ADD_TODO',
        id:nextTodoId++,
        text
});
export const toggleTodo = () =>({
        type:'TOGGLE_TODO',
        id
});
