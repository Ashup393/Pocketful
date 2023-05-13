import React from "react";
import "./Homecontent.css";
import Homepage from "./Homepage";
import SearchIcon from "@mui/icons-material/Search";
import Crouseldata from "./Crouseldata";

export default function Homecontent() {
  return (
    <div className="container-Homecontent" id="book_now ">
      <div
        className="Homecomponent"
        style={{ backgroundRepeat: "no-repeat", backgroundSize: "cover" }}
      >
        <Homepage />
      </div>

      <div className="inner-content">
        {/* <div className='crayons-header--search js-search-form' id='header-search'>
   <form method='get' action='/search' role="search" acceptCharset='UTF-8'>
    <input name='utf8' type="hidden" value="l" />
    <div className='crayons-field flex-1 relative'>
    <input type="text" id name='q' placeholder='Search...' autoComplete='off' aria-label='Search term' ></input>
    <button type='submit' aria-label='Search- items' className='c-btn c-btn--icon-alone absolute inset-px left-auto mt-0 py-0' ><SearchIcon/></button>
    </div>
   </form>
   style ={{height:"4%",width: "50%",padding: "1%",fontSize:"123%",marginLeft:"46%",borderRadius:"100px"}}
    style={{marginLeft: "-3%",marginBottom: "-.5%",cursor: "pointer",color: "red"}}
   </div> */}
        <div className="detils">
          <div class="search-box">
            <input
              type="text"
              class="search-input"
              id
              name="q"
              placeholder="Search..."
              autoComplete="off"
              aria-label="Search term"
            ></input>
            <SearchIcon class="search-btn" />
          </div>
          <h2 className="Conmain">INDIA'S BEST</h2>
          <h2 className="Conmain">CONSTRUCTION WORK</h2>
          <h2 className="Conmain">BY OUR MASSIONS.</h2>
          <p className="Con_para_main">
            Massions labour is the simplest way to teg your life
            <br /> in order with the right person work with your Time & place.
          </p>

          <button className="conbutton">BOOK NOW</button>
          <div style={{ marginTop: "-21%" }}>
            <Crouseldata className="CrouselComponent" />
          </div>
        </div>
      </div>
    </div>
  );
}
