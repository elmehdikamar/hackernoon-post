export default function FooterLink(props) {
    return (
        <li className="mb-1"><a className={`text-sm text-gray-800 mr-4 border-b-4 border-limegreen-300 hover:border-0 hover:border-brand hover:bg-brand ${props.bold ? 'font-semibold' : ''}`} href={props.link ?? ''}>{props.title}</a></li>
    )
}