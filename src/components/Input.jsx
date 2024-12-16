import {forwardRef} from 'react';
export default forwardRef(function Input({label, textarea, ...props}, ref) {
    const classes = "w-full p-2 rounded-sm border-bg-300 bg-stone-200 border-b-2 focus:outline-none focus:border-stone-600"
    return <p className="flex flex-col gap-1 my-4">
       <label className="text-sm font-bold uppercase text-stone-500">{label}</label>
    { textarea ? <textarea className={classes} ref={ref} {...props}/> : <input ref={ref} className={classes} {...props} /> }
    </p>;
}
)