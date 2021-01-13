import {Link} from 'react-router-dom';

function displayNav() {

    var menu = document.getElementById('menu');
    var menu2 = document.getElementById('menu2');

      if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');menu2.classList.remove('hidden');
      } else {
        menu.classList.add('hidden');menu2.classList.add('hidden');
      }

}  

export default function Navbar() {

    return (
        <div>
            <nav className=' lg:px-20 lg:py-8 pr-2 pl-4 py-4 font-nuni lg:flex items-center lg:justify-between text-gray-800 '>
                <div className='flex justify-between text-2xl font-bold'>
                    <h1>Fitness Tempo</h1>
                    <div onClick={displayNav} class='px-4 cursor-pointer lg:hidden'>
                        <svg id='burger' class='w-6' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </div>
                </div>
                <ul id='menu' className='lg:uppercase lg:font-light lg:text-sm normal-case hidden lg:flex lg:flex-row text-base tracking-wider pt-4 px-8 lg:px-0'>
                    <li class='lg:px-11 lg:py-0  py-4 '>
                        <Link to='/' >Home</Link>
                    </li>
                    <li class='lg:px-11 lg:py-0  py-4 '>
                        <Link to='/create-exercise' >Create Exercise</Link>
                    </li>
                    <li class='lg:px-11 lg:py-0 py-4'>
                        <Link to='/' >Exercises</Link>
                    </li>
                </ul>
                <span id='menu2' class='hidden lg:flex'>
                {
                    function diss() {
                        if ( 1 == 2) {
                            return (
                                <ul className=' px-8 lg:flex items-center'>
                                    <li className=' font-semibold py-4 flex items-center lg:mx-3'>
                                        <svg className='w-7 hidden lg:block text-gray-500 lg:mx-1' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd" />
                                        </svg>
                                        <Link className='' to='/signin'>Log In</Link>
                                    </li>
                                    <li className=' font-semibold py-4 '> 
                                        <Link className='' to='/signup'>Sign up</Link>
                                    </li>
                                </ul>
                            )
                        } else {
                            return (
                                <ul className='px-6 py-4 lg:px-0 lg:py-0'>
                                <li className='flex lg:mx-3 items-center'>
                                    <svg className='w-7 text-gray-500 mx-1' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd" />
                                    </svg>
                                    <h5 className='font-semibold tracking-wide'>Howard Otuya</h5>
                                </li>
                                </ul>
                            )
                        }
                    }()
                }
                </span>
            </nav>
        </div>
    )
}