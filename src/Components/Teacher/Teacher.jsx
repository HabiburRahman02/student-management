import { useState } from "react";

const Teacher = ({ allTeacher }) => {
    const { name, designation, faculty, personal_phone, img, department, roomNo } = allTeacher;
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div>
            <div className="card card-compact rounded-lg bg-white shadow-xl">
                <figure>
                    <img className="w-full h-96" src={img} alt="Teacher" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <div className="text-base space-y-1">
                        <p><span className="font-semibold">Designation:</span> {designation}</p>
                        <p><span className="font-semibold">Faculty:</span> {faculty}</p>
                        <p><span className="font-semibold">Contact:</span> {personal_phone}</p>
                        <div>
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="bg-[rgb(37,168,214)] hover:bg-[rgb(10,132,176)] text-white p-3 rounded-lg text-xl w-full mt-2"
                            >
                                Details
                            </button>
                        </div>
                    </div>

                    {isModalOpen && (
                        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                            <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 md:w-1/3 lg:w-1/4">
                                <img className="h-52 w-full sm:w-72" src={img} alt="" />
                                <h3 className="font-bold text-lg mt-3">Name: {name}</h3>
                                <div className="space-y-1 text-base mt-2">
                                    <p><span className="font-semibold">Designation:</span> {designation}</p>
                                    <p><span className="font-semibold">Faculty:</span> {faculty}</p>
                                    <p><span className="font-semibold">Contact:</span> {personal_phone}</p>
                                    <p><span className="font-semibold">Email:</span> {department}</p>
                                    <p>{roomNo ? <span><span className="font-semibold"></span>Room No: {roomNo} </span> : <span className="text-base font-medium">Room No: N/A</span>}</p>
                                </div>
                                <div className="modal-action justify-start mt-2">
                                    <button
                                        onClick={() => setIsModalOpen(false)}
                                        className="bg-red-500 text-white px-6 py-3 rounded-lg"
                                    >
                                        Close
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Teacher;
