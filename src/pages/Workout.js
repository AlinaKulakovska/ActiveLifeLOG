import Footer from "../components/Footer"
import { Link } from 'react-router-dom'
import logo from '../images/Logo.png'
import { CiUser } from 'react-icons/ci';
import { CgAlbum, CgCalendarDates, CgLogOut } from 'react-icons/cg';
import workoutdata from '../components/workoutdata.js'
import { useState } from "react";
function Workout() {

    // add timer 
    // spotify link
    // exersises list

    let x = workoutdata.filter(item => item.name === sessionStorage.getItem("name"))
    const [youtubelink, setYoutubeLink] = useState("https://www.youtube.com/embed/" + x[0].videourl + "&mute=1&rel=0")
    function searchlink() {
        let link = document.getElementById("youtubelink").value
        setYoutubeLink("https://www.youtube.com/embed/" + link + "&mute=1&rel=0")
        document.getElementById("youtubelink").value = ''
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
                <div className="my-5">
                    <input type="text" placeholder="insert spotify playlist link" className="p-2 px-6 mb-2" id="spotifylink"></input>
                    <iframe className="radius-md " title="spotify" src="https://open.spotify.com/embed/playlist/37i9dQZF1DX3oM43CtKnRV?utm_source=generator&theme=0" width="100%" height="152" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                </div>
                <div className="flex flex-col items-center justify-center md:justify-between md:flex-row-reverse">
                    <div className="text-2xl md:text-4xl text-[#F0FF42] text-right font-bold">Timer 23:32</div>
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
                <div className='border-b border-white pb-2 px-3'>
                    <h1 className="text-xl md:text-4xl">{x[0].name}</h1>
                    <div className='flex justify-between items-center'> <p className='text-md text-[rgba(204,202,202,0.5)]'>{x[0].level} | {x[0].equipment} </p> </div>
                </div>
                <p className='p-3'>{x[0].about}</p>
            </section>
            <Footer />
        </div>
    )
}
export default Workout