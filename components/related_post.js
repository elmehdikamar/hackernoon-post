import moment from "moment";
import TagItem from "./tag_item";

export default function RelatedPost(props) {
    return (
        <div className="relative group flex flex-col border-2 border-gray-100 col-span-3 md:col-span-1">
            {
                props.post?.title &&
                <>
                    <button className="absolute hidden group-hover:block top-2 right-2 w-5 h-5 text-black ml-2" type="button">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                        </svg>
                    </button>
                    <a className="mt-4 ml-4 mr-8 group-hover:underline font-mono font-bold text-base border-b-4 border-limegreen-300 hover:border-0 hover:border-brand hover:bg-brand" href="#">{props.post?.title}</a>
                    <div className="flex flex-col flex-1 bg-gray-100 mt-8 items-center pt-2">
                        <span className="font-mono text-xs">{props.post?.reactionsCount ?? 0} reactions</span>
                        <div className="relative h-full">
                            {props.post?.tags && props.post?.tags.length > 0 && <div className="absolute bottom-8 right-5">
                                <TagItem title={props.post.tags[0]} />
                            </div>}
                            <img className="object-cover mt-3 w-full h-full" src={props.post?.mainImage} />
                        </div>
                    </div>
                    <div className="flex flex-row justify-between w-full items-end mt-8 mb-3 pr-2">
                        <div className="grid grid-rows-2 grid-cols-2 text-xs space-x-2">
                            <img className="w-12 h-12 ring-4 ring-gray-300 row-span-2 mx-auto" src={props.post?.profile?.avatar} />
                            <a className="font-mono border-b-4 border-limegreen-300 hover:border-0 hover:border-brand hover:bg-brand" href="#">@{props.post?.profile?.handle}</a>
                            <span className="text-gray-700 font-mono font-semibold mt-2">{props.post?.profile?.displayName}</span>
                        </div>
                        <div className="flex flex-col text-sm items-end space-y-1">
                            <span>{(props.post?.estimatedTime ?? 0) > 0 && `${props.post.estimatedTime} min`}</span>
                            <span>{moment.unix(props.post?.publishedAt).format('MM/DD/YY')}01/14/21</span>
                        </div>
                    </div>
                </>
            }
        </div>
    )
}