import {forwardRef, useImperativeHandle, useRef} from 'react'
import {createPortal} from 'react-dom';
import Button from './Button.jsx';
const Modal = forwardRef(function Modal({children, buttonCaption}, ref) {
    const dialog = useRef();
    useImperativeHandle(ref, () => ({
        open: () => dialog.current.showModal()
    }))
    return createPortal(<dialog ref={dialog} className="backdrop:bg-stone-900/90 rounded-lg p-4 shadow-md">
        {children}
        <form method="dialog" className="text-right mt-4">
            <Button>{buttonCaption}</Button>
        </form>
    </dialog>, document.getElementById('modal-body'))
})
export default Modal;
