import ReactDOM from 'react-dom';

<<<<<<< HEAD
//const element = React.createElement('hi', null, 'Hello React World');

const TodoList = () => {
    return (
        <ul>
            <li>Install React</li>
            <li>Study React</li>
            <li>Use React</li>
            <li>Build React App</li>
        </ul>
  
    );
};
const AppHeader = () =>{
    return <h1>My Todo List</h1>;
};
const SearchPanel = () => {
    return <input placeholder="search" />;
}
const App = () => {
    return (
        <div>
            <AppHeader />
            <SearchPanel />
            <TodoList/>
        </div>
    );
}
// const element = <App />;
    ReactDOM.render(<App />,
        document.getElementById('root'));
=======
const TodoList = () => {
  return (
    <ul>
    <li>Install React</li>
    <li>Study React</li>
    <li>Use React</li>
    <li>Build React App</li>
</ul>

);
};
const AppHeader = () =>{
    return <h1>My Todo List</h1>;
};
const SearchPanel = () => {
    return <input placeholder="search" />;
}
const App = () => {
    return (
        <div>
            <AppHeader />
            <SearchPanel />
            <TodoList/>
        </div>
    );
}
// const element = <App />;
ReactDOM.render(<App />,)
>>>>>>> 3837423788e0aa1aa14d6437389a68ee7ad6b63d
