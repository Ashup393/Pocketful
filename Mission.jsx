import React from "react";
import MissionData from "./MissionData.json";
import "./Mission.css";
import Homepage from "./Homepage";
import Booking from "./Booking";

function Button() {

  const Clickopen=()=>{
    window.open('https://www.example.com', 'Popup', 'width=600,height=400')
  }

  return (
    <button  style={{color:"black",
      background: "darkcyan",
      fontWeight: "700",
      textAlign: "center",
      padding: "12px 15px",
      cursor:"pointer",
      minWidth: "130px",
     fontSize: "18px",
      lineHeight: "18px",
      borderRadius: "11px"}}  onClick={() => Clickopen()}>
      Book Now
    </button>
  );
}

const LbPersonal = MissionData.map((Lbinfo) => {
  return (
    <div className="Labour-Attributes">
      {Lbinfo.name}

      <div className="Labour-Image">
        <img src={process.env.PUBLIC_URL + Lbinfo.image} alt=""></img>
      </div>
      <div className="Labour-personal">
        <span style={{ paddingBottom: "10%" }}>Id: {Lbinfo.id}</span>
        <br />
        <span style={{ paddingBottom: "10%" }}>Name: {Lbinfo.Name}</span>
        <br />
        <span style={{ paddingBottom: "10%" }}>Age: {Lbinfo.Age}</span>
        <br />
        <span style={{ paddingBottom: "10%" }}>Price: {Lbinfo.Price}</span>
        <br />
        <span style={{ paddingBottom: "10%" }}>Phone: {Lbinfo.Phone}</span>
        <br />
        <Button/>
      </div>
    </div>
  );
});

export default function Mission() {
  return (
    <div className="Labour-main">
      <div className="dd">
        <Homepage
          style={{ backgroundRepeat: "no-repeat", backgroundSize: "cover" }}
        />
      </div>
      {/* <div className='Labour-Heading'>
       <h2><u>LABOUR</u></h2>
     </div> */}
      <div className="Labour-Details">{LbPersonal}</div>
    </div>
  );
}

// import MissionData from './MissionData.JSON';
// import './Mission.css';

// const LbPersonal = MissionData.map((Lbinfo)=>{
//   return(
//   <div className='Labour-Attributes'>
// {/*
// <div className='Labour-Image'>
// <img src= {process.env.PUBLIC_URL + Lbinfo.image} alt='' ></img>
// </div> */}
// <div className='Labour-personal'>
// <span style={{"paddingBottom":'10%'}}>Id: {Lbinfo.id}</span><br/>
// <span style={{"paddingBottom":'10%'}}>Name: {Lbinfo.Name}</span><br/>
// <span style={{"paddingBottom":'10%'}}>Age: {Lbinfo.Age}</span><br/>
// <span style={{"paddingBottom":'10%'}}>Price: {Lbinfo.Price}</span><br/>
// <span style={{"paddingBottom":'10%'}}>Phone: {Lbinfo.Phone}</span><br/>
// </div>

// </div>
//   )
// })

// function Mission() {
//   return(
//     <div className='Labour-main'>

//     <div className='Labour-Heading'>
//       <h2><u>LABOUR</u></h2>
//     </div>
//     {/* <div className='Labour-Details'>
//     {LbPersonal}
//     </div> */}
//     </div>)}
