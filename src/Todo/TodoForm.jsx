import { useState } from "react"

const TodoForm = (checked) => {
    const [inputValue, setInputValue] = useState({})
    const [task, setTask] = useState([])

    const handleInputValue = (value) => {
        setInputValue({ id: value, content: value, checked: false })
    }

    const handleForm = (e) => {
        const { id, content, checked } = inputValue;

        e.preventDefault()

        // to checked the input value is empty or not .
        if (!content) {
            alert("please Enter the Text ")
            return;
        }

        // to checke the one task is not repeted in the box 
        // if (task.includes(inputValue)) {
        //     alert(`${inputValue} is already exit please don't write again and again`)
        //     setInputValue("")
        //     return;
        // }

        const checkeRepetedTask = task.find((currTask) => currTask.content === content);

        if (checkeRepetedTask) {
            alert(`${content} is already exit please don't write again and again`)
            setInputValue({ id: "", content: "", checked: false })
            return;
        }

        setTask((prevTask) => [...prevTask, { id, content, checked }])

        setInputValue({ id: "", content: "", checked: false })
    }

    const handleDeleteTodo = (value) => {
        const deleteTodo = task.filter((currentElement) => currentElement !== value)
        setTask(deleteTodo)
    }

    const ClearrAllBtn = () => {
        setTask([])
    }

    const handleCheckTodo = (value) => {
        const checkedTask = task.map((taskValue) => {
            if (taskValue.content === value.content) {
                return { ...taskValue, checked: !taskValue.checked }
            }
            else {
                return taskValue;
            }
        })
        setTask(checkedTask)
    }

    return (

        <>
            <form onSubmit={handleForm}>
                <div id="input_type">
                    <input type="text"
                        placeholder="Enter The Text.."
                        value={inputValue.content}
                        onChange={(e) => handleInputValue(e.target.value)} />
                    <button type="submit"> Add Task </button>
                </div>
            </form>
            <section>

                <ul>
                    {
                        task.map((element) => {
                            return (
                                <li key={element.id}>
                                    <h3 className={element.checked ? "checkList" : "notCheckList"}> {element.content} </h3>
                                    <svg xmlns="http://www.w3.org/2000/svg" onClick={() => handleCheckTodo(element)} viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" /></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" onClick={() => handleDeleteTodo(element)} viewBox="0 0 448 512"><path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z" /></svg>
                                </li>
                            )
                        })
                    }
                </ul>
            </section>
            <button type="reset" onClick={ClearrAllBtn} className="clear-btn"> Clear All </button>
        </>
    )
}

export default TodoForm