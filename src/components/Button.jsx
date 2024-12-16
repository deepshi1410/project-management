export default function Button({children, ...props}) {
    console.log('props', props)
    return <button {...props} className="px-4 py-2 bg-stone-700 text-stone-400 hover:bg-stone-600 rounded-xl hover:text-stone-100">{children}</button>
}