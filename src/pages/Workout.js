import Footer from "../components/Footer"
import { Link } from 'react-router-dom'
import logo from '../images/Logo.png'
import { CiUser } from 'react-icons/ci';
import { CgAlbum, CgCalendarDates, CgLogOut } from 'react-icons/cg';
import workoutdata from '../components/workoutdata.js'
import { useState } from "react";
import videoimg from '../images/video.png'
import timerimg from '../images/timer.png'
import exerises from '../images/jogging--work-jogging.png'
function Workout() {


    const x = workoutdata.filter(item => item.name === sessionStorage.getItem("name"))
    const [youtubelink, setYoutubeLink] = useState("https://www.youtube.com/embed/" + x[0].videourl + "&mute=1&rel=0")
    const [spotifylink, setSpotifylink] = useState("https://open.spotify.com/embed/playlist/" + x[0].musicurl + "?utm_source=generator&theme=0")



    function searchlink() {
        let link = document.getElementById("youtubelink").value
        link = link.substr(16);
        setYoutubeLink("https://www.youtube.com/embed/" + link + "&mute=1&rel=0")
        document.getElementById("youtubelink").value = ''
    }
    function searchspotify() {
        let link = document.getElementById("spotifylink").value
        link = link.substr(34);
        console.log(link)
        setSpotifylink("https://open.spotify.com/embed/playlist/" + link + "?utm_source=generator&theme=0")
        document.getElementById("spotifylink").value = ''
    }
    const [video, setVideo] = useState(false);
    const [timer, setTimer] = useState(false);
    function videofunc() {
        setVideo(!video)
    }
    function timerfunc() {
        setTimer(!timer)
    }
    const [time, setTime] = useState(x[0].time * 60);
    function starttimer() {
        let timer = setInterval(() => {
            setTime((time) => {
                if (time === 0) {
                    clearInterval(timer);
                    setTime(0);
                } setTime(time - 1);
            });
        }, 1000);
    }



    return (
        <div className="text-white">
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
            <section className="mx-2 md:mx-[10%] ">
                {/* spotify */}
                <div className="my-5 ">
                    <div className="flex items-center">
                        <input type="text" placeholder="insert spotify playlist link" className="p-2 px-6 m-2" id="spotifylink"></input>
                        <button className="button m-2" onClick={searchspotify}>Search</button>
                    </div>
                    <iframe className="radius-md " title="spotify" src={spotifylink} width="100%" height="152" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                </div>
                {/*  */}
                <div className={(video || timer) ? "hide" : ""}>
                    <div className="relative choice">
                        <img src={videoimg} className="h-[45vh] md:h-[100vh] w-[65%]" alt="with video" onClick={videofunc}></img>
                        <img src={timerimg} className="absolute right-0 top-0 w-[65%] h-[45vh] md:h-[100vh]" alt="with timer" onClick={timerfunc}></img>
                    </div>
                </div>
                {/* youtube */}
                <div className={video ? "" : "hide"}>
                    <div className="flex flex-col items-center justify-center md:justify-between md:flex-row-reverse">
                        <div className="flex items-center">
                            <input type="text" placeholder="insert youtube video link" className="p-2 px-6 m-2 " id="youtubelink"></input>
                            <button className="button m-2" onClick={searchlink}>Search</button>
                        </div>
                    </div>
                    <div className="flex justify-center my-5">
                        <iframe className=" w-full aspect-video brightness-75" src={youtubelink}
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
                        </iframe>
                    </div>
                </div>



                <div className='border-b border-white pb-2 px-3'>
                    <h1 className="text-xl md:text-4xl">{x[0].name}</h1>
                    <div className='flex justify-between items-center'> <p className='text-md text-[rgba(204,202,202,0.5)]'>{x[0].level} | {x[0].equipment} </p> </div>
                </div>
                <p className='p-3'>{x[0].about}</p>

                <div className={timer ? "" : "hide"}>

                    <div className="text-xl md:text-4xl text-bold yellow text-right">
                        <button className="button m-2" onClick={starttimer}>Start timer</button>
                        Timer {`${Math.floor(time / 60)}`.padStart(2, 0)}:
                        {`${time % 60}`.padStart(2, 0)}</div>

                    <div className="flex my-5">
                        <img src={exerises} alt="exerises"></img>
                        <div className=' pb-2 px-3'>
                            <h1 className="text-xl md:text-4xl">Stationary lunge</h1>
                            <div className='flex justify-between items-center border-b border-white'> <p className='text-md text-[rgba(204,202,202,0.5)]'> Dumbbells | <span className="yellow">16 x 3</span></p> </div>
                            <p className="max-h-[200px] overflow-y-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>
                    <div className="flex my-5">
                        <img src={exerises} alt="exerises"></img>
                        <div className=' pb-2 px-3'>
                            <h1 className="text-xl md:text-4xl">Stationary lunge</h1>
                            <div className='flex justify-between items-center border-b border-white'> <p className='text-md text-[rgba(204,202,202,0.5)]'> Dumbbells | <span className="yellow">16 x 3</span></p> </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}
export default Workout