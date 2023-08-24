import React, { useEffect } from 'react';
import bg from '../bg-img.jpg';
import { Offcanvas, Ripple, initTE } from 'tw-elements';

function Announcement() {
    const [numOfAnn, setNumOfAnn] = React.useState(0)
    const announcements = [
        {
            title: 'Cricket',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime ipsum recusandae exercitationem hic esse accusamus et quibusdam inventore repellendus harum?',
            link: '#',
        },
        {
            title: 'Walk-a-thon',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime ipsum recusandae exercitationem hic esse accusamus et quibusdam inventore repellendus harum?',
            link: '#',
        },
        {
            title: 'Cyclothon',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime ipsum recusandae exercitationem hic esse accusamus et quibusdam inventore repellendus harum?',
            link: '#',
        },
        {
            title: 'Basketball',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime ipsum recusandae exercitationem hic esse accusamus et quibusdam inventore repellendus harum?',
            link: '#',
        },
        {
            title: 'Badminton',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime ipsum recusandae exercitationem hic esse accusamus et quibusdam inventore repellendus harum?',
            link: '#',
        },
        

        
    ];
    useEffect(() => {
        initTE({ Offcanvas, Ripple });
        setNumOfAnn(announcements.length)

    }, [announcements.length]);

    return (
        <div className="bottom-3 right-4 lg:bottom-6 lg:right-14 fixed z-40">
            <button
                className="mr-1.5 inline-block rounded bg-primary p-2 lg:px-6 lg:pb-2 lg:pt-2.5 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] py-4 bg-[#ff0054]"
                type="button"
                data-te-offcanvas-toggle
                data-te-target="#offcanvasRight"
                aria-controls="offcanvasRight"
                data-te-ripple-init
                data-te-ripple-color="light"
            >
                <div className='flex z-20 items-center justify-center'>
                    <h1 className="text-xs lg:text-lg">📢</h1>
                    <h1>Announcement</h1>
                </div>
                <div className="btn-badge z-40 absolute rounded-full bg-white text-black py-0 px-2 -right-1 -top-2 border-white">{numOfAnn}</div>
            </button>

            <div
                className="w-full invisible fixed bottom-0 right-0 top-0 z-[2045] flex lg:w-96 max-w-full translate-x-full flex-col border-none bg-gray-900 bg-clip-padding text-neutral-700 shadow-sm outline-none transition duration-300 ease-in-out dark:bg-neutral-800 dark:text-neutral-200 [&[data-te-offcanvas-show]]:transform-none"
                tabIndex="-1"
                id="offcanvasRight"
                aria-labelledby="offcanvasRightLabel"
                data-te-offcanvas-init
            >
                <div className=" flex items-center justify-between p-4">
                    <h5
                        className="mb-0 font-bold text-lg leading-normal text-orange-600"
                        id="offcanvasRightLabel"
                    >
                        WHAT'S UPCOMING!
                    </h5>
                    <button
                        type="button"
                        className="box-content rounded-none border-none opacity-50 hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                        data-te-offcanvas-dismiss
                    >
                        <span
                            className="w-[1em] focus:opacity-100 disabled:pointer-events-none disabled:select-none disabled:opacity-25 [&.disabled]:pointer-events-none [&.disabled]:select-none [&.disabled]:opacity-25"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                className="h-8 w-8 text-orange-500"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </span>
                    </button>
                </div>
                <div className="offcanvas-body z-[1000] flex-grow overflow-y-auto p-8">
                    {announcements.map((announcement, index) => (
                        <div
                            key={index}
                            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 mb-8"
                        >
                            <a href={announcement.link}>
                                <img
                                    className="rounded-t-lg"
                                    src={bg}
                                    alt=""
                                />
                            </a>
                            <div className="p-5">
                                <a href={announcement.link}>
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                        {announcement.title}
                                    </h5>
                                </a>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                    {announcement.description}
                                </p>
                                <a
                                    href={announcement.link}
                                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-pink-600 rounded-lg hover:bg-purple-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                >
                                    Read more
                                    <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                    </svg>

                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Announcement;
