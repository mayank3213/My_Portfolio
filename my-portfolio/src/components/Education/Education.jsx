// import React from "react";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import './Education.scss';

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
            duration: 5,
            staggerChildren: 0.1,

        },
    },
};

const Education = () => {


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
                    <br /> Data Strucutres and Algorithms, Web Development.
                </p>
                {/* <p className="mobilep">
                    MERN STACK DEVELOPER
                </p> */}
                <hr />
            </motion.div>

            <motion.div className="titleContainer" variants={variants} >
                <div className="title">
                    {/* <img src='./people.webp' alt="" /> */}
                    <h1>
                        <motion.b whileHover={{ color: "orange" }}> Education</motion.b>
                    </h1>
                </div>
            </motion.div>

            <motion.div className="listContainer" variants={variants}>
                <motion.div className="box" whileHover={{ backgroundColor: "lightgray", color: "black" }}>

                    <h2>KIET Group Of Institutions, Ghaziabad</h2>
                    <p>B.Tech in Computer Science & Engineering
                    <h4>CGPA:- 7.6/10</h4></p>
                    {/* <button>Go</button> */}
                </motion.div>

                <motion.div className="box" whileHover={{ backgroundColor: "lightgray", color: "black" }}>

                    <h2>Lucknow Public School, Lucknow</h2>
                    <p>Central Board of Secondary Education, Class 10
                    <h4>Percentage:- 86.7 %</h4></p>
                    {/* <button>Go</button> */}
                </motion.div>

                <motion.div className="box" whileHover={{ backgroundColor: "lightgray", color: "black" }}>

                    <h2>Lucknow Public School, Lucknow</h2>
                    <p>Central Board of Secondary Education, Class 12
                    <h4>Percentage:- 78.2 %</h4></p>
                    {/* <button>Go</button> */}
                </motion.div>
            </motion.div>

            <motion.div className="titleContainer" variants={variants} >
                <div className="title">
                    {/* <img src='./people.webp' alt="" /> */}
                    <h1>
                        <motion.b whileHover={{ color: "orange" }}>Achievements</motion.b>
                    </h1>
                </div>
            </motion.div>

            <motion.div className="listContainer" variants={variants}>

                <motion.div className="box" whileHover={{ backgroundColor: "lightgray", color: "black" }}>

                    <h2>LeetCode</h2>
                    <p>Solved 170+ DSA problems on LeetCode.</p>
                    <button><a href="https://leetcode.com/u/Mayank968/">Visit Profile</a></button>
                </motion.div>
            </motion.div>
        </motion.div>


    );

};

export default Education;