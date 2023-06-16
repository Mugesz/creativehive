import './App.css';
import Black from './images/Black Storke icon.png'
import Hero from './images/Hero Section element.png'



function App() {
  return (
    <div className="App">


    <div className='top'>


    <div className="top-new">
      <div className="top-new-img">
        <img src={Black} alt="" />
      </div>
   


      <div className="top-h3">
        <h3>Expertise</h3>
        <h3>Work</h3>
        <h3>Contact</h3>
      </div>


     <div className="top-text">
     <h1>We're Digital Agency Elevating <br/> Brands Through <span>Branding,</span>  <br /><span> Web Design, And Marketting </span><br /> Expertise.</h1>
     </div>

     <div className="top-hero">
        <img src={Hero} alt="" />
     </div>

     <div className="top-footer">
       
       <div className="">
       <h3>Based in kolkata & ooty</h3>
        <p>Born in kolkata</p>
       </div>
         
         <div className="">
         <h3>Design-driven</h3>
        <p>Digital agency.</p>
         </div>
      
          <div className="">
          <h3>Branding, digital</h3>
        <p>& communications</p>
          </div>
       
     </div>

     </div>
     </div>

    <div className="bottom">
    <div className="bottom-top">
        <h1>Let's Discuss your <br />Design Needs</h1>
    </div>

    <div className="bottom-hours">
    <div className="">
    <h4>Hours</h4><br />
    <p>Mon-Fri</p>
    <p>10am-6pm</p>
    </div>

    <div className="">
    <h4>Follow us</h4><br />
    <p>instagram</p>
    <p>linkedin</p>
    </div>

    <div className="">
    <h4>Home</h4>
    <p>work</p>
    <p>service</p>
    <p>contact</p>
    </div>
     
    </div>

    <div className="bottom-para">
        <p>if you are interested in learning more about our services or <br /> would like to discuss your design needs, please don't <br /> hesitate to get in touch. Our team is always here to answer <br /> your questions and provide you with the information you <br /> need to make an informed decision.</p>
    </div>

    <div className="bottom-form">
        <input type="text" placeholder='name' />
        <input type="email" placeholder='email' />
        <button>let's do it</button>
    </div>

    <div className="bottom-last">
      <h1>Kolkata & Ooty</h1><br />
      <h2>hello@thecreative.com </h2> <br /><br />

      <p>©️thecreativehive</p>
    </div>
    </div>
    </div>
  );
}

export default App;
