import Input from "./Input.jsx";
import {useRef} from 'react';
import Modal from "./Modal.jsx";
export default function NewProject({handleCreateProject, onCancelCreateProject}) {
    const titleRef = useRef(null);
    const descriptionRef = useRef(null);
    const dueDateRef = useRef(null);
    const modal = useRef();

    function handleSave() {
        let title = titleRef.current.value;
        let description = descriptionRef.current.value;
        let dueDate = dueDateRef.current.value;
        const newProject = {
            title,
            description,
            dueDate,
        }

        if(title.trim() === '' || description.trim() === '' || dueDate.trim() ===   '') {
            modal.current.open();
            return;
        }
        handleCreateProject(newProject);
    }
    return (
        <>
        <Modal ref={modal} buttonCaption="Close">
            <div className="p-3 text-center rounded-xl">
            <h2 className="text-lg font-bold">Uh oh! Looks like you didn't fill out all the fields</h2>
            <p className="mt-2 font-semibold">Please make sure you fill all the fields</p>
            </div>
        </Modal>
    <div className="w-[35rem] p-4 mt-16">
        <menu className="flex items-center justify-end gap-4">
                <li><button className="bg-stone-200 rounded-lg px-3 py-1" onClick={onCancelCreateProject}>Cancel</button></li>
                <li><button className="bg-stone-800 text-stone-50 rounded-lg px-3 py-1" onClick={handleSave}>Save</button></li>
        </menu>
        <div>
            {/* <p>
                <label htmlFor="">Title</label>
                <input type="text" />
            </p> */}
            <Input ref={titleRef} label="Title" />
            {/* <p>
                <label htmlFor="">Description</label>
                <input type="text" />
            </p> */}
            <Input ref={descriptionRef} label="Description" textarea/>
            {/* <p>
                <label htmlFor="">Due Date</label>
                <input type="date" />
            </p> */}
            <Input ref={dueDateRef} label="Due Date" type="date"/>
        </div>
    </div>
    </>
    )
}