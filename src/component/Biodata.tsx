import "../styles/biodata.css";
import applycard from "../assets/applycard.png"
import npowerlogo from "../assets/npowerlogo.png"; 
import { useNavigate } from "react-router-dom";



const Biodata = () => {
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
                        <p>Step 1 of 5</p>
                        </div>

 <div className="form-container">

  <h2 className="form-title">Bio-data</h2>

  <form className="bio-form">

    {/* First & Other Names */}
    <div className="form-row">
      <div className="form-group">
        <label>First name</label>
        <input type="text" placeholder="first name" />
      </div>

      <div className="form-group">
        <label>Other name(s)</label>
        <input type="text" placeholder="other name(s)" />
      </div>
    </div>

    {/* Email */}
    <div className="form-group w-full">
      <label>Email</label>
      <input type="email" placeholder="Email address" />
    </div>




    {/* Phone & DOB */}
    <div className="form-row">
      <div className="form-group">
        <label>Phone number</label>
        <input type="text" placeholder="Phone number" />
      </div>


      <div className="form-group">
        <label>Date of birth</label>
        <select>
          <option>Select Option</option>
        </select>
      </div>
    </div>

    {/* Gender */}
    <div className="form-group">
      <label>Gender</label>
      <div className="gender-options">
        <label><input type="radio" name="gender" /> Male</label>
        <label><input type="radio" name="gender" /> Female</label>
      </div>
    </div>

    {/* State & LGA */}
    <div className="form-row">
      <div className="form-group">
        <label>State of origin</label>
        <select>
          <option>Select Option</option>
        </select>
      </div>

      <div className="form-group">
        <label>LGA of origin</label>
        <select>
          <option>Select Option</option>
        </select>
      </div>
    </div>

    {/* Address */}
    <div className="form-group w-full">
      <label>Residential address</label>
      <input type="text" placeholder="Enter your address" />
    </div>

    {/* State & LGA of Residence */}
    <div className="form-row">
      <div className="form-group">
        <label>State of residence</label>
        <select>
          <option>Select Option</option>
        </select>
      </div>

      <div className="form-group">
        <label>LGA of residence</label>
        <select>
          <option>Select Option</option>
        </select>
      </div>
    </div>

  </form>
</div>
                    </div> 


                       
            </div>
            <div className="bttn-container">
              <button className="continueBttn" onClick={() => navigate("/programme")}>
               Continue
              </button> 
            </div>
        </div>
        </>
     );
}
 
export default Biodata;