// import React from "react";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import './Services.scss';

const variants = {

    initial: {
        x: -500,
        y: 100,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        y: 0,
        trasition: {
            duration: 1,
            staggerChildren: 0.1,

        },
    },
};

const Services = () => {


    const ref = useRef()

    // Reference se agar margin -100px hoga tab animation start hoga
    const isInview = useInView(ref, { margin: "-100px" })

    return (
        <motion.div
            className="services"
            variants={variants}
            initial="initial"
            // whileInView="animate"
            ref={ref}
            animate={isInview && "animate"}
        // animate={"animate"}
        >

            <motion.div className="textContainer" variants={variants}>
                <p>
                    Aspiring Software Developer blending a passion for
                    <br /> Data Strucutres and Algorithms, Front-End Development.
                </p>
                {/* <p className="mobilep">
                    MERN STACK DEVELOPER
                </p> */}
                <hr />
            </motion.div>

            <motion.div className="titleContainer" variants={variants} >
                <div className="title">
                    <h1>
                        <motion.b whileHover={{ color: "orange" }}> Unique</motion.b> Ideas
                    </h1>
                </div>

                <div className="title">
                    <h1>
                        <motion.b whileHover={{ color: "orange" }}> For Your</motion.b> Business
                    </h1>
                    <button><a href="">Download Resume</a></button>
                </div>
            </motion.div>

            <motion.div className="listContainer" variants={variants}>
                <motion.div className="box" whileHover={{ backgroundColor: "lightgray", color: "black" }}>

                    <h2>Libraries</h2>
                    <p>Numpy, Pandas, Matplotlib</p>
                    {/* <button>Go</button> */}
                </motion.div>

                <motion.div className="box" whileHover={{ backgroundColor: "lightgray", color: "black" }}>

                    <h2>Programming Languages</h2>
                    <p>C/C++, Python, Java, HTML, CSS, Javascript</p>
                    {/* <button>Go</button> */}
                </motion.div>

                <motion.div className="box" whileHover={{ backgroundColor: "lightgray", color: "black" }}>

                    <h2>Web Technology</h2>
                    <p>ReactJS, MySQL</p>
                    {/* <button>Go</button> */}
                </motion.div>

                <motion.div className="box" whileHover={{ backgroundColor: "lightgray", color: "black" }}>

                    <h2>Relevent Coursework</h2>
                    <p>Data Structures & Algorithms, Operating Systems, Object Oriented Programming, Database Management System, Software Engineering</p>
                    {/* <button>Go</button> */}
                </motion.div>
                
            </motion.div>
        </motion.div>


    );

};

export default Services;