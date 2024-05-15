
import { CiLogin, CiUser } from 'react-icons/ci';
import { CgAlbum, CgCalendarDates, CgClose, CgLogOut } from 'react-icons/cg';
import { Link } from 'react-router-dom'
import logo from '../images/Logo.png'
import graphs from '../images/graphs.png'
import exercises from '../images/exercises.png'
import personone from '../images/person1.png'
import person from '../images/person2.png'
import { useState } from 'react';
import Footer from '../components/Footer.js';

function Main() {

    const [hide, setHide] = useState(true);
    const [logined, setLogined] = useState(false);
    const [hidemenu, setHideMenu] = useState(true);

    const validateEmail = () => {
        const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        const email = document.getElementById('email').value;


        // const passwordinput = document.getElementById('password').value;
        // const password = "12345"
        // if (regex.test(email) && passwordinput == password) {

        if (regex.test(email)) {
            setLogined(true);
            setHide(!hide);
        } else {
            alert("invalid email")
        }
    }


    return (
        <div className="App text-white">

            <div className={hide ? "hide" : ""}>
                <div className='fixed py-12 px-4 md:py-24 md:px-48 z-30 ' id='login'>
                    <button className='text-[#F0FF42] absolute top-5 right-5 text-2xl' onClick={() => setHide(!hide)}><CgClose /></button>
                    <h1 className='text-md md:text-lg' >Email</h1>
                    <input type='email' id='email' ></input>
                    <h1 className='text-md md:text-lg'>Password</h1>
                    <input type='password' className='mb-5' id='password'></input>
                    <div><div className='button' onClick={() => { validateEmail() }}>Login</div></div>
                </div>
            </div>

            <section className='hero'>
                <div className='nav py-2 px-10 flex justify-between w-full  items-center'>
                    <Link to='/' >  <div>
                        <img src={logo} className='w-24 md:w-48'></img>
                    </div></Link>
                    <div className='flex items-center relative text-2xl md:text-3xl lg:text-5xl'>
                        {logined ? <div className='flex'>  <Link to='/' className='flex items-center '><CgAlbum />Plan</Link>
                            <Link to='/tracker' className='flex items-center'><CgCalendarDates /> Tracker</Link>
                            <Link to='/' className='flex items-center' onClick={() => { setLogined(false); setHideMenu(!hidemenu) }}><CgLogOut /> LogOut</Link>
                        </div> : ''}
                        <div >
                            {logined ? <CiUser className='hover:cursor-pointer' onClick={() => setHideMenu(!hidemenu)} /> : <CiLogin className='text-2xl md:text-4xl lg:text-6xl hover:cursor-pointer' onClick={() => setHide(!hide)} />}
                        </div>
                    </div>
                </div>
                <div className='h-[40vh] flex flex-col justify-end w-full items-end md:h-[80vh]'>
                    <div>
                        <p className='text-xl font-bold w-64 mb-4 md:text-4xl md:w-96 drop-shadow-md'>Start <span className='yellow'>Your</span> Fitness Journey with<span className='yellow'> ActiveLifeLOG</span> for Excellent results</p>
                        <button className='button ml-[15%]' onClick={() => setHide(!hide)}>Begin Now!</button>
                    </div>
                </div>
            </section >

            <section className='flex justify-between px-10 md:px-20 my-24 flex-wrap'>
                <div className='flex justify-center flex-col'>
                    <p className='text-lg sm:text-xl  md:text-3xl w-full md:w-64 lg:w-96   mb-4  text-center'><span className='yellow'> Set goals</span> and <span className='yellow'>Track</span> your fitness progress with charts in <span className='yellow'>ActiveLifeLog</span></p>
                    <button className='button' onClick={() => setHide(!hide)}>Track</button>
                </div>
                <img src={graphs} alt='graphs' className='mt-5 md:mt-0 w-auto md:w-[40%] lg:w-[50%]'></img>
            </section>

            <section className='flex justify-between px-10 md:px-20 my-24 flex-wrap-reverse items-center'>
                <img src={exercises} alt='graphs' className='mt-5 md:mt-0 w-auto md:w-[40%] lg:w-[50%] mb-4 '></img>
                <div className='flex justify-center flex-col'>
                    <p className='text-lg  sm:text-xl md:text-3xl w-full md:w-64 lg:w-96  text-center'>Form your<span className='yellow'> very</span> own set of exercises or follow <span className='yellow'>already planned</span> workouts in  <span className='yellow'>ActiveLifeLog</span></p>
                    <button className='button mt-4' onClick={() => setHide(!hide)}>Plan</button>
                </div>
            </section>

            <section className='px-16 md:px-20 my-12'>
                <div className='flex justify-center flex-wrap items-center'>
                    <div className='text-lg p-4 sm:text-xl md:text-3xl w-full lg:w-[30%] text-center lg:border-r-4 border-[#F0FF42] border-b-4 border-r-0  lg:border-b-0'>Have<span className='yellow'> fun</span> while getting better with gamified experience <span className='yellow'>achievements</span> and  <span className='yellow'>challenges</span></div>
                    <div className='text-lg p-4 sm:text-xl md:text-3xl w-full lg:w-[30%] items-center text-center lg:border-r-4 border-[#F0FF42] border-b-4 border-r-0  lg:border-b-0'>Follow<span className='yellow'> live workouts</span> while listening to your favorite <span className='yellow'>music</span></div>
                    <div className='text-lg p-4 sm:text-xl md:text-3xl w-full lg:w-[30%] text-center'>Receive daily<span className='yellow'> motivation</span> and <span className='yellow'>insights</span> about fitness to help you on your journey</div>
                </div>
            </section>

            <section>
                <h1 className='bg-[#5142FF] m-0 py-5 text-center text-[#ffffff] text-2xl md:text-4xl font-bold'>Join our great community</h1>
            </section>

            <section>
                <div className='flex justify-center px-10 md:px-20 my-24 flex-wrap items-center'>
                    <img src={person} alt='person' className='w-[150px] h-[150px] mr-5'></img>
                    <div className='flex justify-center flex-col'>
                        <p className='text-md sm:text-lg md:text-xl w-full md:w-[500px] lg:w-[700px] text-justify'>This app has revolutionized the way I approach my fitness regimen. With the novelty of fresh routines, clear video instructions, and invaluable respiration and weight suggestions, ActveLifeLOG has invigorated my commitment to a healthier lifestyle.</p>
                        <p className='text-md sm:text-lg md:text-xl w-full md:w-[500px] lg:w-[700px] yellow text-center'>Alex, 12.04.24</p>
                    </div>
                </div>
                <div className='flex justify-center px-10 md:px-20 my-24 flex-wrap-reverse items-center'>
                    <div className='flex justify-center flex-col'>
                        <p className='text-md sm:text-lg md:text-xl w-full md:w-[500px] lg:w-[700px] text-justify'>It recommends workout routines that are challenging enough, manages breaks with a timer, has a clean UI, allows you to modify your workouts, and shares your workouts after you're done! It's a great workout app and I highly recommend it!</p>
                        <p className='text-md sm:text-lg md:text-xl w-full md:w-[500px] lg:w-[700px] yellow text-center'>Jamal, 29.03.24</p>
                    </div>
                    <img src={personone} alt='person' className='w-[150px] h-[150px] ml-5 mb-4'></img>
                </div>
            </section>

            <Footer />
        </div >
    );
}

export default Main;
