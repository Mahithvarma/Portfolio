import React, {useState} from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";
import { useSpring, animated } from "@react-spring/web";
import toast, { Toaster } from 'react-hot-toast';
import sendMail from "../utils/sendMail";

const quotes = [
  "The best way to predict the future is to create it. - Peter Drucker",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
  "The only limit to our realization of tomorrow is our doubts of today. - Franklin D. Roosevelt",
  "Do not wait to strike till the iron is hot, but make it hot by striking. - William Butler Yeats",
  "The only way to do great work is to love what you do. - Steve Jobs",
];

const ContactSection = () => {
  const [index, setIndex] = React.useState(0);

  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    reset: true,
    reverse: true,
    config: { duration: 3000 },
    onRest: () => setIndex((index + 1) % quotes.length),
  });

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleMsg = async (e) => {
        e.preventDefault();

        if(!name || !email || !message){
            toast.error('Please fill all the fields');
            return;
        }

        const mailPromise = sendMail(name, email, message);

        toast.promise(mailPromise, {
            loading: 'Sending..',
            success: 'Message sent successfully',
            error: 'Something went wrong! Please try again later.',
          });
          

        setName('');
        setEmail('');
        setMessage('');
    }

  return (
    <div id="contact" className="pt-40 pb-20 bg-gray-100 h-fit-content">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center">Contact</h2>
        <div className="flex flex-row mx-40 justify-between space-y-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Name </h3>
            <p className="text-lg mb-8 text-gray-700">
              Mahith Varma Jampana
            </p>

            <h3 className="text-2xl font-bold mb-4">Email</h3>
            <p className="text-lg mb-8 text-gray-700">
               mahithjampana234@gmail.com
            </p>

            <p className="text-md mb-8 text-gray-700">
              Feel free to connect with me through the following platforms:
            </p>

            <div className="flex justify-center space-x-6 mb-12">
              <a
                href="https://github.com/Mahithvarma"
                target="_blank"
                className="text-gray-800 hover:text-gray-600 transition-colors transform transform-transform hover:scale-110 duration-300"
                aria-label="GitHub"
              >
                <FaGithub size={30} />
              </a>
              <a
                href="https://www.linkedin.com/in/j-m-s-d-varma/"
                target="_blank"
                className="text-gray-800 hover:text-blue-700 transition-colors transform transform-transform hover:scale-105 duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={30} />
              </a>
              <a
                href="https://www.instagram.com/mahith_varma04/"
                target="_blank"
                className="text-gray-800 hover:text-pink-500 transition-colors transform transform-transform hover:scale-105 duration-300"
                aria-label="Instagram"
              >
                <FaInstagram size={30} />
              </a>
              <a
                href="https://x.com/Mahithvarma004"
                target="_blank"
                className="text-gray-800 hover:text-blue-400 transition-colors transform transform-transform hover:scale-105 duration-300"
                aria-label="Twitter"
              >
                <FaTwitter size={30} />
              </a>
            </div>
          </div>
          <div className="w-1/3">
            <form onSubmit={handleMsg}>
                <div className="w-full mb-6 flex flex-col space-y-4">
                    <input type="text" name="name" id="name" onChange={(e) => setName(e.target.value)} value={name} className="rounded text-sm p-2" placeholder="Name.."/>

                    <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)} value={email} className="rounded text-sm p-2" placeholder="Email.."/>

                    <textarea name="message" id="message" rows="5" onChange={(e) => setMessage(e.target.value)} value={message} className="rounded text-sm p-2" placeholder="Your Message..."/>
                    <button type="submit" className="bg-[#3f5bf3] w-1/3 mx-auto text-md text-white rounded py-2 transition duration-300 hover:bg-[#3449c9]">Submit</button>
                </div>
            </form>
          </div>
        </div>
        <animated.blockquote
              className="text-lg italic text-gray-600 mx-auto max-w-2xl mt-2 px-4 py-6 border-l-4 border-blue-500 bg-white shadow-lg rounded-lg"
              style={props}
            >
              {quotes[index]}
            </animated.blockquote>
      </div>
      <Toaster />
    </div>
  );
};

export default ContactSection;
