import React from 'react'

export const AddTask = ({ taskList, setTaskList, task, setTask }) => {

    const handleSubmit = event => {
        event.preventDefault();
        const date = new Date();

        if (task.id) {
            const date = new Date();
            const updateTaskList = taskList.map(todo => (
                todo.id === task.id ? {
                    id: task.id,
                    name: event.target.task.value,
                    time: `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`
                } : todo
            ))
            setTaskList(updateTaskList);
            setTask({});
        } else {
            const newTask = {
                id: date.getTime(),
                name: event.target.task.value,
                time: `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`
            };
            setTaskList([...taskList, newTask]);
            setTask({});

        }

    }
    return (
        <section className='addTask'>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name='task'
                    autoComplete='off'
                    value={task.name || ""}
                    onChange={e => setTask({ ...task, name: e.target.value })}
                    placeholder='add task'
                    maxLength='25' />
                <button type='submit'>{task.id ? "Update" : "Add"}</button>
            </form>
        </section>
    )
}
