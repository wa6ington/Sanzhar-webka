import TodoList from "./components/todo-list";

const App = () => {
    const todoData = [
        { label: 'Drink Coffee', important: false },
        { label: 'Implement React Application', important: true },
        { label: 'Make notes from your stud', important: false },
        { label: 'Do not drink alchohol', important: false },
    ];
    return (
        <div>
            <TodoList todos =  {todoData} />
        </div>
    );
}