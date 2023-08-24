import React from 'react'

export default function Card(props) {
    return (
        <div className='shadow-md shadow-gray-400 hover:shadow-lg hover:shadow-gray-400 overflow-hidden card h-[24rem] w-[17rem] relative '>
            <div className="z-10 overflow-hidden badge absolute text-sm bg-orange-600 px-2 py-1 rounded-xl top-2 left-2 text-white first-line:font-bannerfont font-semibold">{props.status}</div>
            <img className={`card-top h-[48%] hover:scale-[1.1] transition duration-500 w-full ${props.cov} ${props.pos}`} src={props.cardImg} alt="" />
            <div className='overflow-hidden card-bottom h-[52%] w-full bg-black '>
                <div className="card-details pl-6 pt-6 pr-2">
                    <div className='flex gap-2'>
                        <h3 className='text-lg  text-white font-bannerfont '>{props.sportType}</h3>
                        <p> - {props.date}</p>
                    </div>
                    <h1 className='text-2xl text-pink-600 font-bannerfont font-bold h-16'>{props.competition}</h1>
                    <button className='border border-1 border-purple-700 py-1 px-2 mt-2 hover:bg-pink-600 hover:text-white hover:border-pink-600 bg-purple-700 transition duration-300'>Register</button>
                </div>
            </div>
        </div>
    )
}
