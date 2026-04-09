import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import axios from 'axios';
import { useEffect, useState } from 'react';

const config = {
    url: "https://69a5c882885dcb6bd6a94cd8.mockapi.io/users"
}

const Table1 = () => {
    const [data, setData] = useState("");
    const [show, setShow] = useState('');

    const fetchdata = async () => {
        const res = await axios(config);
        console.log(res);

    }
    // fetchdata()
    return (
        <>
            <div className="max-w-full flex justify-center p-20">
                <div className="bg-blue-500 min-w-auto min-h-auto grid grid-cols-1 rounded-2xl">
                    <div className="m-auto p-5">
                        <h1 className='flex justify-center items-center p-5 text-4xl font-extrabold'>Http Request</h1>
                        <input type="text" placeholder="enter your task...." className=" bg-white text-black p-2" onChange={(e) => setData(e.target.value)} />
                        <button className="bg-red-600 py-2 px-4 cursor-pointer">Apply</button>
                    </div>
                    <div className='flex flex-col gap-5 p-4'>
                        <div className='bg-cyan-800 p-5 rounded-2xl'>
                            <div className='flex gap-5 items-center'>
                                <h1 className="text-2xl font-bold">something</h1>
                                <input type="text" placeholder='edit' className='bg-white p-1 hidden' />
                                <button className='bg-red-600 py-2 px-4 cursor-pointer hidden'>Apply</button>
                                <button className='bg-red-600 py-1 px-4 cursor-pointer rounded-2xl'><EditIcon /></button>
                                <button className='bg-red-600 py-1 px-4 cursor-pointer rounded-2xl'><DeleteIcon /></button>
                            </div>
                        </div>


                    </div>

                </div>
            </div>
        </>
    )
}

export default Table1;