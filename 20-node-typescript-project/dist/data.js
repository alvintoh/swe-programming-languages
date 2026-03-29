let TODOS = [];
export function addTodo(text) {
    const newTodo = {
        id: Math.random(),
        text,
    };
    TODOS.push(newTodo);
    return newTodo;
}
export function getTodo(id) {
    const todo = TODOS.find((todo) => todo.id === id);
    if (!todo) {
        throw new Error("Todo not found!");
    }
    return todo;
}
export function getTodos() {
    return TODOS;
}
export function removeTodo(id) {
    TODOS = TODOS.filter((todo) => todo.id !== id);
}
export function updateTodo(id, text) {
    const todo = getTodo(id);
    if (!todo) {
        throw new Error("Todo not found!");
    }
    todo.text = text;
    return todo;
}
