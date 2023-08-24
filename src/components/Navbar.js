import React from 'react'

export default function Navbar() {
    const [showAboutUsDropdown, setShowAboutUsDropdown] = React.useState(false);

    const handleAboutUsHover = () => {
        setShowAboutUsDropdown(true);
    };

    const handleAboutUsLeave = () => {
        setShowAboutUsDropdown(false);
    };
    return (
        <div className="navbar text-white flex justify-between px-20 py-8 font-bannerfont font-semibold text-lg">
            <ul className="tagline bg-[#ff0054] ">
                <h2 className='tag py-5 px-5 text-white'><span className='text-2xl'>--</span> Commit To Be Fit.</h2>
                <ul className='icon hidden'>
                    Icon
                </ul>
            </ul>
            <ul className='nav-items flex w-[36rem] bg-slate-900/60 text-white rounded-sm border border-1 border-[#F94C10]' >
                <li className='py-5 px-8 w-[9rem] text-center hover:bg-[#ff0054] hover:cursor-pointer transition duration-400'>Home</li>
                <li
                    className='relative group py-5 px-8 w-[9rem] hover:bg-[#F94C10] hover:cursor-pointer transition duration-400'
                    onMouseEnter={handleAboutUsHover}
                    onMouseLeave={handleAboutUsLeave}
                >
                    About Us
                    {showAboutUsDropdown && (
                        <div className='absolute font-thin text-orange-600 mt-5 bg-black p-2 shadow-md left-0 w-[9rem]'>
                            <a href='/about/history' className='block py-1 px-2 hover:bg-gray-200 hover:text-black font-medium'>About</a>
                            <a href='/about/team' className='block py-1 px-2 hover:bg-gray-200 hover:text-black font-medium'>Taskforce</a>
                            <a href='/about/history' className='block py-1 px-2 hover:bg-gray-200 hover:text-black font-medium'>Why pfffy</a>
                            <a href='/about/history' className='block py-1 px-2 hover:bg-gray-200 hover:text-black font-medium'>Contact</a>
                        </div>
                    )}
                </li>
                <li className='py-5 px-8 w-[9rem] text-center hover:bg-[#ff0054] hover:cursor-pointer transition duration-400'>Calendar</li>
                <li className='py-5 px-8 w-[9rem] text-center hover:bg-[#F94C10] hover:cursor-pointer transition duration-400'>Contact Us</li>
            </ul>

        </div>
    )
}
