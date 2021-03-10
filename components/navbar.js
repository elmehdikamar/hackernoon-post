import { Transition } from "@headlessui/react"
import { useState } from "react"

export default function NavBar(props) {

    const [isOpen, setIsOpen] = useState(false)

    const primaryMenu = [
        {
            title: 'Read',
            accent: true,
            url: '#'
        },
        {
            title: 'Top Stories'
        },
        {
            title: 'Write'
        },
        {
            title: 'Listen'
        }
    ]

    const secondaryMenu = [
        {
            title: 'Advertise'
        },
        {
            title: 'About',
            accent: true
        },
        {
            title: 'Tech Companies',
            accent: true
        },
        {
            title: 'Careers'
        },
        {
            title: 'Slogging'
        }
    ]
    return (
        <>
            <Transition
                show={isOpen}
                enter="transition duration-150 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-100 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                <div className="fixed bg-limegreen-900 w-full h-screen top-0 right-0 z-50 flex flex-col">
                    <div className="w-full flex flex-row p-2 pr-3 flex-1">
                        <a className="flex-1" href=""><img className="rounded ring-2 ring-limegreen-500 w-10 h-10" src="https://hackernoon.com/fallback-profile.png" /></a>
                        <button onClick={() => setIsOpen(false)} className="w-10 h-10 text-brand" type="button">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </button>
                    </div>
                    <div className="font-mono text-brand text-sm flex flex-col divide-brand divide-y overflow-scroll">
                        {
                            primaryMenu.map((menu) => <a className="py-4 px-2 font-semibold" href={menu.url ?? '#'} >{menu.title}</a>)
                        }
                        {
                            secondaryMenu.map((menu) => <a className="py-4 px-2 font-semibold" href={menu.url ?? '#'} >{menu.title}</a>)
                        }
                    </div>
                </div>
            </Transition>
            <div className="flex flex-row items-center py-2 px-4 h-14 bg-brand">
                <img className="hidden md:block h-full" src="https://hackernoon.com/hn-logo.png" />
                <img className="md:hidden h-full" src="https://hackernoon.com/hn-icon.png" />
                <div className="flex flex-1 flex-row justify-end space-x-6 items-center">
                    <div className="relative">
                        <button className="absolute h-full right-2 inset-y-0 text-brand w-5 h-5 focus:outline-none" type="button">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </button>
                        <input className="text-brand placeholder-brand h-full py-2.5 rounded-sm px-3 bg-limegreen-900 font-semibold md:w-screen w-full max-w-xs focus:outline-none focus:ring-white focus:ring-1" type="text" placeholder="Search…" />
                    </div>
                    <button className="hidden md:block hover:bg-limegreen-400 text-black py-1.5 px-4 font-mono font-semibold border-2 text-sm border-black" type="button">Start Writing</button>
                    <button className="hidden md:block hover:bg-limegreen-400 text-black py-1.5 px-4 font-mono font-semibold border-2 text-sm  border-transparent hover:border-black" type="butto">Log in</button>
                    <button className="w-8 h-8 text-limegreen-700" type="button">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                        </svg>
                    </button>
                    <button onClick={() => setIsOpen(true)} className="md:hidden w-8 h-8 text-black" type="button">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>
            <div className="hidden md:flex w-full flex-row justify-center font-mono space-x-4 text-white text-sm font-semibold bg-limegreen-900 py-3">
                <div className="flex flex-row space-x-6">
                    {
                        primaryMenu.map((menu) => <a className={menu.accent ? "text-brand" : ""} href={menu.url ?? '#'}>{menu.title}</a>)
                    }
                    <span />
                    {
                        secondaryMenu.map((menu) => <a className={menu.accent ? "text-brand" : ""} href={menu.url ?? '#'}>{menu.title}</a>)

                    }
                </div>
            </div>
        </>
    )
}