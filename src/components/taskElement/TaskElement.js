function TaskElement(props) {

    return (
        <div className="flex-box" id="task_${count}">
            <input className="edit-inp" type="text" readOnly value={props.itemVal} />
            <button className="task-btn">EDIT TASK</button>
            <button onClick={()=>{props.onSelect(props.id)}} className="task-btn">DELETE TASK</button>
        </div>
    );
}

export default TaskElement;