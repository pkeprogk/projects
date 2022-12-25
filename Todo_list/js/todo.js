/* todo.js */

/**
 * @typedef {{title: String, isCompleted: Boolean, icon: String, category: String, author: Object}} Todo
 *
 * @param {object} data
 */
export function createTodo(data) {
    let result = {};
    if (data.completed === false) {
        result.icon = '⏳';
    } else {
        result.icon = '✅';
    }
    result.title = data.todoTitle;
    result.author = {};
    result.author.firstName = data.user.first;
    result.author.lastName = data.user.last;
    result.category = data.chosenCategory;
    return result
}

/**
 * @param {Todo[]} todos
 * @param {Todo} todo
 */
export function addTodo(todos, todo) {
	todos.push(todo)
    return todos
}

/**
 * @param {Todo[]} todos
 */
export function countTodos(todos) {
	return todos.length
}

/**
 * @param {Todo[]} todos
 */
export function firstTodoTitle(todos) {
    return todos[0].title
}

/**
 * @param {Todo[]} todos
 */
export function lastTodoTitle(todos) {
	return todos[todos.length - 1].title
}

/**
 * @param {Todo[]} todos
 */
export function exportTitles(todos) {
	return todos.map(function(todo) {
        return todo.title
    })
}