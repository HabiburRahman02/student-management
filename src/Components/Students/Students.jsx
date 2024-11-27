import { useLoaderData } from "react-router-dom";
import Student from "../Student/Student";
import { useState } from "react";

const Students = props => {
    const allStudentsData = useLoaderData();
    const [filteredData, setFilteredData] = useState(allStudentsData);
    const [activeShift, setActiveShift] = useState("all");
    const [studentLength, setStudentLength] = useState(allStudentsData)

    const handleFilter = (shift) => {
        setActiveShift(shift);
        if (shift === 'all') {
            setFilteredData(allStudentsData);
            setStudentLength(allStudentsData)
        } else {
            const handleData = allStudentsData.filter((data) => data.shift === shift);
            setFilteredData(handleData);
            setStudentLength(handleData);
        }
    };

    return (
        <div className="max-w-7xl mx-auto max-sm:p-5">
            <div className="sm:flex items-center justify-between mt-4 sm:mt-8">
                <p className="text-lg md:text-xl font-bold bg-green-300 p-2 md:p-4 rounded-xl">Total Student: {studentLength.length}</p>
                <div className="flex gap-4 max-sm:justify-center items-center max-sm:mt-4">
                    <div className="form-control">
                        <input
                            type="text"
                            placeholder="Type Roll Here"
                            className="input input-bordered w-30 md:w-auto"
                        />
                    </div>
                    <button className="font-bold rounded-xl px-4 py-3 hover:bg-purple-600 text-white bg-green-500">Search</button>
                </div>
            </div>
            <div className='mt-4 sm:mt-8 flex max-sm:flex-col justify-center md:gap-5'>
                <div className='md:w-1/5'>
                    <div className="flex flex-col space-y-3 sm:space-y-6">
                        <button
                            onClick={() => handleFilter('all')}
                            className={`font-bold rounded-xl p-4 hover:bg-purple-600 ${activeShift === 'all' ? 'bg-purple-500 text-white' : 'bg-green-500 text-white'}`}>
                            All Student
                        </button>

                        <button
                            onClick={() => handleFilter('1st')}
                            className={`font-bold rounded-xl p-4 hover:bg-purple-600 ${activeShift === '1st' ? 'bg-purple-500 text-white' : 'bg-green-500 text-white'}`}>
                            1st shift
                        </button>

                        <button
                            onClick={() => handleFilter('2nd')}
                            className={`font-bold rounded-xl p-4 hover:bg-purple-600 ${activeShift === '2nd' ? 'bg-purple-500 text-white' : 'bg-green-500 text-white'}`}>
                            2nd shift
                        </button>
                    </div>
                </div>
                <div className="max-sm:mt-5 md:w-4/5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:grid-cols-3">
                        {
                            filteredData.map((studentData) => <Student key={studentData.id} studentData={studentData}></Student>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Students;