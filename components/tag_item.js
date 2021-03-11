export default function TagItem(props) {
    return (
        <a href={props.link ?? '#'} className="mr-1 mb-1 bg-gray-100 border-4 border-gray-300 px-3 py-2 text-xs font-mono font-semibold text-gray-700 hover:bg-brand hover:border-limegreen-600">{props.title}</a>
    )
}