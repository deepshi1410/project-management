import Button from './Button.jsx';
import SelectedProject from "./SelectedProject.jsx";
export default function ProjectsSidebar({onStartCreateNewProject, projects, handleSelectProject}) {

    return (
        <aside className="w-1/4 bg-stone-900 h-screen p-4 md:w-48 text-stone-50">
            <h2 className="md:text-2xl font-bold mb-4 text-stone-200 uppercase">Projects</h2>
            <Button className="px-4 py-2 bg-stone-700 text-stone-400 hover:bg-stone-600 rounded-xl hover:text-stone-100" onClick={onStartCreateNewProject}>+ Add Project</Button>
            <ul className="mt-4">
                {
                projects.map(project => {
                    return <li key={project.id}>
                        <button className="w-full text-stone-300 rounded-lg px-3 py-2 hover:bg-stone-800" onClick={() => handleSelectProject(project.id)}>{project.title}</button>
                    </li>
                    })
                }
                </ul>
        </aside>
    )
}