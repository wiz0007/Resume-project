import "./App.css";
import ProfileCard from "./Components/PflCard/ProfileCard";
import anuImage1 from "./assets/ProfilePic.png";
import anuImage2 from "./assets/anuImage2.png";
import shivalik from "./assets/Shivalik.png";
import renaissance from "./assets/Renaissance.png";
import ptu from "./assets/ptu.png";
import vijan from "./assets/vijan.png";
import jw from "./assets/jw.png";
import Navbar from "./Components/Navbar/Navbar";
import LikeBtn from "./Components/Likebtn/LikeBtn";
import EducationCard from "./Components/EduCard/EducationCard";
import ExpCard from "./Components/ExpCard/ExpCard";
import headingBg from "./assets/head.png";
import Skill from "./Components/Skill/Skill"
import Footer from "./Components/Footer/Footer";
// import {createBrowserRouter, Link, RouterProvider} from "react-router-dom";


const styles = {
  backgroundImage: `url(${headingBg})`,
};


function App() {
  return (
    <>
      <Navbar />

      <div className="main">
        
        <ProfileCard className="slide-in-left" name="Anurag Rawat" image={[anuImage1, anuImage2]} />

      <div className="eduComp">
        <h1 style={styles} id="eduHeading" className="Heading">Education</h1>
        <div className="education slide-in-left">
          <EducationCard
            degree="Intermediate"
            image={shivalik} 
            eduLink="https://www.shivalikhma.com/"
            institution="S.H.M.A., Kashipur"
            year="2021"
            description="Commerce Stream with 70%"
          />
          <EducationCard
            degree="Diploma"
            image={renaissance}
            eduLink="https://www.rchmct.com/"
            institution="Rennaissance, Pirumadara"
            year="2023"
            description="1 year in Hotel Management"
          />
          <EducationCard
            degree="Bachlor's"
            image={ptu}
            eduLink="https://ptu.ac.in/"
            institution="Chandigarh University"
            year="2027"
            description="BBA and currently pursuing"
          />
        </div>
      </div>

      <div className="expComp">
        <h1 style={styles} id="expHeading" className="Heading">Experience</h1>
        <div className="experience slide-in-left">
          <ExpCard
            role="Industrial trainee"
            image={vijan}
            expLink="https://www.vijanmahal.com/"
            company="Vijan Mahal"
            duration="2022"
            description=" Completed my training of three months from Vijan Mahal Jabalpur in Food and Beverages. i.e., Banquet, Cafe, IRD. Got Intern of the season"
          />
          <ExpCard
            role="Trainee in IT"
            image={jw}
            expLink="https://www.marriott.com/en-us/hotels/ixcjw-jw-marriott-hotel-chandigarh/overview/"
            company="JW Marriott"
            duration="20022-23"
            description=" Supervising Cafeteria Responsibility. MakingPresentation, Bills Managemant. Got Intern of the season"
          />
          <ExpCard
            role="OJT"
            image={jw}
            expLink="https://www.marriott.com/en-us/hotels/ixcjw-jw-marriott-hotel-chandigarh/overview/"
            company="JW Marriott"
            duration="2023"
            description="Handling Recruitments, Joining Formalities. Coordinating with vendors. Organizing events"
          />
          <ExpCard
            role="HR Coordinator"
            image={jw}
            expLink="https://www.marriott.com/en-us/hotels/ixcjw-jw-marriott-hotel-chandigarh/overview/"
            company="JW Marriott"
            duration="2023-2025"
            description="Handling Recruitments, Joining Formalities. Bills Management. Organising events"
          />
        </div>
      </div>

      <div className="skillComp slide-in-left">
        <h1 style={styles} id="skillHeading" className="Heading">Skills</h1>
        <Skill/>
      </div>

      {/* <div id="likeBtn">
        <LikeBtn />
      </div> */}

      </div>

      <div className="footComp">
        <Footer/>
      </div>
    </>
  );
}

export default App;
