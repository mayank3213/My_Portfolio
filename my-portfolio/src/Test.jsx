import {motion} from "framer-motion";
import { useState } from "react";

const Test= () => {

    // step-2

    const [open,setOpen]=useState(false);

    const variants={
        visible:{opacity:1,x:1000,transition:{duration:2,type:"spring",stiffness:200}},
        hidden:{opacity:0},
    }

    const items=['item1','item2','item3','item4'];

    // return (

    //     // step:- 1 basics
    //     <div className="course"> 
    //         <motion.div className="box"

    //         // method-1 > basicsa
    //         // initial={{opacity:0.5,scale:0.5}}
    //         // // animate={{opacity:1,scale:1,x:200,y:500}}
    //         // transition={{duration:2,delay:0}}
    //         // // whileHover={{opacity:1,scale:2}}
    //         // // whileTap={{opacity:1,scale:2}}
    //         // // whileDrag={{opacity:1,scale:2}}
    //         // whileInView={{opacity:1,scale:2}}
    //         // drag


    //         // method-2
    //         variants={variants}
    //         transition={{duration:2}}
    //         animate={open ? "visible" : "hidden"}

    //         ></motion.div>
    //         <button onClick={() => setOpen(prev => !prev)}> Click ME</button>
    //     </div>
    // )


    // method -3 
    return (

        <div className="course">
            <motion.ul initial="hidden" animate='visible' variants={variants}>
                {items.map((item)=> (
                    <motion.li key={item}>{item}</motion.li>
                ))}
            </motion.ul>
        </div>
    )
}

export default Test;