
import img3 from '../assets/Group.png'
import img4 from '../assets/Polygon 2.png'
export function Navbar() {

    return (
        <div className='p-4 pl-[190px] flex justify-between  shadow-md w-screen'>
            <div className=' flex flex-row '>

                <div className='flex flex-row justify-between items-center '>
                    {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg> */}

                    <p className='text-black text-2xl font-semibold mx-2'>Payouts</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" w-4 h-4 mx-2 text-slate-400">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                    </svg>


                    <p className='text-gray-400 text-xs'>How it works</p>


                </div>
            </div>

            <div className='flex items-center bg-gray-200  rounded-md px-2'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" className='w-4 h-4 rounded-full bg-gray-200 text-gray-500' stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>


                <input type="text" placeholder="Search features,tutorials,etc" className='px-2 bg-gray-200 text-white rounded-full focus:outline-none w-80 ' />
            </div>

            <div className='flex flex-row'>
                <button className=' bg-gray-200 p-2 rounded-full mx-2'><img src={img3} alt="" /></button>
                <button className=' bg-gray-200 p-2 rounded-full mx-2'><img src={img4} alt="" /></button>
            </div>
        </div>
    )
}