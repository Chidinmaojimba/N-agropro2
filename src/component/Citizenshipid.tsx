import applycard from "../assets/applycard.png"
import npowerlogo from "../assets/npowerlogo.png"; 
import "../styles/citizenshipid.css"
import { useNavigate } from "react-router-dom";


const Citizenshipid = () => {
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
                        <p>Step 4 of 5</p>
                        </div>
                


                

        <h2 className="form-title">Citizenship Identification</h2>
<div>
    <form className="bio-form">
        <div className="form-row">
          <div className="form-group">
            <label>Means of identification</label>
            <select required className="select-input">
              <option value="">Select Option</option>
              <option value="nin">National ID (NIN)</option>
              <option value="passport">International Passport</option>
              <option value="driver">Driver’s License</option>
              <option value="voter">Voter’s Card</option>
            </select>
          </div>

          <div className="form-group">
            <label>ID number</label>
            <input type="text" placeholder="Graduation/expected year" />
          </div>
        </div>

    

          {/* PASSPORT UPLOAD */}
          <div className="input-box full upload-box">
            <label>Passport photograph</label>
            <div className="upload-input">
              <input type="file" />
              <button type="button">Choose file</button>
            </div>
          </div>

          {/* QUALIFICATION UPLOAD */}
          <div className="input-box full upload-box">
            <label>Highest qualification certificate</label>
            <div className="upload-input">
              <input type="file" />
              <button type="button">Choose file</button>
            </div>
          </div>
          </form>
        </div>

        
        <div className="buttons-row">  
        <button  className="backBttn" onClick={() => navigate("/Educationemployment")}>
             Back
          </button>
          <button className="continueBttn" onClick={() => navigate("/bankinginfo")}>  
            Continue
          </button>
        </div>


</div>      
            </div>
            </div>
        

        </>
     );
}
 
export default Citizenshipid
;