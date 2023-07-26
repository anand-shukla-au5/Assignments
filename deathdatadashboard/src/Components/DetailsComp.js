import React, { useEffect, useState } from 'react'
import TabularForm from './TabularForm';
import PieChartCasewise from './PieChartCasewise';
import OverallData from './OverallData';

function DetailsComp() {
    const [deathData, setdeathData] = useState([]);
    const apiUrl = "https://mocki.io/v1/b2ac46d3-385d-448a-a77a-9bc2c5b5dcbc";

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(apiUrl);
                if (!response.status === 200) {
                    throw new Error("Network response was not ok");
                }
                const jsonData = await response.json();
                setdeathData(jsonData.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
        return () => {
            setdeathData([]);
        };
    }, []);

    console.log(deathData);
    return (
        <>
            <div className='flex items-center justify-evenly text-slate-150'>
                <div className="bg-slate-800 p-2 rounded-md shadow-lg shadow-gray-600">
                    <h3 className="my-2 text-xl">Case Wise Report</h3>
                    <PieChartCasewise data={deathData} />
                </div>
                <div className="bg-slate-800 p-2 rounded-md shadow-lg shadow-gray-600">
                    <h3 className="my-2 text-xl">Overall Report Data</h3>
                    <OverallData data={deathData} />
                </div>
            </div>
            <div className="my-5">
                <h3 className="my-2 text-xl">State Wise Report</h3>
                <TabularForm data={deathData} />
            </div>
        </>
    )
}

export default DetailsComp