# practice todo list

add, edit, delete tasks they want to work on. Mark tasks as complete without deleting them.

As a user,

- read a list of tasks
- add a task using the mouse or keyboard
- mark any task as completed, using the mouse/keybaord
- delete any task using mouse or keybaord
- edit any task, using mouse or keyboard
- view a specicfic subset of tasks: all tasks, only active task or only completed tasks

- render a list of tasks
- add a new task
- delete a task
- track and update data underlying application (known as state)

In isolation

- iterate over the data to rerender it
- add an object to make a new task
- use id (identifier) to find, edit, or delete a task

Every time need to change application's state, need to update the UI to match

JavaScript gives us an array method for transforming data into something else: Array.prototype.map().

JIMBO

- Fix up validation for Form
- Reset state after submit
