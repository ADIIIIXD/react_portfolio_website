import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-zinc-900 text-gray-400 flex flex-col justify-center items-center px-4 pt-20"
    >
      <div className="w-full flex flex-col items-center justify-center gap-4">
        <p className="w-full text-3xl font-bold md:text-4xl text-center">
          LET'S GET IN TOUCH!
        </p>
        <div className="w-96 border-[1px] border-pink-600"></div>
        <p className="text-[16px] font-semibold">
          Submit the form below or shoot me an email - vikaditya119@gmail.com
        </p>
      </div>
      <form
        method="POST"
        action="https://getform.io/f/pbnvelvb"
        className="flex flex-col max-w-[600px] w-full py-4"
      >
        <input
          className="bg-[#ccd6f6] p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
          type="text"
          placeholder="Name"
          name="name"
          required
        />
        <input
          className="my-4 p-3 bg-[#ccd6f6] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
          type="email"
          placeholder="Email"
          name="email"
          required
        />
        <textarea
          className="bg-[#ccd6f6] p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
          name="message"
          rows="5"
          placeholder="Message"
          required
        ></textarea>
        <button className="hover:bg-pink-600 text-white border-2 border-white rounded-md px-4 py-3 my-8 mx-auto flex items-center focus:outline-none focus:ring-2 focus:ring-blue-500">
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
