
function App () {
  const [todos, setTodos] = React.useState([
    {text: 'Do a project', isCompleted: false,},
    {text: 'Eat dinner', isCompleted: false,},
    {text: 'Go to work', isCompleted: false,},
    {text: 'Learn React', isCompleted: false,},
  ]);

  const addTodo = text => {
    const newTodos = [...todos, {text:text, isCompletes:false}];
    setTodos(newTodos);
  }

  const removeTodo = index => {
    let temp = [...todos];
    temp.splice(index,1);
    setTodos(temp);
  }

  return (<>
    <div className='app'>
      <h1 className='code'>To-Do List</h1>
          <div className='todo-list'>
        {todos.map((todo, i) => <Todo className='todo' index={i} key={i} todo={todo} remove={removeTodo} />)}
        <TodoForm addTodo={addTodo} />
        </div>
    </div>
  </>);
}

ReactDOM.render(<App />, document.getElementById('root'));
