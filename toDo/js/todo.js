/* todo.js */

/**
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
    return result;
}