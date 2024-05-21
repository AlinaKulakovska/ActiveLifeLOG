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
import { useState, useEffect } from 'react';

import { initializeApp } from "firebase/app";
import { onAuthStateChanged } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { getDatabase, ref, set, onValue } from 'firebase/database';

function Tracker() {
    const localizer = momentLocalizer(moment)

    const [eventlist, setEventlist] = useState([])

    const data = [
        { label: 'Group A', value: 400 },
        { label: 'Group B', value: 300 },
        { label: 'Group C', value: 300 },
        { label: 'Group D', value: 200 },
    ];

    const firebaseConfig = {
        apiKey: "AIzaSyBAmVWgHjD44PKRy6GafDeMR-UlA0dniIM",
        authDomain: "activelifelog-757be.firebaseapp.com",
        databaseURL: "https://activelifelog-757be-default-rtdb.europe-west1.firebasedatabase.app",
        projectId: "activelifelog-757be",
        storageBucket: "activelifelog-757be.appspot.com",
        messagingSenderId: "976540861548",
        appId: "1:976540861548:web:f80a8c1239841b1d5b4449"
    };

    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);

    function writeevent() {
        const db = getDatabase();
        setEventlist([])
        const reference = ref(db, 'events/' + (eventlist.length + 1) )
        let date = document.getElementById("date").value;
        let name = document.getElementById("name").value;
        set(reference, {
            title: name,
            start: date,
            end: date
        })

    }

    const db = getDatabase();

    useEffect(() => {
        const query = ref(db, "events/");
        return onValue(query, (snapshot) => {
            const data = snapshot.val();
            if (snapshot.exists()) {
                Object.values(data).map((event) => {
                    setEventlist((events) => [...events, event]);
                   
                });
            }
           });
    }, []);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
                const uid = user.uid;
                // ...
                console.log("uid", uid)
            } else {
                // User is signed out
                // ...
                console.log("user is logged out")
            }
        });

    })

    return (
        <div className='text-white'>

            <div className='nav py-2 px-10 flex justify-between w-full items-center'>
                <div>
                    <img src={logo} className='w-24 md:w-48 min-w-24' alt='logo'></img>
                </div>
                <div className='flex items-center relative text-xl md:text-3xl lg:text-5xl'>
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

            <div className='flex flex-wrap flex-col items-center justify-center my-5'>
                <input type='date' className='my-3' id='date' required></input>
                <input type='text' className='my-3' id='name' placeholder='name' required></input>
                <button className='button' onClick={writeevent}>Log a workout</button>
            </div>

            <div className="mt-6" >
                <Footer /></div>
        </div>
    )
}
export default Tracker