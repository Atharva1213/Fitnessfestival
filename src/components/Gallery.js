import React from "react";
import gallery1 from "../Images/gallery1.jpg";
import gallery2 from "../Images/gallery2.jpg";
import gallery3 from "../Images/gallery3.jpg";
import gallery4 from "../Images/gallery4.jpg";
import gallery5 from "../Images/gallery5.jpg";
import gallery6 from "../Images/gallery6.jpg";
import gallery7 from "../Images/gallery7.jpg";
import gallery8 from "../Images/gallery8.jpg";
// ... import other images

const galleryData = [
  {
    backgroundImage: gallery1,
    title: "Marathon - 27/08/2023 - 14:00 PM IST",
    venue: "Venue: Location",
    unHide : true
  },
  {
    backgroundImage: gallery2,
    title: "CrossFit - 27/08/2023 - 14:00 PM IST",
    venue: "Venue: Location",
  },
  {
    backgroundImage: gallery3,
    title: "Marathon - 27/08/2023 - 14:00 PM IST",
    venue: "Venue: Location",
  },
  {
    backgroundImage: gallery4,
    title: "CrossFit - 27/08/2023 - 14:00 PM IST",
    venue: "Venue: Location",
  },
  {
    backgroundImage: gallery5,
    title: "Marathon - 27/08/2023 - 14:00 PM IST",
    venue: "Venue: Location",
  },
  {
    backgroundImage: gallery6,
    title: "CrossFit - 27/08/2023 - 14:00 PM IST",
    venue: "Venue: Location",
  },
  {
    backgroundImage: gallery7,
    title: "Marathon - 27/08/2023 - 14:00 PM IST",
    venue: "Venue: Location",
  },
  {
    backgroundImage: gallery8,
    title: "CrossFit - 27/08/2023 - 14:00 PM IST",
    venue: "Venue: Location",
  },
  {
    backgroundImage: gallery1,
    title: "Marathon - 27/08/2023 - 14:00 PM IST",
    venue: "Venue: Location",
  },
  {
    backgroundImage: gallery2,
    title: "CrossFit - 27/08/2023 - 14:00 PM IST",
    venue: "Venue: Location",
  },
  {
    backgroundImage: gallery1,
    title: "Marathon - 27/08/2023 - 14:00 PM IST",
    venue: "Venue: Location",
  },
  {
    backgroundImage: gallery2,
    title: "CrossFit - 27/08/2023 - 14:00 PM IST",
    venue: "Venue: Location",
  },
];

function Gallery() {
  return (
    <div className="h-auto w-full grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-rows-3">
      {galleryData.map((item, index) => (
        item.unHide ? <div className="flex justify-center items-center h-[25vh] xl:h-[40vh] w-full bg-pink-900">
            <h1 className="xl:text-5xl p-4 text-center text-2xl font-medium font-bannerfont underline underline-offset-8 decoration-white text-white">GLIMPSES OF EVENTS</h1>
        </div> : 
        <div
          key={index}
          className="relative bg-cover bg-center h-[25vh] xl:h-[40vh] w-full"
          style={{ backgroundImage: `url(${item.backgroundImage})` }}
        >
          <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[#110e0e9d] opacity-0 transition duration-300 ease-in-out hover:opacity-100 text-center ">
            <p className="text-white text-center mx-auto text-xl mt-[25%]">{item.title}</p>
            <p className="text-white text-center mx-auto text-xl mt-4">{item.venue}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Gallery;
