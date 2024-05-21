
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

import {  signOut } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { signInWithEmailAndPassword,createUserWithEmailAndPassword } from 'firebase/auth';
function Main() {


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

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [hide, setHide] = useState(true);
    const [logined, setLoginedx] = useState(false);

    const loginfunc = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                setLoginedx(true)
                console.log(logined)
                setHide(true)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorCode, errorMessage)
            });
        // const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;        
    }

    const signupfunc = async  (e) => {
        e.preventDefault();
        await createUserWithEmailAndPassword(auth, email, password)

            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                setLoginedx(true)
                setHide(true)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorCode, errorMessage)
            });      
    }

    const handleLogout = () => {               
        signOut(auth).then(() => {
        // Sign-out successful.
        setLoginedx(false)
            console.log("Signed out successfully")
            console.log(logined)
        }).catch((error) => {
        // An error happened.
        console.log(error)
        });
    }

    return (
        <div className="App text-white">

            <div className={hide ? "hide" : ""}>

                <form className='fixed py-12 px-4 md:py-24 md:px-48 z-30 ' id='login'>
                    <div className='text-[#F0FF42] absolute top-5 right-5 text-2xl' onClick={() => setHide(!hide)}><CgClose /></div>
                    <div  className='flex flex-col'>
                        <label htmlFor="email-address" className='text-md md:text-lg'>Email address</label>
                        <input
                            id="email-address"
                            name="email"
                            type="email"
                            required
                            placeholder="Email address"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="password" className='text-md md:text-lg'> Password</label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            required
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div>
                        <button className='button mt-5' onClick={loginfunc}>
                            Login
                        </button>
                        <button className='button mt-5 mx-5' onClick={signupfunc}>
                            signup
                        </button>
                    </div>
                </form>
            </div>

            <section className='hero'>
                <div className='nav py-2 px-10 flex justify-between w-full  items-center'>
                    <Link to='/' >  <div>
                        <img src={logo} className='w-24 md:w-48' alt="logo"></img>
                    </div></Link>
                    <div className='flex items-center relative text-2xl md:text-3xl lg:text-5xl'>
                        {logined ? <div className='flex'>
                            <Link to='/plan' className='flex items-center '><CgAlbum />Plan</Link>
                            <Link to='/tracker' className='flex items-center'><CgCalendarDates /> Tracker</Link>
                            <Link to='/' className='flex items-center'  onClick={handleLogout}><CgLogOut/> LogOut</Link>
                        </div> : ''}
                        <div >
                            {logined ?  "" : <CiLogin className='text-2xl md:text-4xl lg:text-6xl hover:cursor-pointer' onClick={() => setHide(!hide)} />}
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
