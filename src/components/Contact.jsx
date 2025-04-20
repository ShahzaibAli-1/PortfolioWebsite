import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FaLinkedin, FaFacebook, FaInstagram, FaGithub, FaKaggle } from "react-icons/fa";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

// Public Key: Lf2CqTiIeChvx7Wbh
// Template ID: template_ahkt35n
// Service ID: service_93f3jm2

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "JavaScript Mastery",
          from_email: form.email,
          to_email: "sujata@jsmastery.pro",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className='xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden'>
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        {/* 🌐 Social Media Icons & Links */}
        <div className='mb-6 flex flex-wrap gap-6 items-center'>
          <a
            href='https://www.linkedin.com/in/shahzaib-ali-khan-64511224b/'
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center gap-2 text-white hover:text-blue-400 transition duration-200'
          >
            <FaLinkedin size={20} /> LinkedIn
          </a>
          <a
            href='https://web.facebook.com/profile.php?id=100027147891995'
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center gap-2 text-white hover:text-blue-500 transition duration-200'
          >
            <FaFacebook size={20} /> Facebook
          </a>
          <a
            href='https://www.instagram.com/shahzaibali0798/'
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center gap-2 text-white hover:text-pink-400 transition duration-200'
          >
            <FaInstagram size={20} /> Instagram
          </a>
          <a
            href='https://github.com/ShahzaibAli-1'
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center gap-2 text-white hover:text-gray-400 transition duration-200'
          >
            <FaGithub size={20} /> GitHub
          </a>
          <a
            href='https://www.kaggle.com/shahzaibali1121'
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center gap-2 text-white hover:text-blue-300 transition duration-200'
          >
            <FaKaggle size={20} /> Kaggle
          </a>
        </div>

        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Shahzaib Ali</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
