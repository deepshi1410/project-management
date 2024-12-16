import ProjectsSidebar from "./components/ProjectsSidebar.jsx";
import NewProject from "./components/NewProject.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import SelectedProject from './components/SelectedProject.jsx'
import {useState} from 'react';
function App() {
  const [projectsData, setProjectsData] = useState({
    projects: [],
    selectedProjectId: undefined,
  })

  const selectedProject = projectsData.projects.find(project => project.id === projectsData.selectedProjectId)
  let content = <SelectedProject project={selectedProject} handleDeleteProject={handleDeleteProject} 
  onAddTask={handleAddTask}
  onDeleteTask={handleDeleteTask}
  tasks={projectsData.tasks}/>;

  if(projectsData.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartCreateNewProject={handleStartProjectCreation} />;
  } else if(projectsData.selectedProjectId === null){
    content = <NewProject handleCreateProject={handleCreateProject} onCancelCreateProject={handleCancelProjectCreation}/>
  }

  // this function is to complete the creation of a new project
  function handleCreateProject(project) {
    const newProjectId = Math.random();
    setProjectsData((prevState) => ({
     ...prevState,
      projects: [...prevState.projects, {id: newProjectId,...project}],
      selectedProjectId: undefined,
    }));
  }
  // this projectis to start the process of creating a new project
  function handleStartProjectCreation () {
    setProjectsData((prevState) => ({
     ...prevState,
      selectedProjectId: null,
    }));
  }

 function handleSelectProject(id) {
    console.log('selected project id', id)
    setProjectsData((prevState) => ({
      ...prevState,
       selectedProjectId: id,
     }));
  }

  function handleCancelProjectCreation() {
    setProjectsData((prevState) => ({
     ...prevState,
      selectedProjectId: undefined,
    }));
  }

  function handleDeleteProject(id) {
    setProjectsData((prevState) => ({
     ...prevState,
     selectedProjectId: undefined,
      projects: prevState.projects.filter(project => project.id !== id)
    }));
  }

  function handleAddTask(text) {
    setProjectsState((prevState) => {
      const taskId = Math.random();
      const newTask = {
        text: text,
        projectId: prevState.selectedProjectId,
        id: taskId,
      };

      return {
        ...prevState,
        tasks: [newTask, ...prevState.tasks],
      };
    });
  }

  function handleDeleteTask(id) {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task) => task.id !== id),
      };
    });
  }

  return (
    <main className="h-screen flex gap-8">
      <ProjectsSidebar projects={projectsData.projects} onStartCreateNewProject={handleStartProjectCreation} selectedProjectId={projectsData.selectedProjectId} handleSelectProject={handleSelectProject} />
      {content}
    </main>
  );
}

export default App;
