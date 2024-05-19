import { Link } from 'react-router-dom'
import logo from '../images/Logo.png'
import victory from '../images/Victory.png'
import { CiUser } from 'react-icons/ci';
import { CgAlbum, CgCalendarDates, CgLogOut } from 'react-icons/cg';
import Footer from '../components/Footer.js';
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'

import Stack from '@mui/material/Stack';
import { PieChart } from '@mui/x-charts/PieChart';
import { useState } from 'react';

function Tracker() {
    const localizer = momentLocalizer(moment)
    // restrict accsess
    const [eventlist, setEventlist] = useState([{
        title: "Legs",
        start: '2024-05-18',
        end: '2024-05-18',
    },
    {
        title: "Chest",
        start: '2024-05-20',
        end: '2024-05-20',
    },
    {
        title: "Arms",
        start: '2024-06-20',
        end: '2024-06-20',
    }])
    const data = [
        { label: 'Group A', value: 400 },
        { label: 'Group B', value: 300 },
        { label: 'Group C', value: 300 },
        { label: 'Group D', value: 200 },
    ];

    function logworkout() {
        let date = document.getElementById("date").value;
        let name = document.getElementById("name").value;
        const newEvent = {
            title: name,
            start: date,
            end: date,
        };

        // Add the new event to the existing array
        setEventlist([...eventlist, newEvent]);

    }

    return (
        <div className='text-white'>
            <div className='nav py-2 px-10 flex justify-between w-full items-center'>
                <div>
                    <img src={logo} className='w-24 md:w-48' alt='logo'></img>
                </div>
                <div className='flex items-center relative text-2xl md:text-3xl lg:text-5xl'>
                    <Link to='/plan' className='flex items-center '><CgAlbum />Plan</Link>
                    <Link to='/tracker' className='flex items-center'><CgCalendarDates /> Tracker</Link>
                    <Link to='/' className='flex items-center' ><CgLogOut /> LogOut</Link>
                    <CiUser />
                </div>
            </div>


            <div className='w-full flex flex-col items-center'>
                <img src={victory} className='w-1/3' alt='victory'></img>
                <h1 className='text-4xl text-bold'>Tracker of your achievements</h1>
            </div>


            <div className='m-4 flex items-center justify-evenly'>
                <Calendar
                    className='bg-white text-black rounded-lg p-2'
                    localizer={localizer}
                    events={eventlist}
                    startAccessor="start"
                    endAccessor="end"
                    style={{ height: 400, width: 400 }}
                />


                <Stack direction="row">
                    <PieChart
                        series={[
                            {
                                paddingAngle: 5,
                                innerRadius: 60,
                                outerRadius: 80,
                                data,
                            },
                        ]}
                        margin={{ right: 5 }}
                        width={200}
                        height={200}
                        legend={{ hidden: true }}
                    />
                </Stack>
            </div>

            <div className='flex flex-col items-center justify-center my-5'>
                <input type='date' className='my-3' id='date'></input>
                <input type='text' className='my-3' id='name' placeholder='name'></input>
                <button className='button' onClick={logworkout}>Log a workout</button>
            </div>

            <div className="mt-6" >
                <Footer /></div>
        </div>
    )
}
export default Tracker