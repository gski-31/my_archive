/* CHALLENGE:
• create an array of 5 todos
• print length
* print 1st and last item
*/

// const todos = ['open vs code', 'find videos', 'code along', 'take test', 'go home']
// console.log(`you have ${todos.length} things to-do on your list, the 1st is ${todos[0]} and the last is ${todos[todos.length - 1]}`)

/* CHALLENGE:
• delete 3rd item
• add item to end
• remove 1st item
*/

// const todos = ['open vs code', 'find videos', 'code along', 'take test', 'go home']

// todos.splice(2,1);
// console.log(todos);

// todos.push('end item');
// console.log(todos);

// todos.shift();
// console.log(todos);

/* CHALLENGE:
print items in a list. */

// const todos = ['open vs code', 'find videos', 'code along', 'take test', 'go home']

// todos.forEach((todo, index) => {
//     console.log(`Item ${index + 1}: ${todo}`);
// })

/* CHALLENGE:
do previous challenge with a for loop */

// const todos = ['open vs code', 'find videos', 'code along', 'take test', 'go home']

// for(let i = 0 ; i < todos.length ; i++){
//     console.log(`Item ${i + 1}: ${todos[i]}`)
// }

/* CHALLENGE:
1. Convert array to array of objects -> text, completed
2. Create function to remove a todo by text value
*/

// const todos = ['open vs code', 'find videos', 'code along', 'take test', 'go home']

// let myArr = [];
// todos.forEach((item, index)=>{
//     myArr.push({
//         completed: false,
//         text: `${item}`
//     })
// })

// // console.log(myArr);

// const deleteTodo = (noteArr, indNote)=>{
//     let deleteMe = noteArr.findIndex((note, index)=>{
//         return indNote == note.text
//     })
//     noteArr.splice(deleteMe,1)
// }

// deleteTodo(myArr, 'take test');
// console.log(myArr)

/* CHALLENGE:
Filter toDos to show active tasks
*/

// const toDos = [
//     { task: 'open vs code', completed: true },
//     { task: 'find videos', completed: true },
//     { task: 'code along', completed: true },
//     { task: 'take test', completed: false },
//     { task: 'go home', completed: false }
// ]

// const leftToDo = ((arr)=>{
//     return arr.filter((item, index)=>{
//         return item.completed === false;
//     })
// })

// console.log(leftToDo(toDos));

/* CHALLENGE:
Sort toDos by completion staus
*/

const toDos = [
        { task: 'open vs code', completed: true },
        { task: 'find videos', completed: true },
        { task: 'code along', completed: false },
        { task: 'take test', completed: true },
        { task: 'go home', completed: false },
];

toDos.sort((a, b) => (a.completed > b.completed ? 1 : -1));

console.log(toDos);
