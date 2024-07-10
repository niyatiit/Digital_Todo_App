import './Todo.css'
import TodoForm from './TodoForm'
import TodoTimeDate from './TodoTimeDate'

const Todo = () => {
    return (
        <>
            <div id="main">
                <div id="main_content">
                    <h1> Todo App </h1>
                    <TodoTimeDate />
                    <TodoForm/>
                </div>
            </div>
        </>
    )
}

export default Todo