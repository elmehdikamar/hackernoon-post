export default function AuthorAd(props) {
    return (
        <div className={`flex flex-col ${props.className ?? ''}`}>
            <p className="ml-auto mb-4">Share this story
            <span className="ml-4 text-limegreen-600 space-x-4">
                    <a href="#"><i className="fab fa-twitter fa-lg"></i></a>
                    <a href="#"><i className="fab fa-facebook-f fa-lg"></i></a>
                    <a href="#"><i className="fab fa-linkedin-in fa-lg"></i></a>
                    <a href="#"><i className="fa fa-envelope fa-lg"></i></a>
                </span>
            </p>
            <div className="flex flex-row bg-gray-900 ring-4 ring-brand p-4 items-start">
                <div className="flex-1 flex flex-col items-start text-sm text-brand">
                    <img className="w-12 h-12 ring-4 ring-gray-300" src="https://hackernoon.com/images/541r0RExUOQ3nFAQs7oJuST9Axf2-842316b.jpeg" />
                    <a className="mt-5 font-mono font-semibold border-b-4 border-limegreen-400 hover:border-0 hover:border-brand hover:bg-brand" href="#">@{props.profile?.handle}</a>
                    <span className="font-mono font-semibold mt-3">{props.profile?.displayName}</span>
                </div>
                <div className="flex flex-1 flex-row flex-shrink-0">
                    <a href="#" className="text-brand flex flex-row items-center space-x-2 font-semibold text-lg" type="button">
                        <i className={props.profile?.adIcon}></i>
                        <span className="text-left">{props.profile?.adText}</span>
                    </a>
                </div>
            </div>
        </div>

    )
}