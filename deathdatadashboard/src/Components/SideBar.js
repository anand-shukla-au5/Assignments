import React from 'react'

function SideBar() {
    return (
        <nav className="h-screen bg-slate-700 p-3">
            <div className="flex items-center justify-center border-b-[1px] border-gray-400">
                <h1 className="text-white font-semibold text-2xl mb-3">Navigation</h1>
            </div>
            <div className="flex items-center gap-4 py-3 border-b-[1px] border-gray-400 mt-4">
                <p className="text-white font-normal text-1xl">Dashboard</p>
            </div>
            <div className="border-b-[1px] border-gray-400 pt-10">
                <p className="text-white text-sm font-normal leading-3 text-1xl mb-2">INTERFACE</p>
                <div className="flex items-center justify-between gap-3 pt-3 cursor-pointer">
                    <div className="flex items-center gap-3">
                        <p className="text-white font-normal text-1xl">Component</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
                        </svg>
                    </div>
                </div>
                <div className="flex items-center justify-between gap-3 cursor-pointer">
                    <div className="flex items-center gap-3">
                        <p className="text-white font-normal text-1xl my-2">Component</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
                        </svg>

                    </div>
                </div>
                <div className="flex items-center justify-between gap-3 pb-3 cursor-pointer">
                    <div className="flex items-center gap-3">
                        <p className="text-white font-normal text-1xl">Component</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
                        </svg>
                    </div>
                </div>

            </div>
            <div className="border-b-[1px] border-gray-400 pt-10">
                <p className="text-white text-sm font-normal leading-3 text-1xl mb-2">ADD ONS</p>
                <div className="flex items-center justify-between gap-3 pt-3 cursor-pointer">
                    <div className="flex items-center gap-3">
                        <p className="text-white font-normal text-1xl">Component</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
                        </svg>
                    </div>
                </div>
                <div className="flex items-center justify-between gap-3 cursor-pointer">
                    <div className="flex items-center gap-3">
                        <p className="text-white font-normal text-1xl my-2">Component</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
                        </svg>

                    </div>
                </div>
                <div className="flex items-center justify-between gap-3 pb-3 cursor-pointer">
                    <div className="flex items-center gap-3">
                        <p className="text-white font-normal text-1xl">Component</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
                        </svg>
                    </div>
                </div>

            </div>
            <div className="flex items-center justify-center mt-4">
                <div className="h-[40px] w-[40px] text-white bg-gray-900 rounded-full flex items-center justify-center cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
                    </svg>
                </div>
            </div>
            <div className="flex items-center text-center bg-gray-900 justify-center flex-col mt-4 rounded-md">
                <p className='p-2'>Lorem ipsum dolor sit amet, te molestie menandri reformidans sea, ne sea verear persius fabellas.</p>
            </div>
        </nav>
    )
}

export default SideBar