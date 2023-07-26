import React from 'react'

function Header() {
    return (
        <div className="flex items-center justify-between shadow-xl bg-slate-700 shadow-gray-800 rounded-md p-3">
            <div class="flex items-center w-[255px] bg-gray-800 p-2 rounded-lg text-white">
                <svg
                    class="w-5 h-5 text-gray-400 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M21 21l-4.35-4.35M15 11a4 4 0 11-8 0 4 4 0 018 0zM3 3l18 18"
                    ></path>
                </svg>
                <input
                    type="text"
                    class="bg-transparent focus:outline-none text-white placeholder-gray-500 w-full"
                    placeholder="Search..."
                />
            </div>
            <div className="flex items-center gap-4 relative p-2">
                <p>Desmond Geek</p>
                <div className="cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5.636 5.636a9 9 0 1012.728 0M12 3v9" />
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default Header