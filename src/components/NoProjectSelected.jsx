import Button from "./Button.jsx";
export default function NoProjectSelected({onStartCreateNewProject}) {
    const imgSrc="./src/assets/no-projects.png";
    return (
        <div className="flex flex-col gap-1 items-center justify-center w-full">
            <img src={imgSrc} alt="No Project selected" width="240px" height="230px"/>
            <h2 className="text-stone-700 font-bold text-2xl">No Project Selected</h2>
            <p className="font-semibold text-md">Select a project or get started with a new one</p>
            <p className="mt-6">
                <Button onClick={onStartCreateNewProject}>Create new project</Button>
            </p>
        </div>
    );
}