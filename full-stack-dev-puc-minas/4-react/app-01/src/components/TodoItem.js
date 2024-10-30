export function TodoItem({ task, onCheck }) {
    function handleOnChange(event) {
        onCheck({ ...task, isCompleted: event.target.checked });
        console.log();
    }
    return (
        <div className="task-item">
            <input type="checkbox" checked={task.isCompleted} onChange={handleOnChange} /> {task.name}
        </div>
    )
}