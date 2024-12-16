import Tasks from './Tasks.jsx';
export default function SelectedProject({project, handleDeleteProject, onAddTask,
    onDeleteTask,
    tasks}) {
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }
    const formattedDate = new Date(project.dueDate).toLocaleDateString('en-US', options)
    return (
        <div className="w-[35rem] p-4">
            <header className="pb-4 mb-4 border-b-2 border-stone-300">
                <div className="flex justify-between items-center">
                    <h1 className="text-xl font-bold text-stone-600">{project.title}</h1>
                    <button className="text-red-600 font-semibold border-2 border-red-600 px-2 py-1 rounded-md" onClick={() => handleDeleteProject(project.id)}>Delete</button>
                </div>
                <p className="text-stone-400 text-md font-semibold">{formattedDate}</p>
                <p className="text-stone-600 whitespace-pre-wrap mt-4">Description: {project.description}</p>
            </header>
            <Tasks onAdd={onAddTask} onDelete={onDeleteTask} tasks={tasks} />
        </div>
    )
}