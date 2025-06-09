interface Todo {
  id: number;
  text: string;
}

let TODOS: Todo[] = [];

export function addTodo(text: string) {
  const newTodo = {
    id: Math.random(),
    text,
  };
  TODOS.push(newTodo);
  return newTodo;
}

export function getTodo(id: number): Todo {
  const todo = TODOS.find((todo) => todo.id === id);
  if (!todo) {
    throw new Error("Todo not found!");
  }
  return todo;
}

export function getTodos(): Todo[] {
  return TODOS;
}

export function removeTodo(id: number): void {
  TODOS = TODOS.filter((todo) => todo.id !== id);
}

export function updateTodo(id: number, text: string): Todo {
  const todo = getTodo(id);
  if (!todo) {
    throw new Error("Todo not found!");
  }
  todo.text = text;
  return todo;
}
