import {Link} from 'react-router-dom'
import chest from '../images/chest.png'
import coree from '../images/coree.png'
import squats from '../images/girly.gif'


export default function ListofExercises() {
    return (
        <div className=''> 
            {/* For Custom system exercises */}

            <div className='md:px-20 md:py-24 px-2 py-16 flex flex-col md:flex-row justify-center items-center'>
                <div class='bg-gray-400 w-full md:max-w-sm h-px'></div>
                <h3 class='uppercase py-3 whitespace-nowrap px-12 block font-light tracking-wider'>List of Exercises</h3>
                <div class='bg-gray-400 w-full md:max-w-sm h-px'></div>
            </div>


            <div class='grid lg:grid-cols-3 gap-10 pt-5 pb-10 px-5 sm:px-10 md:px-20 '>
                
               <div class='card '>
                    <img class=' shad w-full object-contain h-32 sm:h-48' src={chest} alt='chest workout' />
                    <div class='p-5'>
                        <h1 class='py-1 text-lg font-normal'>Upper body Workouts</h1>
                        <p class='py-2 font-light'>A special workout routine to give you a solid upper body.</p>
                        <div class='py-2 font-normal text-purple-500 underline cursor-pointer flex justify-between'>
                            <Link to='/#'>Begin</Link>
                            <Link to='/#'>Edit</Link>
                        </div>    
                    </div>
                    <div class='badge'>
                        <svg class='w-5 pr-1 inline-block' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>15 mins</span>
                    </div>
                </div> 
                <div class='card'>
                    <img class='w-full shad object-contain h-32 sm:h-48' src={coree} alt='chest workout' />
                    <div class='p-5'>
                        <h1 class='py-1 text-lg font-normal'>Extreme Abs Workout</h1>
                        <p class='py-2 font-light'>A special workout routine to give you a core and flat tummy.</p>
                        <div class='py-2 font-normal text-purple-500 underline cursor-pointer flex justify-between'>
                            <Link to='/#'>Begin</Link>
                            <Link to='/#'>Edit</Link>
                        </div>
                    </div>
                    <div class='badge'>
                        <svg class='w-5 pr-1 inline-block' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>10 mins</span>
                    </div>
                </div>
                <div class='card'>
                    <img class='w-full shad object-contain h-32 sm:h-48' src={squats} alt='chest workout' />
                    <div class='p-5'>
                        <h1 class='py-1 text-lg font-normal'>Lower body workouts</h1>
                        <p class='py-2 font-light'>A special workout routine to give you a solid lower body.</p>
                        <div class='py-2 font-normal text-purple-500 underline cursor-pointer flex justify-between'>
                            <Link to='/#'>Begin</Link>
                            <Link to='/#'>Edit</Link>
                        </div>
                    </div>
                    <div class='badge'>
                        <svg class='w-5 pr-1 inline-block' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>15 mins</span>
                    </div>
                </div>
            </div>

            {/* Section for the custom user exercises  */}

            <div className='md:px-20 md:py-24 px-2 py-16 flex flex-col md:flex-row justify-center items-center'>
                <div class='bg-gray-400 w-full md:max-w-sm h-px'></div>
                <h3 class='uppercase py-3 whitespace-nowrap px-12 block font-light tracking-wider'>Howard's personal Exercises</h3>
                <div class='bg-gray-400 w-full md:max-w-sm h-px'></div>
            </div>


            <div class='grid lg:grid-cols-3 gap-10 pt-5 pb-10 px-5 sm:px-10 md:px-20 '>
                
               {/* <div class='card '>
                    <img class=' shad w-full object-contain h-32 sm:h-48' src={chest} alt='chest workout' />
                    <div class='p-5'>
                        <h1 class='py-1 text-lg font-normal'>Upper body Workouts</h1>
                        <p class='py-2 font-light'>A special workout routine to give you a solid upper body.</p>
                        <div class='py-2 font-normal text-purple-500 underline cursor-pointer flex justify-between'>
                            <Link to='/#'>Begin</Link>
                            <Link to='/#'>Edit</Link>
                        </div>    
                    </div>
                    <div class='badge'>
                        <svg class='w-5 pr-1 inline-block' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>15 mins</span>
                    </div>
                </div> 
                <div class='card'>
                    <img class='w-full shad object-contain h-32 sm:h-48' src={coree} alt='chest workout' />
                    <div class='p-5'>
                        <h1 class='py-1 text-lg font-normal'>Extreme Abs Workout</h1>
                        <p class='py-2 font-light'>A special workout routine to give you a core and flat tummy.</p>
                        <div class='py-2 font-normal text-purple-500 underline cursor-pointer flex justify-between'>
                            <Link to='/#'>Begin</Link>
                            <Link to='/#'>Edit</Link>
                        </div>
                    </div>
                    <div class='badge'>
                        <svg class='w-5 pr-1 inline-block' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>10 mins</span>
                    </div>
                </div>
                <div class='card'>
                    <img class='w-full shad object-contain h-32 sm:h-48' src={squats} alt='chest workout' />
                    <div class='p-5'>
                        <h1 class='py-1 text-lg font-normal'>Lower body workouts</h1>
                        <p class='py-2 font-light'>A special workout routine to give you a solid lower body.</p>
                        <div class='py-2 font-normal text-purple-500 underline cursor-pointer flex justify-between'>
                            <Link to='/#'>Begin</Link>
                            <Link to='/#'>Edit</Link>
                        </div>
                    </div>
                    <div class='badge'>
                        <svg class='w-5 pr-1 inline-block' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>15 mins</span>
                    </div>
                </div> */}
                <Link to='/create-exercise' class='cursor-pointer bg-white flex flex-col justify-end h-auto rounded shadow-lg overflow-hidden '>
                    <div className='bg-gray-50 p-16 text-gray-800 flex items-center justify-center h-full '>
                        <svg className=' h-14' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                    </div>
                    <p className='p-4 font-light text-center'>Add custom workout routine</p>
                </Link>
            </div>
            
            

        </div>
    )
}