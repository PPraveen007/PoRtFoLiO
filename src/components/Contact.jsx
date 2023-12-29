import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submissionStatus, setSubmissionStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if all fields are filled before submitting
    if (formData.name && formData.email && formData.message) {
      try {
        const params = new URLSearchParams(formData);
        const response = await fetch("https://getform.io/f/bbf39f06-5af9-4b3c-905e-93fe90920493", {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: params,
        });

        console.log("Response from server:", response);
        console.log("Response body:", await response.text());

        if (response.ok) {
          setSubmissionStatus("success");
          console.log("Form submitted successfully!");
        } else {
          setSubmissionStatus("error");
          console.error("Form submission failed:", response.statusText);
        }
      } catch (error) {
        setSubmissionStatus("error");
        console.error("An error occurred during form submission:", error);
      }
    } else {
      setSubmissionStatus("emptyFields");
      alert("Please fill in all fields before submitting.");
    }
  };

  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">Submit the form below to get in touch with me... See you there</p>
        </div>

        <div className="flex justify-center items-center">
          <form
            onSubmit={handleSubmit}
            action="https://getform.io/f/bbf39f06-5af9-4b3c-905e-93fe90920493"
            method="POST"
            className="flex flex-col w-full md:w-1/2"
          >
            {submissionStatus === "success" && (
              <div className="text-green-500 mb-4">Request submitted successfully!</div>
            )}
            {submissionStatus === "error" && (
              <div className="text-red-500 mb-4">Form submission failed. Please try again.</div>
            )}
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              value={formData.message}
              onChange={handleChange}
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>

            <button
              type="submit"
              className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300"
            >
              Let's Connect
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
