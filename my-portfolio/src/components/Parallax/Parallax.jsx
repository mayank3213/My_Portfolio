// import React from "react";
import { useRef } from "react";
import './Parallax.scss';
import {motion,useScroll,useTransform} from 'framer-motion';

const Parallax=({type}) =>{

    const ref =useRef()

    const {scrollYProgress} = useScroll( {
        target:ref,
        offset:["start start","end start"],// animation starts when the top of the target element reaches the top of the viewport
        // // animation ends when the top of the target element reaches the bottom of the viewport
    });

    const yBg=useTransform(scrollYProgress,[0,1],["0%","300%"]);
    const yText=useTransform(scrollYProgress,[0,1],["0%","500%"]);


    return(
        <div 
            className="parallax"
            ref={ref}
            style={{
                background:
                    type === "services" 
                    ? "linear-gradient(180deg,#111132,#0c0c1d)"
                    : "linear-gradient(180deg,#111132,#505064)",
            }}>

            <motion.h1 style={{y:yText}}> {type === "services" ? "TECHNICAL SKILLS" : "What I Did?" }</motion.h1>

            <motion.div className="mountains"></motion.div>
            <motion.div style={{y:yBg , backgroundImage: `url(${type === "services" ? "./planets.png" : "./sun.png"})`}} className="planetes" ></motion.div>
            <motion.div style={{x:yBg}} className="stars"></motion.div>
        </div>
    );
};

export default Parallax; 