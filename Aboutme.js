import React from "react";
import "./Aboutme.css";
import wo from "../Images/back.png";
// import workexp from '../Img/hh-removebg-preview.png';
// import Education from '../Img/education-removebg-preview (1).png';
// import Skills from '../Img/kk-removebg-preview.png';
// import Certification from '../Img/pp-removebg-preview.png';
// import Achievements from '../Img/achievments-removebg-preview.png';
// import organization from '../Img/organization-removebg-preview.png';
import Header from "./Homepage";
// import Below from "./Below";

function Aboutme() {
  return (
    <div className="bodyabout">
      <Header />
      {/* <h1 className="headingaboutme"><u>About Me</u> </h1>  */}
      <div className="about">
        <div className="subgrid">
          <div className="image">
            <img src={wo} alt="PROJECTS" />
          </div>
          <div className="content">
            <h3>
              <u>WORK EXPERIENCE</u>
            </h3>
            <text>
              <b>React JS</b> (Achievements/Tasks)
              <br />
              - Front-End <br />
              - User Interface
              <br />
              <br />
              <b>Testing</b>
              (02/2021 - Present) Achievements/Tasks
              <br />
              Manual Testing: BugZilla.
              <br />
              - Performance Testing: JMeter
              <br />
              - Automation Testing: Scelenium (Java)
              <br />
              <br />
              <b>SQL</b> (11/2021 - Present) Achievements/Tasks
              <br />
              - Apply operations according to Project requirements.
              <br />
            </text>
          </div>
        </div>

        {/* <div className="subgrid">
         <div className="image">
           <img src={boximg}  alt="PROJECTS"/>
         </div>
        <div className="content">
           <h3 >Skills/Languages</h3>
           <text>React JS, CSS, HTML, JavaScript, SVN, Bugzilla, Jmeter,<br/> Software testing and Debugging, Strategic Advisory,<br/> Troubleshooting
, Troubleshooting
</text>
        </div>
        </div> */}

        <div className="subgrid">
          <div className="image">
            <img src={wo} alt="PROJECTS" />
          </div>
          <div className="content">
            <h3>
              <u>EDUCATION</u>
            </h3>
            <text>
              <b>Master in Science (CS), (07/2018 – 06/2020)</b>
              <br />
              MDU, Rohtak
              <br />
              <b>project</b>- Fees Management System.
              <br />
              <br />
              <b>Bachelor in Science (CS), (07/2015 - 06/2018)</b>
              <br />
              MDU, Rohtak
              <br />
              <b>project</b>- Design a Front end for Blood Donation Application:
              <b> “Blood Camp”</b>.
            </text>
          </div>
        </div>
        <div className="subgrid">
          <div className="image">
            <img src={wo} alt="PROJECTS" />
          </div>
          <div className="content">
            <h3>
              <u>SKILLS/LANGUAGES</u>
            </h3>
            <text>
              React JS, CSS, HTML, JavaScript, SVN, Bugzilla, Jmeter,
              <br /> Software testing and Debugging, Strategic Advisory,
              <br /> Troubleshooting , Troubleshooting
            </text>
          </div>
        </div>
        <div className="subgrid">
          <div className="image">
            <img src={wo} alt="PROJECTS" />
          </div>
          <div className="content">
            <h3>
              <u>CERTIFICATION</u>
            </h3>
            <text>
              <b>Web Development (06/2022 - 07/2022)</b>
              <br />
              Used React JS Technologies
              <br />
              <br />
              <b>Coursera (04/2021 - 06/2021)</b>
              <br />
              HTML, CSS, JavaScript
              <br />
            </text>
          </div>
        </div>
        <div className="subgrid">
          <div className="image">
            <img src={wo} alt="PROJECTS" />
          </div>
          <div className="content">
            <h3>
              <u>ACHIEVEMENTS</u>
            </h3>
            <text>
              <b>Kolahal (01/2016 - 02/2016)</b>
              <br />
              My team created an event of tug of war <br />
              and every winner got his fee back and a chocolate as a winning
              price.
              <br />
              <b>Pollution Free Earth (06/2018 - Present)</b>
              <br />
              I managed a group that plant trees.
              <br />
            </text>
          </div>
        </div>
        <div className="subgrid">
          <div className="image">
            <img src={wo} alt="PROJECTS" />
          </div>
          <div className="content">
            <h3>
              <u>ORGANIZATIONS</u>
            </h3>
            <text>
              <b>Newgen Software Technologies ltd </b>
              (Nov/2021-Present)
              <br />
              <br />
              <b>Techinfy Solutions Pvt. Ltd. </b>
              (Feb/2021-Nov/2021) .
            </text>
          </div>
        </div>
      </div>
      {/* <div className='belowcode1'>
    <Below />
    </div> */}
    </div>
  );
}

export default Aboutme;
