import { useState } from 'react';
import { TodoItem } from "./TodoItem";
import { AddItem } from './AddItem';

const TASK_LIST = [
    {
        id: 1,
        name: "Tarefa 1",
        isCompleted: false,
    },
    {
        id: 2,
        name: "Tarefa 2",
        isCompleted: false,
    },
    {
        id: 3,
        name: "Tarefa 3",
        isCompleted: false,
    },
    {
        id: 4,
        name: "Tarefa 4",
        isCompleted: false,
    }
];

export function TodoList() {
    const [tasks, setTasks] = useState(TASK_LIST);

    function handleOnCheck(task) {
        const updatedTasks = tasks.map((t) => {
            if (task.id === t.id) {
                t.isCompleted = task.isCompleted;
            }

            return t;
        });

        setTasks(updatedTasks);
    }

    function handleOnAdd(task) {
        const updatedTasks = tasks.concat({ id: tasks.length + 1, name:task, isCompleted: false })
        setTasks(updatedTasks);
    }

    return (
        <section className="task-list-container">
            <h1>Lista de tarefas</h1>
            <div>
                <p><strong>Total de tarefas:</strong> {tasks.length}</p>
                <p><strong>Tarefas pendentes:</strong> {tasks.filter(t => t.isCompleted === false).length}</p>
                <p><strong>Tarefas completas:</strong> {tasks.filter(t => t.isCompleted === true).length}</p>
            </div>

            <AddItem onAdd={handleOnAdd}/>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>
                        <TodoItem task={task} onCheck={handleOnCheck} />
                    </li>
                ))}
            </ul>
        </section>
    );
}
