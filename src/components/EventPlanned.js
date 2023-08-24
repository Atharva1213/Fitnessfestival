import React from 'react';
import video from '../vid.mp4';
import bg1 from '../Images/sp1.jpg';
import bg2 from '../Images/sp2.jpg';

export default function EventPlanned() {
    return (
        <div className='h-auto w-full bg-gradient-to-br from-pink-900 via-black to-black py-4'>
            <div className='flex flex-col items-center gap-4'>
                <h1 className='text-3xl lg:text-5xl font-semibold text-center mx-auto text-white'>
                    what are the EVENTS PLANNED ?
                </h1>
                <div className="h-[6px] bg-gradient-to-r from-orange-500 to-pink-600 w-[20%] lg:w-[15%]"></div>
            </div>
            <div className='grid grid-rows-3 gap-5 lg:px-6 py-4 lg:py-28'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 h-auto w-full'>
                    <div className='relative'>
                        <video className="object-cover h-80 w-full lg:h-full" autoPlay muted loop controls>
                            <source src={video} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div className='p-4 lg:p-10 m-auto flex flex-col gap-8 lg:gap-16'>
                        <h1 className='lg:text-4xl text-4xl text-white'>Surprise <span className='lg:text-6xl font-semibold text-pink-700 underline underline-offset-8 uppercase'>Saturdays</span></h1>
                        <p className='max-w-2xl text-lg font-medium text-white'>" Get ready to make your Saturdays even more special! We've planned exciting surprise activities for every working Saturday. Join us for fun-filled moments and memorable experiences that will make your weekends unforgettable! ".</p>
                    </div>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 h-auto w-full'>
                    <div className='order-2 lg:order-first p-4 lg:p-10 m-auto flex flex-col gap-8 lg:gap-16'>
                        <h1 className='g:text-4xl text-4xl text-white'>PCCOE <span className='lg:text-6xl font-semibold text-pink-700 underline underline-offset-8 uppercase'>olympics</span></h1>
                        <p className='max-w-2xl text-lg font-medium text-white'>" Get ready for an extraordinary sporting extravaganza! The PCCoE Olympics proudly presents a thrilling Multi-Sport Event, organized by the PCCoE Olympic Committee, open to all students and staff. Let's come together to celebrate sportsmanship, unity, and the joy of competition! ".</p>
                    </div>
                    <div className='bg-cover bg-center order-1 w-full h-80 lg:h-auto' style={{ backgroundImage: `url(${bg2})` }}></div>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 h-auto w-full'>
                    <div className='lg:order-last p-4 lg:p-10 m-auto flex flex-col gap-8 lg:gap-16'>
                        <h1 className='g:text-4xl text-4xl text-white'>Weekly <span className='lg:text-6xl font-semibold text-pink-700 underline underline-offset-8 uppercase'>Activities</span></h1>
                        <p className='max-w-2xl text-lg font-medium text-white'>" Embrace a week of wellness and energy! Join us for a dynamic lineup of activities, including invigorating yoga sessions, electrifying Zumba classes, and engaging sports club activities. Get ready to rejuvenate your body and spirit through a diverse range of weekly offerings! "</p>
                    </div>
                    <div className='order-first bg-cover bg-center w-full h-80 lg:h-auto' style={{ backgroundImage: `url(${bg1})` }}></div>
                </div>
            </div>
        </div>
    );
}
