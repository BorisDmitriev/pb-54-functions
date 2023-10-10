const toDosStore = ["Shopping", "Home work", "Go to the gym"];



// write your code here
const insertTodo = (arr, str) => arr.push(str);

const insertTodosArr = (arr, arr2) => arr.push(...arr2);

const removeTodo = (arr, num) => arr.splice(num-1, 1);

const editTodo = (arr, num, val) => arr.splice(num-1, 1, val);

const updateTodos = (arr, num, values) => {
  values.reduce( (acc,cur,i) => {
      acc.splice(num[i]-1, 1, cur);
      return acc;
  }, arr);
};

const RenderToDosListTemplate = arr => 
                              arr.length === 0 
                                ? `To do list store is empty` 
                                : `ToDo List:\n${ arr.map( (el,i) => `${i+1}- ${el}`).join('\n') }`;

// Call Stack
insertTodo(toDosStore,"test1");
insertTodo(toDosStore,"test2");
insertTodo(toDosStore,"test4");
insertTodo(toDosStore,"test5");
removeTodo(toDosStore,3);
removeTodo(toDosStore,5);
insertTodo(toDosStore,"Call Alex");
editTodo(toDosStore,3, "Pay bills");
editTodo(toDosStore,5, "Visiting Tommy");
insertTodosArr(toDosStore,["Go to supermarket", "Meet with Ghassan", "New test"]);

updateTodos(
  toDosStore,
  [2, 4, 6],
  ["Meet with PR department", "Buy milk", "Check the internet connection"]
);


console.log(RenderToDosListTemplate(toDosStore));