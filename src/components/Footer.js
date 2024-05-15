function Footer() {
    return (

        <footer className='bg-[#F0FF42] py-5 px-10 md:px-25 text-[#181818] flex justify-center flex-wrap items-center sm:justify-between'>
            <ul className='w-1/3 min-w-48'>
                <li><a href='' className='underline hover:no-underline'>TOS</a></li>
                <li><a href='' className='underline hover:no-underline'>Rules</a></li>
                <li><a href='' className='underline hover:no-underline'>Something else</a></li>
                <li className='mt-4'><a href='' className='button black'>Begin Now!</a></li>
            </ul>
            <ul className='text-center w-1/3 min-w-48 mt-5'>
                <li><a href='' className='underline hover:no-underline'>ActiveLifeLOG</a></li>
                <li><a href='' className='underline hover:no-underline'>Planer</a></li>
                <li><a href='' className='underline hover:no-underline'>Tracker</a></li>
            </ul>
            <ul className='text-right w-1/3 min-w-48 mt-5'>
                <li>email@gmail.com</li>
                <li>+098 765 43 21</li>
                <li>Address 07, romewa st. 45</li>
                <li><a href='' className='underline hover:no-underline'>Designed and developed by Kulakovska Alina</a></li>
            </ul>
        </footer>
    )
}
export default Footer