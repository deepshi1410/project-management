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
  let content = <SelectedProject project={selectedProject} />;

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

  return (
    <main className="h-screen flex gap-8">
      <ProjectsSidebar projects={projectsData.projects} onStartCreateNewProject={handleStartProjectCreation} handleSelectProject={handleSelectProject}/>
      {content}
    </main>
  );
}

export default App;
