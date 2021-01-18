export default function SignIn() {
    return (
        <div>
            {/* For Signup page */}

            <div className='md:px-20 md:pt-24 md:pb-20 px-2 pt-16 pb-12 flex flex-col md:flex-row justify-center items-center'>
                <div class='bg-gray-400 w-full md:max-w-sm h-px'></div>
                <h3 class='uppercase py-3 whitespace-nowrap px-12 block font-light tracking-wider'>Log In</h3>
                <div class='bg-gray-400 w-full md:max-w-sm h-px'></div>
            </div>

            <div class='flex justify-center items-center whitespace-nowrap px-4 pt-4 pb-10 md:px-16 lg:m-auto lg:max-w-4xl md:pt-0 md:pb-16'>

                 <form className=' w-full'>

                    <div className='flex py-7 flex-col lg:flex-row lg:items-center lg:justify-between'>
                        <label className='text-gray-900 py-3 lg:py-2 font-semibold tracking-wide'>Email</label>
                        <input class='border-gray-100 bg-gray-100 lg:mx-8 py-3 px-3 w-full max-w-lg rounded outline-none focus:bg-white border focus:border-purple-400 focus:text-gray-800' type='email' />
                    </div>
                    <div className='flex py-7 flex-col lg:flex-row lg:items-center lg:justify-between'>
                        <label className='text-gray-900 py-3 lg:py-2 font-semibold tracking-wide'>Password</label>
                        <input class='border-gray-100 bg-gray-100 lg:mx-8 py-3 px-3 w-full max-w-lg rounded outline-none focus:bg-white border focus:border-purple-400 focus:text-gray-800' type='password' placeholder='********' />
                    </div>
                    <div className='py-8'>
                        <button className='text-white font-semibold border hover:shadow-lg bg-purple-600 py-3 px-8 rounded-full'>Log In</button>
                    </div>
                </form>
            </div>

        </div>
    )
}