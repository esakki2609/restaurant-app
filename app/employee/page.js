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
                <div className='flex flex-col w-[60%] h-90% bg-white p-4 gap-4'>
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

                    <div className="overflow-hidden rounded-lg border border-gray-300 ">
                        <table className="min-w-full table-auto text-sm text-left text-gray-700">
                            <thead className="table-header-group bg-cyan-800 text-white font-semibold sticky top-0 z-10">
                                <tr className="table-row">
                                    <th className="table-cell px-6 py-3 border border-gray-300">Employee Name</th>
                                    <th className="table-cell px-6 py-3 border border-gray-300">Role</th>
                                    <th className="table-cell px-6 py-3 border border-gray-300">Attendance Record</th>
                                    <th className="table-cell px-6 py-3 border border-gray-300">Performance Rating</th>
                                    <th className="table-cell px-6 py-3 border border-gray-300">Status</th>
                                    <th className="table-cell px-6 py-3 border border-gray-300">Salary</th>
                                </tr>
                            </thead>
                            <tbody className="table-row-group">
                                {employeeData.map((data) => (
                                    <tr key={data.id} className="table-row hover:bg-gray-50 transition-colors">
                                        <td className="table-cell px-6 py-3 border border-gray-300">{data.name}</td>
                                        <td className="table-cell px-6 py-3 border border-gray-300">{data.role}</td>
                                        <td className="table-cell px-6 py-3 border border-gray-300">{data.attendance}</td>
                                        <td className="table-cell px-6 py-3 border border-gray-300">{data.performance}</td>
                                        <td className={`table-cell px-6 py-3 border border-gray-300 ${data.status === 'Active' ? 'text-green-600' : 'text-red-600'}`}>
                                            {data.status}
                                        </td>
                                        <td className="table-cell px-6 py-3 border border-gray-300">{data.salary}</td>
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