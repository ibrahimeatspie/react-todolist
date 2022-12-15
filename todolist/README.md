# React.js To-do List

!!https://raw.githubusercontent.com/ibrahimeatspie/react-todolist/master/todolist.png

This project was created using React.js for component driven development, and with Bootstrap for styling.

## What this project does

When running this web application, users will be able to create tasks that will be shown in a to-do list. Users can mark these tasks as complete so that they can know which tasks they have already completed, and can also delete these tasks.

## How it works

This app consists of a few components that allow it to work. Our main app component holds a text box, allowing users to input tasks. This main app component also holds a custom TodoList component. 

After users input tasks in the text box, these tasks get added to the user's local storage. The tasks in the local storage are then fed into the TodoList component as a list.

### TodoList Component

The TodoList component takes in a list of tasks, and then returns a list of Todo components, with each todo component being a properly styled "Todo", each with a task description, check button, an delete button.

