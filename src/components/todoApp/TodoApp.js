import './TodoApp.css';
import TaskElement from '../taskElement/TaskElement';
import { useState } from 'react';   
function TodoApp() {    
    const [inputVal, setInputVal] = useState("");
    const [tasks, setTasks] = useState([]);
    
    const itemEvent = (event)=>{
        setInputVal(event.target.value);
    }

    const addTask = (event)=>{
        setTasks((tasks)=>{
            return [...tasks, inputVal];
        })
        setInputVal('');
    }

    const deleteTask = (id)=>{
        console.log('deleted!')
        setTasks((tasks)=>{
            return tasks.filter((task, tsk_id)=>{
                return tsk_id !== id;
            })
        })
    }
    return (
        <div className="container">
            <div className="wrapper">
                <div className="add-container">
                    <div className="section">
                        <div className="flex-box">
                            <input id="taskInp" className="task-inp" type="text" placeholder="Add new task" onChange={itemEvent} value={inputVal} />
                            <button onClick={addTask} className="task-btn">ADD TASK</button>
                        </div>
                    </div>
                </div>
                <div className="list-container">
                    <div className="section">
                        <h2 className="list-heading">TASKS LIST</h2>
                        <div id="list-box">
                            {tasks.map((itemVal, index)=>{
                                return <TaskElement key={index} itemVal={itemVal} id={index} onSelect={deleteTask} />
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TodoApp;