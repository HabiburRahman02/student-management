import { useState } from "react";

const Student = ({ studentData }) => {
    const { name, roll, registration, semester, image, shift, address, email, phone } = studentData;
    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        <div>
            <div className="card w-full h-full bg-base-100 gap-4 shadow-xl">
                <figure className="w-full h-[290px] object-cover md:h-72 p-2">
                    <img className="w-full rounded-xl object-cover"
                        src={image}
                        alt="Shoes" />
                </figure>
                <div className="pb-5 px-5 text-start space-y-1">
                    <h2 className="card-title">
                        Name: {name}
                    </h2>
                    <p>Roll: {roll}</p>
                    <p>Regi: {registration}</p>
                    <p>Shift: {shift}</p>
                    <div className="card-actions justify-end">
                        <button onClick={() => setIsModalOpen(true)} className="bg-green-500 p-3 rounded-xl text-white hover:bg-purple-500">Details</button>
                    </div>

                    {/* show modal start */}
                    {isModalOpen && (
                        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                            <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 md:w-1/2 lg:w-1/4">
                                <img className="h-52 w-full sm:w-72" src={image} alt="" />
                                <h3 className="font-bold text-lg mt-3">Name: {name}</h3>
                                <div className="space-y-1 text-base mt-2">
                                    <p><span className="font-semibold">Roll:</span> {roll}</p>
                                    {/* <p><span className="font-semibold">Faculty:</span> {faculty}</p> */}
                                    <p><span className="font-semibold">Registration:</span> {registration}</p>
                                    <p><span className="font-semibold">Semester:</span> {semester}</p>
                                    <p><span className="font-semibold">Shift:</span> {shift}</p>
                                    <p><span className="font-semibold">Email:</span> {email}</p>
                                    <p><span className="font-semibold">Phone:</span> {phone}</p>
                                    <p><span className="font-semibold">Phone:</span> {phone}</p>
                                    <p>Address: {address}</p>
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
                    {/* show modal end */}

                </div>
            </div>
        </div>
    );
};

export default Student;