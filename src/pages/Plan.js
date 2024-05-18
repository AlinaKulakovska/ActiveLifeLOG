import { Link } from 'react-router-dom'
import logo from '../images/Logo.png'
import coaches from '../images/Coaches.png'
import { CiUser } from 'react-icons/ci';
import { CgAlbum, CgCalendarDates, CgLogOut } from 'react-icons/cg';
import Footer from '../components/Footer.js';
import workoutdata from '../components/workoutdata.js'
import Card from '../components/Card.js'
import { useState } from 'react';

function Plan() {

    // restrict accsess



    const [workoutsdata, setWorkoutsData] = useState(workoutdata)

    function filter() {
        let radio = document.querySelector('input[name="select"]:checked').value;
        if (radio >= 45) {
            setWorkoutsData(workoutdata.filter((item) => item.time >= 45));
        } else if (radio <= 25) {
            setWorkoutsData(workoutdata.filter((item) => item.time <= 25));
        } else if (radio > 25 && radio < 45) {
            setWorkoutsData(workoutdata.filter((item) => item.time > 25 && item.time < 45));
        }
    }

    function random() {
        const randomIndex = Math.floor(Math.random() * workoutdata.length);
        setWorkoutsData([workoutdata[randomIndex]])
    }

    function createCard(work) {
        return (
            <Card
                key={work.key}
                name={work.name}
                imgURL={work.imgURL}
                about={work.about}
                time={work.time}
                level={work.level}
                equipment={work.equipment}
                id={work.id}
            />
        );
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
                <img src={coaches} className='w-1/2 md:w-1/3' alt='coaches'></img>
                <h1 className='text-xl md:text-4xl text-center text-bold max-w-1/3'>Unique workouts from our instructors</h1>
            </div>

            <div className='flex flex-col justify-between mt-5 mx-5 md:flex-row'>
                <div className="wrapper">
                    <input type="radio" name="select" value={25} id="option-1" onClick={filter} />
                    <input type="radio" name="select" value={35} id="option-2" onClick={filter} />
                    <input type="radio" name="select" value={45} id="option-3" onClick={filter} />
                    <label htmlFor="option-1" className="option option-1">
                        <span>&gt;25</span>
                    </label>
                    <label htmlFor="option-2" className="option option-2">
                        <span>25-45</span>
                    </label>
                    <label htmlFor="option-3" className="option option-3">
                        <span>45+</span>
                    </label>
                </div>
                <button className='button' onClick={random}>Pick a random workout</button>
            </div>
            <h1 className='text-4xl text-center text-bold max-w-1/3'>Recent</h1>
            <div className='flex flex-wrap  justify-center mx-5'>
                {workoutsdata.map(createCard)}
            </div>
            <div className="mt-6" >
                <Footer /></div>
        </div>
    )
}
export default Plan