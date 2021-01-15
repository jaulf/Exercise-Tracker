import {Link} from 'react-router-dom'
import chest from '../images/chest.png'
import coree from '../images/coree.png'
import squats from '../images/girly.gif'


export default function ListofExercises() {
    return (
        <div className='font-nuni'> 
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
                <h3 class='uppercase py-3 whitespace-nowrap px-12 block font-light tracking-wider'>Personal Exercises</h3>
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
                
                <Link to='/create-exercise' class='cursor-pointer bg-white flex flex-col justify-end h-auto rounded shadow-lg overflow-hidden '>
                    <div className='bg-gray-50 p-16 text-gray-800 flex items-center justify-center h-full '>
                        <svg className=' h-14' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                    </div>
                    <p className='p-4 font-light text-center'>Add custom workout routine</p>
                </Link>

                {/* Modal */}
                    <div class='hidden items-center justify-center inset-0 fixed z-10 w-full h-full overflow-auto bg-gray-500 bg-opacity-75' id='modal'>                    
                        <div class='overflow-auto px-3 w-full sm:max-w-md md:max-w-lg rounded-lg' id='modal-content'>

                            <div>
                                <div className='flex justify-between text-center text-white tracking-wider bg-purple-700 font-small sm:font-medium p-5 '>
                                    <p>Upper body Workouts</p>
                                    <p>3 of 15</p>
                                </div>
                            </div>

                            <div>
                                <ul class=''>
                                    <div className=' font-light '>
                                        <li className='flex bg-white justify-between items-center p-5'>
                                            <div className=''>
                                                <span>45 sec</span>
                                            </div>
                                            <p class=''>Jumping Jacks</p>
                                            <div class=' flex justify-end text-center'>
                                                <svg class='h-4 text-center' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            </div>
                                        </li>

                                        <li className='flex justify-between bg-purple-50 items-center p-5'>
                                            <div className=''>
                                                <span>15 sec</span>
                                            </div>
                                            <p class='text-xs tracking-wider'>REST</p>
                                            <div class=' flex justify-end text-center'>
                                                <p>-</p>
                                            </div>
                                        </li>
                                    </div>
                                    <div className=' font-light '>
                                        <li className='flex bg-white justify-between  items-center p-5'>
                                            <div className=''>
                                                <span>45 sec</span>
                                            </div>
                                            <p class=''>Push Ups</p>
                                            <div class=' flex justify-end text-center'>
                                                <svg class='h-4 text-center' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            </div>
                                        </li>

                                        <li className='flex justify-between bg-purple-50 items-center p-5'>
                                            <div className=''>
                                                <span>15 sec</span>
                                            </div>
                                            <p class='text-xs tracking-wider'>REST</p>
                                            <div class=' flex justify-end text-center'>
                                                <p>-</p>
                                            </div>
                                        </li>
                                    </div>
                                    <div className=' font-light '>
                                        <li className='flex bg-white justify-between  items-center p-5'>
                                            <div className=''>
                                                <span>45 sec</span>
                                            </div>
                                            <p class=''>Inclined Push-ups</p>
                                            <div class=' flex justify-end text-center'>
                                                <svg class='h-4 text-center' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            </div>
                                        </li>

                                        <li className='flex justify-between bg-purple-50 items-center p-5'>
                                            <div className=''>
                                                <span>15 sec</span>
                                            </div>
                                            <p class='text-xs tracking-wider'>REST</p>
                                            <div class=' flex justify-end text-center'>
                                                <p>-</p>
                                            </div>
                                        </li>
                                    </div>
                                </ul>
                                <div class='font-normal underline text-purple-500 bg-white p-5 flex justify-between'>
                                    <button className='hover:text-purple-700'>Pause</button>
                                    <button className='hover:text-purple-700'>Preview next</button>
                                    <button className='hover:text-purple-700'>Reset</button>
                                </div>
                            </div>

                        </div>

                    </div>   
                {/* end of modal  */}
            </div>
            
        </div>
    )
}