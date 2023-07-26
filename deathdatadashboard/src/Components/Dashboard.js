import React, { useState } from 'react'
import DetailsComp from './DetailsComp';

function Dashboard() {
    const [show, setShow] = useState(false);
    return (
        <div className="my-2 p-3">
            <hgroup className="flex items-center justify-between">
                <h1 className=" text-3xl">Dashboard</h1>
                <button
                    onClick={() => setShow(!show)}
                    className="bg-gradient-to-r from-gray-600 to-gray-800 text-white font-normal py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out">
                    Generate Details
                </button>
            </hgroup>
            <hr className='my-5 border-gray-400' />
            <div>
                {show && <DetailsComp />}
            </div>
        </div>
    )
}

export default Dashboard