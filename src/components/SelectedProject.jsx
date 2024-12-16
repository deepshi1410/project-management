export default function SelectedProject({project}) {
    console.log('project', project);
    let cssClasses = "text-stone-600 whitespace-pre-wrap"
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }
    const formattedDate = new Date(project.dueDate).toLocaleDateString('en-US', options)
    return (
        <div class="w-[35rem] p-4">
            <header className="pb-4 mb-4 border-b-2 border-stone-300">
                <div className="flex justify-between">
                    <h1 className="text-xl font-bold text-stone-600">{project.title}</h1>
                    <button className="text-red-600 font-semibold border-2 border-red-600 px-2 py-1 rounded-md">Delete</button>
                </div>
                <p className={cssClasses}>Date: {formattedDate}</p>
                <p className={cssClasses}>Description: {project.description}</p>
            </header>
        </div>
    )
}