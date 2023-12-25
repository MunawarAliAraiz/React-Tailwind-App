import React, { useState } from "react";
import {Button} from "@material-tailwind/react";

const ContactDetails = () => {
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
      <h2 className="text-3xl lg:text-5xl font-bold text-green-700 mb-6">Contact Details</h2>
      <div className="text-gray-200 font-bold text-2xl" >
        <div className="flex items-center mb-4 gap-x-3">
          <p>Name:</p>
          <span className="font-normal">New Group Capital</span>
        </div>

        <div className="flex justify-start mb-4 gap-x-3">
          <p>Email:</p>
          <span className="font-normal">help@newgroupcapital.com</span>
        </div>

        <div className="flex justify-start mb-4 gap-x-3">
          <p>Contact:</p>
          <span className="font-normal">+917 7891 9191 9191</span>
        </div>

        <div className="flex justify-start mb-4 gap-x-3">
          <p>Address:</p>
          <span className="font-normal">Main St New York, 26</span>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
