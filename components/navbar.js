export default function NavBar(props) {
    return (
        <>
            <div className="flex flex-row items-center py-2 px-4 h-14 bg-green-500">
                <img className="h-full" src="https://hackernoon.com/hn-logo.png" />
                <div className="flex flex-1 flex-row justify-end space-x-5 items-center">
                    <div className="relative">
                        <button className="absolute h-full right-2 inset-y-0 text-green-500 w-6 h-6 focus:outline-none" type="button">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </button>
                        <input className="text-green-500 placeholder-green-500 py-2 px-3 bg-green-900 font-medium w-56 focus:outline-none focus:ring-white focus:ring-1" type="text" placeholder="Search…" />
                    </div>
                    <button className="hover:bg-green-400 text-black py-1.5 px-4 font-serif font-semibold border-2 text-sm border-black" type="button">Start Writing</button>
                    <button className="hover:bg-green-400 text-black py-1.5 px-4 font-serif font-semibold border-2 text-sm  border-transparent hover:border-black" type="butto">Log in</button>
                    <button className="w-8 h-8 text-green-700" type="button">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>
            </div>
            <div className="w-full flex flex-row justify-center font-serif space-x-4 text-white text-sm font-semibold bg-green-900 py-3">
                <div className="flex flex-row space-x-6">
                    <a className="text-green-500" href="#">Read</a>
                    <a href="#">Top Stories</a>
                    <a href="#">Write</a>
                    <a href="#">Listen</a>
                    <a className="pl-5" href="#">Advertise</a>
                    <a className="text-green-500" href="#">About</a>
                    <a className="text-green-500" href="#">Tech Companies</a>
                    <a href="#">Careers</a>
                    <a href="#">Slogging</a>
                </div>
            </div>
        </div>
        </>
    )
}