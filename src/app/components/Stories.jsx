import React, { useEffect, useState } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { convertDateTime } from "../../../hooks/useDateTime";
import { FaUser } from "react-icons/fa";
const storys = [
  {
    _id: "66f04604a52867ac4b3bcd56",
    title: "My story",
    description:
      "<p>Sarah, a marketing manager at a fast-paced company, is feeling increasingly overwhelmed by her workload. She has multiple projects to manage, tight deadlines, and constant pressure to deliver. </p><p><br></p><p>The stress is affecting her health, causing her to lose sleep and struggle with focus at work. One day, she finds herself on the verge of burnout and realizes she needs to make a change.</p>",
    createdBy: "David",
    category: "Stress story",
    time: "2024-09-22T16:29:56.304Z",
  },
];

function Stories({ stories }) {
  console.log(stories);
  const [parse, setParse] = useState(null); // State to hold the parser function

  useEffect(() => {
    const loadParser = async () => {
      const { default: parser } = await import("html-react-parser");
      setParse(() => parser); // Set the parser function in state
    };

    loadParser();
  }, []);
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 5000,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoPlaySpeed: 0,
    focusOnSelect: true,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,

    responsive: [
      {
        breakpoint: 10009,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  //   const truncatedDescription =
  // stories?.description?.length > 100
  //   ? stories?.description?.slice(0, 80) + "..."
  //   : stories?.description;

  return (
    <div className="w-screen px-4 py-6 md:px-12 lg:px-20 bg-blue-200 md:mb-8">
      <Slider {...settings}>
        {stories?.map((story, index) => (
          <div
            key={index}
            className="shadow-3xl shadow-black justify-center items-center flex text-black p-1"
          >
            <div className="bg-white px-6 py-6 rounded-2xl flex flex-row items-start justify-start space-x-4 mx-2 ">
              <div>
                <p className="w-full text-black  font-semibold">
                  {story.title}
                </p>
                <p>{convertDateTime(story?.time)}</p>
                <div className="px-2 py-2 overflow-x-clip mt-4">
                  <span>
                    {parse(story?.description?.slice(0, 150) + "...")}
                  </span>
                  <span className="text-blue-500 font-semibold py-2 text-md">
                    <a href={`/community/story/${story?._id}`}>Read more</a>
                  </span>
                </div>
                <p className="font-semibold text-gray-700 text-lg ml-2 mt-8 flex flex-row items-center gap-2">
                  <FaUser /> {story.createdBy}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Stories;
