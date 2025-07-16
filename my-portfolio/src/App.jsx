import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
// import Test from './Test';
import './app.scss'
import Parallax from './Components/Parallax/Parallax';
import Portfolio from './Components/portfolio/Portfolio';
import Services from './Components/Services/Services';
import Contacts from './Components/Contacts/Contacts';
import Cursor from './Components/Cursor/Cursor';
import Education from './Components/Education/Education';

const App = () => {
  return <div>
    {/* task-1 ---> Create all the sections  */}
    {/* <section><a href=''>Hello</a></section> */}
    <Cursor />
    <section id="HomePage">
      <Navbar />
      <Hero />
    </section>
    <section id='Education'>
    <Education />
    </section>
    
    <section id='Portfolio'>
      <Parallax type="services" />
    </section>
    <section>
      <Services />
    </section>
    <section id='Projects'>
      <Parallax type="portfolio" />
    </section>

    <Portfolio />
    <section id='Contact'>
      <Contacts />
    </section>

    {/* below two are for the practices of framer */}
    {/* <Test />
  <Test /> */}

 
  </div>;
};

export default App;


// task-1 -> defined all the sections in the app.jsx file
// task-2 -> install sass-> npm install sass
// task-3 -> create a app.scss and import file in app.jsx
// task-4 -> give some basic styling of section,body,bgcolor,a
// task-5 -> create a Component folder -> Navbar folder -> Navbar.jsx,Navbar.scss
// task-6 -> inside the app.jsx change the home with navbar component
// task-7 -> Create the content of the navbar ( logo and social media button and links) -> then add styles
// extra -> for frammer motion animation check the file Test.jsx
// task-8 -> now add href link in 'a' (Navbar.jsx) and add id into the section tag in app.jsx
// task-9 -> now create a Sidebar.jsx
// task-10 -> and then create a Links and ToggleButton component for Sidebar -> import component into the sidebar
// task-11 -> Then create a Services Component.
// task-12 -> then create a parallax component for animation of mountains ,sun,stars.