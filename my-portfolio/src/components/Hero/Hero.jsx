import React from "react";
import './Hero.scss';
import {motion} from 'framer-motion';

const textVariants={

    initial:{
        x:-500,
        opacity:0,
    },
    animate:{
        x:0,
        opacity:1,
        transition:{
            duration:2,
            staggerChildren:0.1,
        },
    },
    scrollButton : {
        opacity:0,
        y:10,
        transition:{
            duration:2,
            repeat:Infinity,
        },
    },
};

const slideVariants={

    initial:{
        x:0,
    },
    animate:{
        x:"-990%",
        transition:{
            repeat:Infinity,
            repeatType:"mirror",
            duration:20,
        },
    },
};

const Hero = () => {

    return (
        <div className="hero">
            <div className="wrapper">
                <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">

                    <motion.h2 variants={textVariants}>Hi I'm <span>Mayank Srivastava</span></motion.h2>
                    <motion.h1 variants={textVariants}>Software Developer</motion.h1>

                    <motion.div variants={textVariants} className="buttons">
                        <motion.button variants={textVariants}>
                        <a href="#Portfolio" >See the Latest Projects</a>
                        </motion.button>
                        <motion.button variants={textVariants}>
                        <a href="#Contact">Contact ME</a>
                        </motion.button>
                    </motion.div>

                    <motion.img  variants={textVariants} animate="scrollButton" src='/scroll.png' ></motion.img>

                </motion.div>
            </div>

            <motion.div className="slidingTextContainer" variants={slideVariants} initial='initial' animate='animate'>
                Front-End Developer
            </motion.div>

            <div className="imageContainer">
                <img src="./mayank.jpg" alt=" " />
            </div>
        </div>

    );
};

export default Hero;