import { useRef, useState } from "react";
import "./Contacts.scss";
import { motion, useInView } from "framer-motion";
import emailjs from '@emailjs/browser';

const variants = {
    initial: {
        y: 500,
        opacity: 0,
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            staggerChildren: 0.1,
        },
    },
};

const Contacts = () => {
    const ref = useRef();
    const formRef = useRef();
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);

    const isInView = useInView(ref, { margin: "-100px" });

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_xk1ag7k', 'template_8f9eqep', formRef.current, {
            publicKey: 'MmXhykZxROzG1jm47',
        }).then(
            () => setSuccess(true),
            () => setError(true)
        );
    };

    return (
        <motion.div
            ref={ref}
            className="contact"
            variants={variants}
            initial="initial"
            whileInView="animate"
        >
            <motion.div className="textContainer" variants={variants}>
                <motion.h1 variants={variants}>Let's Work Together</motion.h1>
                <motion.div className="item" variants={variants}>
                    <h2>Name</h2>
                    <span>Mayank Srivastava</span>
                </motion.div>
                <motion.div className="item" variants={variants}>
                    <h2>Email Id</h2>
                    <span>srivastavamayank321@gmail.com</span>
                </motion.div>
                <motion.div className="item" variants={variants}>
                    <h2>Phone</h2>
                    <span>+91 9682002868</span>
                </motion.div>

                <div className="icons">
                    <a href='https://www.linkedin.com/in/mayank-srivastava-906b64248/'><img src='./linkedin.png' alt="LinkedIn" /></a>
                    <a href='https://www.codechef.com/'><img src='/codechef.png' style={{ backgroundColor: 'white' }} alt="CodeChef" /></a>
                    <a href='https://github.com/mayank3213' style={{ backgroundColor: 'white', paddingTop: '0.30px', height: '18px' }}><img src='/github.png' alt="GitHub" /></a>
                    <a href='#'><img src='/instagram.png' alt="Instagram" /></a>
                    <a href='https://leetcode.com/u/Mayank968/'><img src='/leetcode.png' style={{ backgroundColor: 'white' }} alt="LeetCode" /></a>
                </div>
            </motion.div>

            <div className="formContainer">
                <motion.div
                    className="phoneSvg"
                    initial={{ opacity: 1 }}
                    whileInView={{ opacity: 0 }}
                    transition={{ delay: 2, duration: 1 }}
                >
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g>
                            <motion.path
                                strokeWidth={1.5}
                                fill="none"
                                initial={{ pathLength: 0 }}
                                animate={isInView ? { pathLength: 2 } : {}}
                                transition={{ duration: 2 }}
                                d="M13.5 2C13.5 2 15.8335 2.21213 18.8033 5.18198C21.7731 8.15183 21.9853 10.4853 21.9853 10.4853"
                                stroke="#ff2600"
                                strokeLinecap="round"
                            />
                            <motion.path
                                strokeWidth={1.5}
                                fill="none"
                                initial={{ pathLength: 0 }}
                                animate={isInView ? { pathLength: 1 } : {}}
                                transition={{ duration: 2 }}
                                d="M14.207 5.53564C14.207 5.53564 15.197 5.81849 16.6819 7.30341C18.1668 8.78834 18.4497 9.77829 18.4497 9.77829"
                                stroke="#ff2600"
                                strokeLinecap="round"
                            />
                        </g>
                    </svg>
                </motion.div>

                <motion.form
                    ref={formRef}
                    onSubmit={sendEmail}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 2, duration: 2 }}
                >
                    <input type="text" required placeholder="Name" name="name" />
                    <input type="email" required placeholder="Email" name="email" />
                    <textarea rows={8} placeholder="Message" name="message" />
                    <button>Submit</button>
                    {error && "Error"}
                    {success && "Success"}
                </motion.form>
            </div>
        </motion.div>
    );
};

export default Contacts;
