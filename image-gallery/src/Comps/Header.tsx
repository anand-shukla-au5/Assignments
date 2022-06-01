import React from 'react'
interface headerProps {
}
const Header: React.FC<headerProps> = () =>
    <div className="flex flex-col sm:flex-row m-5 justify-between h-auto">
        <div>
            <h1 className="text-2xl font-medium" > Media Library </h1>
            <p className="text-[#6b7280]" > Create, edit and manage the media on your community </p>
        </div>
        <button className="bg-[#0284c7] px-4 text-white h-10 rounded" > Add Image </button>
    </div>
export default Header; 