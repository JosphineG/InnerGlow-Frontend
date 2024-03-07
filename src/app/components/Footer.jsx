import React from "react";

function Footer() {
  return (
    <div className="w-full sticky bg-[#6495ED47]  p-6 gap-4 grid grid-cols-2 md:grid-cols-4">
      <div>
        <h3 className="font-bold text-lg">Contacts</h3>
        <p className="text-gray-600">Phone No: +254795256790</p>
        <p className="text-gray-600">Email : innergrow@gmail.com</p>
      </div>
      <div>
        <h3 className="font-bold text-lg text-center">Social links</h3>
        <div className="flex flex-col justify-center items-center text-gray-600">
          <span>In</span>
          <span>X</span>
          <span>IG</span>
          <span>FB</span>
        </div>
      </div>
      <div>
        <h3 className="font-bold text-lg mb-2">Leave a message here</h3>
        <form action="#" className=" grid gap-2">
          <div className="flex gap-4 mb-4">
            <input
              type="text"
              className="py-2 rounded-lg outline-none px-2"
              placeholder="Name"
              required={true}
            />
            <input
              type="email"
              className="py-2 rounded-lg outline-none px-2"
              required={true}
              placeholder="e.g email@gmail.com"
            />
          </div>
          <textarea
            name=""
            id=""
            className=" col-span-2  h-[80px] resize-none outline-none px-2 rounded-lg py-2"
            required={true}
            placeholder="message here!!"
          ></textarea>
          <button className=" font-semibold text-white py-2 bg-blue-500 rounded-lg w-[250px] hover:rounded-xl hover:bg-blue-400 hover:px-4">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Footer;
