import React, { useState } from "react";
import Links from "./Links/Links";
import ToggleButton from "./ToggleButton/ToggleButton";
import {motion} from "framer-motion";
import './Sidebar.scss';

const Sidebar = () => {

    // use the useState for button is open or closed
    const [open,setOpen]=useState(false);

    // Create a animation for circle button
    const variants={

        // When it is open at that time circle rad is 1220px 
        open:{
            clipPath:"circle(1220px at 35px 35px)",
            transition:{
                type:"spring",
            }
        },
        closed:{
            clipPath:"circle(22px at 44px 43px)",
            transition:{
                delay:0.5,
                type:"spring",
                stiffness:400, // how smoothly it is move
                damping:40,
            }
        },
    };

    return (
    <motion.div className="sidebar" animate={open ? "open" : "closed"}>

        <motion.div className="bg" variants={variants}>
            <Links />
        </motion.div>
        <ToggleButton setOpen={setOpen} />
    </motion.div>
    );
};

export default Sidebar;