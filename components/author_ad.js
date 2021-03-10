export default function AuthorAd(props) {
    return (
        <div className={`flex flex-col ${props.className ?? ''}`}>
            <p className="ml-auto mb-4">Share this story</p>
            <div className="flex flex-row bg-gray-900 ring-4 ring-brand p-4 items-start">
                <div className="flex-1 flex flex-col items-start text-sm text-brand">
                    <img className="w-12 h-12 ring-4 ring-gray-300" src="https://hackernoon.com/images/541r0RExUOQ3nFAQs7oJuST9Axf2-842316b.jpeg" />
                    <a className="mt-5 font-mono font-semibold border-b-4 border-limegreen-400 hover:border-0 hover:border-brand hover:bg-brand" href="#">@codebucks</a>
                    <span className="font-mono font-semibold mt-3">CodeBucks</span>
                </div>
                <div className="flex flex-1 flex-row flex-shrink-0">
                    <button className="text-brand flex flex-row items-center space-x-2 font-semibold text-lg" type="button">
                        <svg className="h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        <span>Subscribe to Learn ReactJS by building!</span>
                    </button>
                </div>
            </div>
        </div>

    )
}