import applycard from "../assets/applycard.png"
import npowerlogo from "../assets/npowerlogo.png"; 
import "../styles/bankinginfo.css"
import { useNavigate } from "react-router-dom";

const Bankinginfo = () => {
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
                            <p>Step 5 of 5</p>
                        </div>

<h2 className="form-title">Bank Information</h2>

        <div className="form-grid2">
          <div className="input-box full">
            <label>Bank name</label>
            <select>
              <option value="">Select Option</option>
              <option value="access">Access Bank</option>
              <option value="gtb">GTBank</option>
              <option value="uba">UBA</option>
              <option value="zenith">Zenith Bank</option>
            </select>
          </div>

          <div className="input-box full h-full">
            <label>Bank account number</label>
            <input type="text" placeholder="Enter account number" />
          </div>

          <div className="input-box full h-full">
            <label>Bank verification number</label>
            <input type="text" placeholder="Enter BVN" />
          </div>

          <div className="agreement full">
            <input type="checkbox" />
            <span>
              I acknowledge that all the information provided are correct.
            </span>
          </div>
        </div>

        <div className="buttons-row">
          <button  className="backBttn" onClick={() => navigate("/citizenhipid")}>
             Back
          </button>
          <button className="continueBttn">Submit Application</button>
        </div>
      </div>
    </div>
                             
       </div> 
        </>
     );
}
 
export default Bankinginfo;