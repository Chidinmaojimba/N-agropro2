import "../styles/educationemployment.css"
import applycard from "../assets/applycard.png"
import npowerlogo from "../assets/npowerlogo.png"; 
import { useNavigate } from "react-router-dom";


const Educationemployment = () => {
  const navigate = useNavigate();
    return (  
        <>

          <div className="main-biodata">
            <div className="biodata">
                <div className="biodataOne">
                    <img src={applycard} alt="apply-card" className="biodataImg"/>
                </div>
                <div className="biodataTwo">
                    <div className="step">
                    <img src={npowerlogo} alt="Logo" className="instruction-logo" />
                    <p>Step 3 of 5</p>
                    </div>
                    
                

        
    <div className="form-container">
        <h2 className="form-title">Education and Employment</h2>

         <form className="bio-form">

        <div className="form-row">
          <div className="form-group">
            <label>Highest qualification</label>
            <select required className="select-input">
              <option value="">Select Option</option>
              <option value="ssce">SSCE</option>
              <option value="ond">OND</option>
              <option value="hnd">HND</option>
              <option value="bsc">B.Sc</option>
              <option value="msc">M.Sc</option>
            </select>
          </div>

          <div className="form-group">
            <label>Graduation year</label>
            <input type="text" placeholder="Graduation/expected year" />
          </div>
        </div>

        <label >School name</label>
        <input className="h-full" type="text" placeholder="School name" />

        <label>Employment status</label>
        <div className="gender-options">
          <label><input type="radio" name="emp" /> Employed</label>
          <label><input type="radio" name="emp" /> Unemployed</label>
        </div>
</form>
        <div className="buttons-programme">  
        <button  className="backBttn" onClick={() => navigate("/programme")}>
             Back
          </button>
          <button className="continueBttn" onClick={() => navigate("/citizenshipid")}>
            Continue
          </button>
        </div>
      </div>
   </div>
            </div>
            </div>
            

        </>
    );
}
 
export default Educationemployment;