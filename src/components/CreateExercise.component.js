export default function CreateExercise() {

    return (
        <div class='font-nuni'>
            {/* For Create Exercise page */}

            <div className='md:px-20 md:py-24 px-2 py-16 flex flex-col md:flex-row justify-center items-center'>
                <div class='bg-gray-400 w-full md:max-w-sm h-px'></div>
                <h3 class='uppercase py-3 whitespace-nowrap px-12 block font-light tracking-wider'>Create Exercise</h3>
                <div class='bg-gray-400 w-full md:max-w-sm h-px'></div>
            </div>

             <div class='flex justify-center items-center whitespace-nowrap px-4 pt-4 md:px-16 lg:m-auto lg:max-w-5xl lg:py-16'>

                 <form className=' w-full'>

                    <div class='flex flex-col lg:flex-row lg:pb-10 lg:justify-between lg:items-center'>

                        <div className='flex py-7 lg:py-0 flex-col lg:flex-row lg:items-center lg:justify-between'>
                            <label className='text-gray-900 py-3 lg:py-2 font-semibold tracking-wide'>Name Of Workout Routine</label>
                            <input class='border border-gray-100 bg-gray-100 lg:mx-8 py-3 px-3 w-full max-w-lg rounded outline-none focus:bg-white border focus:border-purple-400 focus:text-gray-800' type='text' placeholder='Upper body Workout' />
                        </div>

                        <div className='flex py-7 lg:py-0 flex-col lg:flex-row lg:items-center lg:justify-between'>
                            <label className='text-gray-900 py-3 lg:py-2 font-semibold tracking-wide'>Category</label>
                            <select class='border border-gray-100 bg-gray-100 lg:mx-8 py-3 px-3 w-full max-w-lg rounded outline-none focus:bg-white border focus:border-purple-400 focus:text-gray-800' type='text' placeholder='Upper body Workout' >
                                <option>Category of your Workout</option>
                                <option>Upper body Workouts</option>
                                <option>Abs Workout</option>
                                <option>Lower body Workouts</option>
                                <option>Cardio</option>
                            </select>
                        </div>
                    </div>
                    <div className='flex py-7 lg:py-10 lg:pb-0 flex-col lg:flex-row lg:items-center lg:justify-between'>
                        <label className='text-gray-900 py-3 lg:py-2 font-semibold tracking-wide'>Description</label>
                        <textarea class='border border-gray-100 bg-gray-100 lg:mx-8 py-3 px-3 w-full rounded h-36 outline-none focus:bg-white border focus:border-purple-400 focus:text-gray-800' type='text' placeholder='A brief description about your workout...' />
                    </div>

                    <div className='lg:py-24 py-16'>

                        <div class='pt-7 pb-20 text-center'>
                            <h1 class='font-bold text-gray-900 text-xl'>Add Exercises</h1>
                        </div>

                        <div className='flex py-7 lg:py-0 flex-col lg:flex-row lg:items-center '>
                            <label className='text-gray-900 py-3 lg:py-2 font-semibold tracking-wide'>Name Of Exercise</label>
                            <input class='border border-gray-100 bg-gray-100 lg:mx-8 py-3 px-3 w-full max-w-lg rounded outline-none focus:bg-white border focus:border-purple-400 focus:text-gray-800' type='text' placeholder='Push Ups' />
                        </div>

                        <div class='flex flex-col lg:flex-row lg:pt-16 lg:justify-between lg:items-center'>
                        <div className='flex py-7 lg:py-0 flex-col lg:flex-row lg:items-center lg:justify-between'>
                            <label className='text-gray-900 py-3 lg:py-2 font-semibold tracking-wide'>How long for this exercise</label>
                            <select class='border border-gray-100 bg-gray-100 lg:mx-8 py-3 px-3 w-full max-w-lg rounded outline-none focus:bg-white border focus:border-purple-400 focus:text-gray-800' type='text' placeholder='Upper body Workout' >
                                <option>15 secs</option>
                                <option>30 secs</option>
                                <option>45 secs (recommended)</option>
                                <option>1 mins</option>
                                <option>1:15 mins</option>
                                <option>1:30 mins</option>
                                <option>1:45 mins</option>
                                <option>2 mins</option>
                                <option>3 mins</option>
                                <option>4 mins</option>
                                <option>5 min</option>
                            </select>
                        </div>
                        <div className='flex py-7 lg:py-0 flex-col lg:flex-row lg:items-center lg:justify-between'>
                            <label className='text-gray-900 py-3 lg:py-2 font-semibold tracking-wide'>How long do you want to rest for</label>
                            <select class='border border-gray-100 bg-gray-100 lg:mx-8 py-3 px-3 w-full max-w-lg rounded outline-none focus:bg-white focus:border-purple-400 focus:text-gray-800' type='text' placeholder='Upper body Workout' >
                                <option>15 secs</option>
                                <option>20 secs (recommended)</option>
                                <option>30 secs</option>
                                <option>45 secs</option>
                                <option>1 mins</option>
                                <option>1:15 mins</option>
                                <option>1:30 mins</option>
                                <option>1:45 mins</option>
                            </select>
                        </div>
                    </div>

                    </div>

                    <div>
                        <button className='text-white font-semibold border hover:shadow-lg bg-purple-600 py-3 px-8 rounded-full'>Add to List</button>
                    </div>
        
                    <div className='lg:py-24 py-16'>

                        <div class='pt-7 pb-24 text-center'>
                            <h1 class='font-bold text-gray-900 text-xl'>List Of Exercises</h1>
                        </div>
                        
                        <div class=' shadow-lg rounded-md w-full max-w-5xl'>

                        <div class='border-gray-100 border-t px-2 py-4 lg:p-6 flex items-center justify-between'>
                                <div class=''>
                                    <p className='flex justify-center items-center bg-purple-600 text-white h-7 w-7 md:h-10 md:w-10 rounded-full'>1</p>
                                </div>
                                <div class=''>
                                    <p className='py-2 md:font-semibold'>Push Ups</p>
                                    <div className='py-2 tracking-wide md:tracking-wider text-purple-600 flex flex-col md:flex-row'>
                                        <p className='py-1 md:py-0 md:pr-6'>45secs exercise duration</p>
                                        <p className='py-1 md:py-0 md:px-6'>15secs rest duration</p>
                                    </div>
                                </div>
                                <div class=''>
                                    <p className='flex lg:hidden justify-center items-center bg-red-600 text-white h-7 w-7 md:h-10 md:w-10 rounded-full'>
                                    <svg class='h-5' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg></p>
                                    <p className='hidden lg:block bg-red-600 text-white rounded-full px-6 py-3'>Cancel</p>
                                </div>
                            </div>
                            <div class='border-gray-100 border-t px-2 py-4 lg:p-6 flex items-center justify-between'>
                                <div class=''>
                                    <p className='flex justify-center items-center bg-purple-600 text-white h-7 w-7 md:h-10 md:w-10 rounded-full'>2</p>
                                </div>
                                <div class=''>
                                    <p className='py-2 md:font-semibold'>Pull Ups</p>
                                    <div className='py-2 tracking-wide md:tracking-wider text-purple-600 flex flex-col md:flex-row'>
                                        <p className='py-1 md:py-0 md:pr-6'>45secs exercise duration</p>
                                        <p className='py-1 md:py-0 md:px-6'>15secs rest duration</p>
                                    </div>
                                </div>
                                <div class=''> 
                                    <p className='flex lg:hidden justify-center items-center bg-red-600 text-white h-7 w-7 md:h-10 md:w-10 rounded-full'>
                                    <svg class='h-5' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg></p>
                                    <p className='hidden lg:block bg-red-600 text-white rounded-full px-6 py-3'>Cancel</p>
                                </div>
                            </div>
                            <div class='border-gray-100 border-t px-2 py-4 lg:p-6 flex items-center justify-between'>
                                <div class=''>
                                    <p className='flex justify-center items-center bg-purple-600 text-white h-7 w-7 md:h-10 md:w-10 rounded-full'>3</p>
                                </div>
                                <div class=''>
                                    <p className='py-2 md:font-semibold'>Mountain Climbers</p>
                                    <div className='py-2 tracking-wide md:tracking-wider text-purple-600 flex flex-col md:flex-row'>
                                        <p className='py-1 md:py-0 md:pr-6'>45secs exercise duration</p>
                                        <p className='py-1 md:py-0 md:px-6'>15secs rest duration</p>
                                    </div>
                                </div>
                                <div class=''>
                                    <p className='flex lg:hidden justify-center items-center bg-red-600 text-white h-7 w-7 md:h-10 md:w-10 rounded-full'>
                                    <svg class='h-5' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg></p>
                                    <p className='hidden lg:block bg-red-600 text-white rounded-full px-6 py-3'>Cancel</p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div>
                        <button className='flex items-center text-white font-semibold border hover:shadow-lg bg-purple-600 py-3 px-8 rounded-full'>
                            Done 
                            <svg className='pl-3 h-5' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                            </svg></button>
                    </div>

                 </form>

             </div>

        </div>
    )

} 