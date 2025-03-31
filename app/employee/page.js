import { employeeData } from '@/components/data'
import React from 'react'
import { GoPlus } from "react-icons/go"

const Employee = () => {
    return (
        <div className="flex flex-col w-full  overflow-hidden gap-2% p-5">
            <div className='flex flex-row justify-between items-center text-cyan-900 gap-1 h-[5%] '>
                <p className='text-xl'>Employees History</p>
                {/* Add Employee ....*/}
                <div className='flex justify-end items-center '>
                    <GoPlus />
                    <button className='flex cursor-pointer '>ADD EMPLOYEE</button>
                </div>
            </div>

            <div className='flex flex-row gap-5 pt-8'>
                <div className='flex flex-col w-[60%] h-90% bg-white p-4'>
                    {/* Search and Date Picker....*/}
                    <div className='flex flex-row justify-between'>
                        <input
                            type="search"
                            placeholder="Search..."
                            className="border p-3 border-gray-300 rounded-md hover:border-cyan-900"
                        />
                        <input id='startDate' type='date' placeholder='Star Date' className='border border-gray-300 rounded-sm text-cyan-900 cursor-text hover:border-cyan-900 p-3' />
                    </div>
                    {/* Add Employee Table ....*/}
                    <div className='flex flex-col py-5 overflow-auto'>
                        <table className='w-full border-collapse '>
                            <thead className='text-cyan-900 font-bold sticky'>
                                <tr>
                                    <td className='border border-gray-300 text-left p-3 px-6 rounded-md'>Employee Name</td>
                                    <td className='border border-gray-300 text-left p-3 rounded-md px-6'>Role</td>
                                    <td className='border border-gray-300 text-left p-3 rounded-md px-6'>Attendance Record</td>
                                    <td className='border border-gray-300 text-left p-3 rounded-md px-6'>Performance Rating</td>
                                    <td className='border border-gray-300 text-left p-3 rounded-md px-6'>Status</td>
                                    <td className='border border-gray-300 text-left p-3 rounded-md px-6'>Salary</td>
                                </tr>
                            </thead>
                            <tbody className='overflow-y-visible w-full h-50 '>
                                {employeeData.map((data) => (
                                    <tr key={data.id}>
                                        <td className="border border-gray-300 text-left p-3 px-6">{data.name}</td>
                                        <td className="border border-gray-300 text-left p-3 px-6">{data.role}</td>
                                        <td className="border border-gray-300 text-left p-3 px-6">{data.attendance}</td>
                                        <td className="border border-gray-300 text-left p-3 px-6">{data.performance}</td>
                                        <td className={`border border-gray-300 text-left p-3 px-6 ${data.status === "Active" ? "text-green-600" : "text-red-600"}`}>{data.status}</td>
                                        <td className="border border-gray-300 text-left p-3 px-6">{data.salary}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                    </div>

                </div>

                <div className='flex flex-col w-[40%] h-90% bg-white p-4'></div>
            </div>
        </div >
    )
}

export default Employee