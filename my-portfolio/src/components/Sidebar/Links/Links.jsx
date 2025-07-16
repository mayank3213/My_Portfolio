import React from "react";
import {motion} from "framer-motion";

// Animation for white background
const variants = {

    open: {
        transition : {
            staggerChildren : 0.1,
        },
    },
    closed : {
        transition:{
            staggerChildren:0.05,
            staggerDirection:-1, // niche se upar jayega
        },
    },
};

// Animation for links/Buttons
const itemVariants = {

    open: {
        y:0,
        opacity:1,

    },
    closed : {
        y:50,
        opacity:0,
    },
};

const Links= () => {

    // Create a Array of list for Menu
    const items=["HomePage","Education","Portfolio","Projects","Contact"];

    return (
    <motion.div className="links" variants={variants}>

    {/* Map the items of the Array list for link and apply Animation into it using Frammer Motion */}
        {items.map((item) => (
            <motion.a 
                href={`#${item}`} 
                key={item} 
                variants={itemVariants} 
                // Jab hover karege tab bada hoga
                whileHover={{scale:1.1}} 

                // Jab Tap karege to size dec hoga
                whileTap={{scale:0.9 }}>

            {/* For display item */}
                {item} 
            </motion.a>
        ))}
    </motion.div>
    );
};

export default Links;