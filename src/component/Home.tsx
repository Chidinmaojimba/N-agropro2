import arrowrightgreen from "../assets/arrow-rightgreen.png"; 
import imagehero from "../assets/imagehero.png";
import arrowgreen from "../assets/arrowgreen.png"
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

const Home = () => {
const navigate = useNavigate(); 
  return (
    <div className="container">
      
      <div className="guide">
            <button>Home</button>
            <img src={arrowrightgreen} alt="Logo" className="arrowIcon" />
            <button>Program category</button>
            <img src={arrowrightgreen} alt="Logo" className="arrowIcon" />
            <button>N-power graduate</button>
            <img src={arrowrightgreen} alt="Logo" className="arrowIcon" />
            <button className="lastButton">N-power agro</button>
      </div>
     <div>
       <div className="homeWriteup">
            <div className="writeUp">
                <h2>N-Power Agro</h2>
                <p>The Federal Government is engaging 100,000 qualified young Nigerians<br></br> through the N-Power Agro programme...</p>
                <div className="arrow-green">
                  <button className="homeBttn">Read more<img src={arrowgreen} className="arrowGreen"></img></button>
                </div>
                
          </div>
          <div>
                <img src={imagehero} alt="image hero" className="home-img"/>
          </div>
       </div> 
     </div>

     <div className="overview">
          <div className="overviewOne">
                  <h6>Overview</h6>
                  <p>Selection Preference</p>
                  <p>Duration</p>
                  <p>Job Opportunities</p>
          </div>

          <div className="overviewTwo">
                  <h2> Overview</h2>
                  <p>N-Power Agro volunteers will provide advisory services to farmers across the<br></br> country. They will disseminate the knowledge that has been aggregated by the<br></br> Federal Ministry of Agriculture and Rural Development in the area of extension<br></br> services. They will also gather data of Nigeria’s agriculture assets.</p>

                  <button  className="overviewBttn" onClick={() => navigate("/biodata")}>
                    Apply 
                   </button>
          </div>

     </div>

      <Footer/>
     
    </div>  
  );
};

export default Home;
