// import React from 'react'
import { Carousel } from "flowbite-react";

import group1 from "../Images/Group1.jpg";
import group2 from "../Images/Group2.jpg";
import group3 from "../Images/Group3.jpg";
import face1 from "../Images/face1.jpg";
import face2 from "../Images/face2.jpg";
import face3 from "../Images/face3.jpg";

const carousel1Images = [group1, group2, group3];
const carousel2Data = [
    {
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam praesentium quia aliquam libero. Voluptatem qui enim numquam obcaecati amet dolores placeat ex explicabo quod libero. Sapiente quaerat, ea rerum saepe officiis unde iusto itaque quas eum reiciendis, ullam nisi veniam.',
        image: face2,
        name: "Name 1",
        position: "Position 1",
    },
    {
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam praesentium quia aliquam libero. Voluptatem qui enim numquam obcaecati amet dolores placeat ex explicabo quod libero. Sapiente quaerat, ea rerum saepe officiis unde iusto itaque quas eum reiciendis, ullam nisi veniam.",
        image: face1,
        name: "Name 2",
        position: "Position 2",
    },
    {
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam praesentium quia aliquam libero. Voluptatem qui enim numquam obcaecati amet dolores placeat ex explicabo quod libero. Sapiente quaerat, ea rerum saepe officiis unde iusto itaque quas eum reiciendis, ullam nisi veniam.",
        image: face3,
        name: "Name 3",
        position: "Position 3",
    },
];

function TaskForce() {
    return (
        <div className="bg-gradient-to-br from-pink-700 via-black to-black py-10 px-4">
            <div className="flex flex-col items-center gap-2">
                <h1 className="text-5xl text-center font-bannerFont2 text-white">Taskforce</h1>
                <div className="h-[5px] bg-gradient-to-r from-orange-500 to-pink-600 w-[20%] lg:w-[5%]"></div>
            </div>
            <div className="h-[100vh] flex flex-col gap-4 lg:flex-row justify-around mt-20">
                <div className="h-[55%] xl:h-[60%] w-full lg:w-[45%] ">
                    <Carousel slideInterval={2000}>
                        {carousel1Images.map((image, index) => (
                            <div
                                key={index}
                                className="h-[100%] w-[100%] bg-cover bg-center"
                                style={{ backgroundImage: `url(${image})` }}
                            ></div>
                        ))}
                    </Carousel>
                </div>

                <div className="right-car h-[55%] xl:h-[60%] w-full lg:w-[45%] ">
                    <Carousel slideInterval={2000} className="border-8 border-orange-600 ">
                        {carousel2Data.map((item, index) => (
                            <div key={index} className="flex h-full items-center justify-center">
                                <div className=" text-gray-500 text-center w-[90%] md:w-[80%] lg:w-[70%]">
                                    <p className="text-white text-xs md:text-xl lg:text-base xl:text-xl font-bold">{item.text}</p>
                                    <div className="mt-4 h-1 w-[70%] bg-gray-300 ml-[15%]"></div>
                                    <div
                                        className="mt-4 h-[80px] w-[80px] md:h-[130px] md:w-[130px] lg:h-[100px] lg:w-[100px] xl:h-[120px] xl:w-[120px] ml-auto mr-auto rounded-[50%]  bg-cover bg-top"
                                        style={{ backgroundImage: `url(${item.image})` }}
                                    ></div>
                                    <p className="mt-4 text-sm md:text-xl lg:text-base xl:text-xl text-white">
                                        <span className="font-bold text-sm md:text-xl lg:text-lg text-orange-400">{item.name},</span>
                                        {item.position}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </Carousel>
                </div>
            </div>
        </div>
    );
}

export default TaskForce;
