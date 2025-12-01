import "../styles/programme.css"
import applycard from "../assets/applycard.png"
import npowerlogo from "../assets/npowerlogo.png"; 
import { useNavigate } from "react-router-dom";



const Programme = () => {
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
                    <p>Step 2 of 5</p>
                    </div>


<div className="form-container">
        <h2 className="form-title-programme">Programme Information</h2>
        <form className="bio-form-programme">

        <p className="label-programme">Category being applied for?</p>
        <select>
          <option>Select option...</option>
        </select>

        <p className="label-programme">Sub-category</p>
        <select >
          <option style={{ fontSize: "14px", color: "#ADB5BF"}}>Select option...</option>
        </select>

        <p className="label-programme">Any disability?</p>
        <div className="radio-group-programme">
          <label><input type="radio" name="disability" /> Yes</label>
          <label><input type="radio" name="disability"   /> No</label>
        </div>
        </form>

        <div className="buttons-programme">
          
          <button  className="backBttn" onClick={() => navigate("/biodata")}>
             Back
          </button>
          <button className="continueBttn" onClick={() => navigate("/educationemployment")}>
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
 
export default Programme;