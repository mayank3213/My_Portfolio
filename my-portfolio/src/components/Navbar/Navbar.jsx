import Sidebar from '../Sidebar/Sidebar';
import './Navbar.scss';
import {motion } from "framer-motion";

const Navbar = () => {
    return (
        <div className='navbar'>
            {/* sidebar  below imported*/}
            <Sidebar />

            <div className='wrapper'>
                {/* <span>Mayank Srivastava</span> */}

                {/* Below is the transition effect of the logo using frammer motion */}
                <motion.span 
                    initial={{opacity:0,scale:0.5}}
                    animate={{opacity:1,scale:1}}
                    transition={{duration:0.5}}
                >Mayank Srivastava</motion.span>

                <div className='social'>
                    <a href='https://www.linkedin.com/in/mayank-srivastava-906b64248/'><img src='./linkedin.png' /></a>
                    <a href='https://www.codechef.com'><img src='/codechef.png' style={{backgroundColor:'white'}}/></a>
                    <a href='https://github.com/mayank3213' style={{backgroundColor:'white',paddingTop:'0.30px',height:'18px'}}><img src='/github.png' /></a>
                    <a href='#'><img src='/instagram.png' /></a>
                    <a href='https://leetcode.com/u/Mayank968/'><img src='/leetcode.png' style={{backgroundColor:'white'}} /></a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;