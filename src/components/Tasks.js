import Task from './Task'
// import PropTypes from 'prop-types'

function Tasks({tasks, onDelete, onToggle}) {

    return (
        <>
        {tasks.map((task, index) => (
        <Task key={index} task={task} onDelete={onDelete} onToggle={onToggle}/>
        ))}
        </>
    )
}

// Task.propTypes = {

// }

export default Tasks

