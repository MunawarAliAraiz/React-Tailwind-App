import React, { useState } from "react";
import {Button} from "@material-tailwind/react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Form submitted:", formData);
    alert(`Form submitted!
    Name:${formData.name} 
    Email:${formData.email} 
    Message:${formData.message}`)
    // You may want to send the form data to a server or perform other actions
  };

  return (
    <div className="w-3/4 lg:px-24 my-8 p-2 bg-transparent rounded shadow-md">
      <h2 className="text-3xl lg:text-5xl font-bold text-green-700 mb-6">Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-200 font-medium mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-200 font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-200 font-medium mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows="4"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            required
          ></textarea>
        </div>

        <Button
          type="submit"
          varient="gradient"
          className="w-full hover:bg-white hover:text-black text-white p-3 rounded-md  focus:outline-none focus:shadow-outline-blue"
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
