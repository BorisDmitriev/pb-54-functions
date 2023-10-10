# ToDos List App
[![Status overview badge](../../blob/badges/.github/badges/main/badge.svg)](#-results)


* "Shopping"
* "Home work"
* "Go to the gym"

### create TODOs App

#### create function
Given the array `const toDosStore = ["Shopping","Home work","Go to the gym"]`
##### 1. Add item
* create a function named `insertTodo` that takes 2 Arguments, the first is an array the second is a string, the function must add the string to the array.

example: `insertTodo(toDoArray, "test"); //adds "test" to toDoArray`

##### 2. Add Items
* create a function named `insertTodosArr` that takes 2 Arguments, both are arrays, the function must add the second array to the first.

example: 
`
insertTodosArr(firstArray,["Meet with Ghassan", "New test"]); 
// adds "Meet with Ghassan" and "New test" to firstArray
`

##### 3. Remove Item
* create a function named `removeTodo` that takes 2 Arguments, the first is an array the second is a number that represents the number of the todo task in the list (Note that this number is not the same as the index number), the function must delete a task from the array that corresponds with the given number.

example: `removeTodo(["Shopping","Home work"], 1); // deletes "shopping"`

##### 4. Edit Item
* create a function named `editTodo` to edit any item by order number
* the function takes 3 Arguments ==> the first Argument is the target array, the second is item's number by order and the third Argument is the new item value

example: `editTodo(["Shopping","Home work"], 1, "Pay bills"); // changes "Shopping" to "Pay bills"`


##### 5. Edit Items
* create a function named `updateTodos` to edit todos by passing an array of todo's order numbers 
* the function takes 3 Arguments ==> the first Argument is the target array, the second is an array of item order numbers and the third Argument is an array of new item values

```javascript
updateTodos(["Shopping","Home work", "Watch TV"],
  [2, 3],
  ["Sleep", "Eat"]
);
// new array or list: ["Shopping","Sleep", "Eat"]
```


##### 6. Read TodosList
* create a function named `RenderToDosListTemplate`
* this function takes an array as an argument and returns a string.
* if the passed array is empty it should return the string "To do list store is empty"
* Otherwise it should return a string in the following format:

```
ToDo List: 
 1- Shopping 
 2- Meet with PR department 
 3- Pay bills 
 4- Buy milk 
 5- Visiting Tommy 
 6- Check the internet connection 
 7- Go to supermarket 
 8- Meet with Ghassan 
 9- New test 
```

##### Call Stack
```js
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

updateTodos(toDosStore,
  [2, 4, 6],
  ["Meet with PR department", "Buy milk", "Check the internet connection"]
);
```

* render todo template
```js
console.log(RenderToDosListTemplate(toDosStore));
// toDosStore is empty ==> To do list is empty


/* expected result in the terminal: 
 ToDo List: 
 1- Shopping 
 2- Meet with PR department 
 3- Pay bills 
 4- Buy milk 
 5- Visiting Tommy 
 6- Check the internet connection 
 7- Go to supermarket 
 8- Meet with Ghassan 
 9- New test 
 */
```

[//]: # (autograding info start)
# <img src="https://github.com/DCI-EdTech/autograding-setup/raw/main/assets/bot-large.svg" alt="" data-canonical-src="https://github.com/DCI-EdTech/autograding-setup/raw/main/assets/bot-large.svg" height="31" /> Results
> ⌛ Give it a minute. As long as you see the orange dot ![processing](https://raw.githubusercontent.com/DCI-EdTech/autograding-setup/main/assets/processing.svg) on top, CodeBuddy is still processing. Refresh this page to see it's current status.
>
> This is what CodeBuddy found when running your code. It is to show you what you have achieved and to give you hints on how to complete the exercise.


### 1. Add item

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status0.svg) | `insertTodo` function should add passed item to the `toDosStore` Array |

### 2. Add items

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status1.svg) | `insertTodosArr` function should add items of passed array to the `toDosStore` |

### 3. Remove Item

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status2.svg) | `removeTodo` function should remove item from `toDosStore` by order Number |

### 4. Edit Item

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status3.svg) | `editTodo` function should edit an item in the `toDosStore` by order Number |

### 5. Edit Items

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status4.svg) | `updateTodos` function should edit an array of items in the `toDosStore` by order numbers |

### 6. Read TodosList

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status5.svg) | `RenderToDosListTemplate` function should return string containing all items of `toDosStore` in the specified format |



[🔬 Results Details](../../actions)
[🐞 Tips on Debugging](https://github.com/DCI-EdTech/autograding-setup/wiki/How-to-work-with-CodeBuddy)
[📢 Report Problem](https://docs.google.com/forms/d/e/1FAIpQLSfS8wPh6bCMTLF2wmjiE5_UhPiOEnubEwwPLN_M8zTCjx5qbg/viewform?usp=pp_url&entry.652569746=PB-Functions-ToDosApp)


[//]: # (autograding info end)