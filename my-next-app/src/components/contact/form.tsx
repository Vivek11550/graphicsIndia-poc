"use client";
import React, { useState } from "react";
import { Send } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  location: string;
  budget: string;
  subject: string;
  message: string;
}

const Form: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    location: "",
    budget: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // 🔹 Log form data
    console.log("Form submitted:", formData);

    // 🔹 Reset form state
    setFormData({
      name: "",
      email: "",
      location: "",
      budget: "",
      subject: "",
      message: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-white py-12  lg:px-10 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center text-black py-5">
        Contact Us
      </h2>
      <div className="max-w-7xl mx-auto">
        <div className="bg-white flex flex-col lg:flex-row rounded-2xl shadow-xl overflow-hidden">
          {/* Map Section */}
          <div className="py-10 lg:w-1/2 p-5">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7566.098133653227!2d73.902134!3d18.5266847!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c1c1c0b70591%3A0x98e45a8c6fc2ce0f!2sGraphics%20India%20Online!5e0!3m2!1sen!2sin!4v1738571226171!5m2!1sen!2sin"
              width="100%"
              height="450"
              loading="lazy"
              className="rounded-lg shadow-md"
            ></iframe>
          </div>

          {/* Form Section */}
          <div className="p-8 lg:p-12 lg:w-1/2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                {[
                  { id: "name", label: "Name", type: "text", required: true },
                  {
                    id: "email",
                    label: "Email",
                    type: "email",
                    required: true,
                  },
                  {
                    id: "location",
                    label: "Location",
                    type: "text",
                    required: false,
                  },
                  {
                    id: "budget",
                    label: "Budget",
                    type: "text",
                    required: true,
                  },
                  {
                    id: "subject",
                    label: "Subject",
                    type: "text",
                    required: true,
                  },
                ].map(({ id, label, type, required }) => (
                  <div key={id} className="w-full">
                    <label
                      htmlFor={id}
                      className="block text-sm font-medium text-gray-700"
                    >
                      {label}
                      {required && <span className="text-purple-600">*</span>}
                    </label>
                    <input
          
                      type={type}
                      name={id}
                      id={id}
                      required={required}
                      value={formData[id as keyof FormData]}
                      onChange={handleChange}
                      className=" block w-full border-b-2 border-purple-500 focus:outline-none focus:border-purple-600 "
                    />
                  </div>
                ))}

                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Message<span className="text-purple-600">*</span>
                  </label>
                  <textarea
                    name="message"
                    id="message"
              
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-1 block w-full border-b-2 border-purple-500 focus:outline-none focus:border-blue-600 p-2"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                >
                  Submit <Send className="ml-2 h-4 w-4" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
