import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
function Footer() {
  return (
    <footer
      id="contact"
      className="w-screen sticky bg-[#6495ED47]  p-6 gap-4 grid grid-cols-1 lg:grid-cols-3 space-y-2"
    >
      <div className="space-y-3">
        <h3 className="font-bold text-2xl text-gray-700">Contacts</h3>
        <p className="text-gray-600">
          <span className="font-semibold">Phone No:</span> +254795256790
        </p>
        <p className="text-gray-600">
          <span className="font-semibold">Email:</span> innerglow@gmail.com
        </p>
      </div>
      <div className="space-y-3">
        <h3 className="font-bold text-2xl text-gray-700 ">Social links</h3>
        <div className="flex  text-gray-600  gap-4">
          <span>
            <FaLinkedin className="w-8 h-8 hover:text-blue-500 transition-all duration-300 scale-105" />
          </span>
          <span>
            <FaTwitter className="w-8 h-8 hover:text-blue-500 transition-all duration-300 scale-105" />
          </span>
          <span>
            <FaInstagram className="w-8 h-8 hover:text-blue-500 transition-all duration-300 scale-105" />
          </span>
          <span>
            <FaFacebook className="w-8 h-8 hover:text-blue-500 transition-all duration-300 scale-105" />
          </span>
        </div>
      </div>
      <div className="w-full space-y-3">
        <h3 className="font-bold text-2xl text-gray-700 mb-2">
          Leave a message here
        </h3>
        <form action="#" className=" grid gap-2 w-full">
          <div className="flex gap-4 mb-4 w-full">
            <div className="w-full">
              <label htmlFor="name" className="font-semibold">
                Name
              </label>
              <input
                name="name"
                id="name"
                type="text"
                className="py-2 rounded-lg outline-none px-2 w-full border-2 border-gray-500"
                placeholder="Name..."
                required={true}
              />
            </div>
            <div className="w-full">
              <label htmlFor="email" className="font-semibold">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="py-2 rounded-lg outline-none px-2 w-full border-2 border-gray-500"
                required={true}
                placeholder="e.g email@gmail.com..."
              />
            </div>
          </div>
          <div className="w-full">
            <label htmlFor="message" className="font-bold">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="w-full h-[80px] resize-none outline-none px-2 rounded-lg py-2 border-2 border-gray-500"
              required={true}
              placeholder="message here..."
            ></textarea>
          </div>
          <button className=" font-semibold text-white py-2 bg-blue-500 rounded-lg w-[250px] hover:rounded-xl hover:bg-blue-400 hover:px-4 mt-4">
            Submit
          </button>
        </form>
      </div>
    </footer>
  );
}

export default Footer;
