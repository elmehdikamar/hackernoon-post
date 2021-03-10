export default function LineTitle(props) {
    return (
        <div className={`w-full flex flex-row items-center space-x-3 ${props.className ?? ''}`}>
            <div className="flex-1 h-0.5 bg-gray-300"></div>
            <h2 className="font-semibold text-gray-700 text-2xl">{props.title}</h2>
            <div className="flex-1 h-0.5 bg-gray-300"></div>
        </div>)
}