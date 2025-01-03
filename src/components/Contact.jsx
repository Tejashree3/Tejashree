import React, { useState } from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import Reveal from "./Reveal";

const Contact = () => {
  const [formStatus, setFormStatus] = useState(""); // Success/Error feedback

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    // Append access key
    formData.append("access_key", "6638bc21-e20c-44fc-a381-c94f19789fce");

    try {
      const object = Object.fromEntries(formData);
      const json = JSON.stringify(object);

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      }).then((res) => res.json());

      if (res.success) {
        setFormStatus("Message sent successfully!");
        event.target.reset(); // Reset form fields
      } else {
        setFormStatus("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setFormStatus("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="px-6 max-w-[1000px] mx-auto md:my-12" id="contact">
      <Reveal>
        <div className="grid md:grid-cols-2 place-items-center">
          <div>
            <div className="text-gray-300 my-3">
              <h3 className="text-4xl font-semibold mb-5">
                About <span>Me</span>
              </h3>
              <p className="text-justify leading-7 w-11/12 mx-auto">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                eos, quam vel quisquam, explicabo sit labore dignissimos optio
                ratione quibusdam doloribus pariatur consequuntur sint.
                Reprehenderit cupiditate possimus facere quasi voluptatem?
              </p>
            </div>

            <div className="flex mt-10 items-center gap-7">
              <div className="bg-gray-800/40 p-4 rounded-lg">
                <h3 className="md:text-4xl text-2xl font-semibold text-white">
                  8<span>+</span>
                </h3>
                <p className="text-xs md:text-base">
                  <span>Projects</span>
                </p>
              </div>

              <div className="bg-gray-800/40 p-5 rounded-lg">
                <h3 className="md:text-4xl text-2xl font-semibold text-white">
                  1<span></span>
                </h3>
                <p className="text-xs md:text-base">
                  <span>Years of Experience</span>
                </p>
              </div>

              {/* <div className="bg-gray-800/40 p-5 rounded-lg">
                <h3 className="md:text-4xl text-2xl font-semibold text-white">
                  30<span>+</span>
                </h3>
                <p className="text-xs md:text-base">
                  <span>Happy Clients</span>
                </p>
              </div> */}
            </div>
          </div>

          <form
            onSubmit={onSubmit}
            className="max-w-6xl p-5 md:p-12"
            id="form"
          >
            <p className="text-gray-100 font-bold text-xl mb-4">
              Let’s connect!
            </p>
            <input
              type="text"
              
              id="name"
              placeholder="Your Name ..."
              name="name"
              required
              className="mb-2 w-full rounded-md border border-primary py-2 pl-2 pr-4"
            />
            <input
              type="email"
              id="email"
              placeholder="Your Email ..."
              name="email"
              required
              className="mb-2 w-full rounded-md border border-primary py-2 pl-2 pr-4"
            />
              <input
              type="tel"
              id="mobile"
              placeholder="Your mobile ..."
              name="mobile"
              required
              className="mb-2 w-full rounded-md border border-primary py-2 pl-2 pr-4"
            />
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="4"
              placeholder="Your Message ..."
              required
              className="mb-2 w-full rounded-md border border-primary py-2 pl-2 pr-4"
            />
            <button
              type="submit"
              className="w-full py-3 rounded-md text-gray-100 font-semibold text-xl bg-primary-color"
            >
              Send Message
            </button>
            {formStatus && (
              <p className="mt-3 text-center text-gray-100">{formStatus}</p>
            )}
          </form>
        </div>
      </Reveal>
    </div>
  );
};

export default Contact;
