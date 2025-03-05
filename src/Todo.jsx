// function Todo({ task, isDone }) {
//     return (
//         <li>Task: {task}</li>
//     )
// };

// conditional rendering option-1
// function Todo({ task, isDone }) {
//     if (isDone === true) {
//         return <li>Finished: {task}</li>
//     }
//     else {
//         return <li>Work On: {task}</li>
//     }
// };

// conditional rendering option-2
function Todo({ task, isDone }) {
    if (isDone) {
        return <li>Finished: {task}</li>
    }
    return <li>Work On: {task}</li>
};

export default Todo;