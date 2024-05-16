import { Link } from 'react-router-dom'
import logo from '../images/Logo.png'
import victory from '../images/Victory.png'
import { CiUser } from 'react-icons/ci';
import { CgAlbum, CgCalendarDates, CgLogOut } from 'react-icons/cg';
import Footer from '../components/Footer.js';


function Tracker() {

// restrict accsess
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
            <div className="mt-6" >
                <Footer /></div>
        </div>
    )
}
export default Tracker