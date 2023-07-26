import React from "react";
import { filterStateWiseData } from "../Utils/filterFunctions";

const TabularForm = ({ data }) => {

    const stateWiseData = filterStateWiseData(data);
    return (
        <div className="h-80 overflow-y-auto text-white rounded-md shadow-xl shadow-gray-700">
            <table className="table-auto border-collapse border border-cyan-300">
                <thead>
                    <tr>
                        <th className="px-4 py-2 bg-slate-900">State</th>
                        <th className="px-4 py-2 bg-slate-900">Death</th>
                        <th className="px-4 py-2 bg-slate-900">Recoveries</th>
                        <th className="px-4 py-2 bg-slate-900">Cases</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Display the fetched data */}
                    {Object.keys(stateWiseData).map((item, index) => {
                        return <tr key={index} className={(index % 2 === 0) ? 'bg-gray-700' : 'bg-gray-600'}>
                            <td className="border px-4 py-2">{item}</td>
                            <td className="border px-4 py-2">{stateWiseData[item].deaths}</td>
                            <td className="border px-4 py-2">{stateWiseData[item].recoveries}</td>
                            <td className="border px-4 py-2">{stateWiseData[item].cases}</td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default TabularForm;
