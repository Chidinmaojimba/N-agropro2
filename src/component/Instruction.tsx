import "../styles/instruction.css"
import applycard from "../assets/applycard.png"
import npowerlogo from "../assets/npowerlogo.png"; 
import { useNavigate } from "react-router-dom";


const Instruction = () => {
    const navigate = useNavigate();
    return ( 
        <div className="main-instruction">
            <div className="instruction">
                <div className="instructionOne">
                    <img src={applycard} alt="apply-card" />
                </div>
                <div className="instructionTwo">
                  <div className="instructionLogo">
                    <img src={npowerlogo} alt="Logo" className="instruction-logo" />
                  </div>
                    <h3>N-Power 2024 Batch A Registration</h3>
                    <p>Important Notes:</p>
                    <ol start={1}>
                        <li>Applicant must be a Nigerian Citizen by birth.</li>
                        <li>Applicant must be at least 18 years of age.</li>
                        <li>Applicant must not already be a beneficiary of the N-Power<br></br> Programme.</li>
                    </ol>
                <div className="but">
                    <button onClick={() => navigate("/biodata")}>
                         Apply 
                    </button>
                    <button >Take Examination</button>
                </div>

                    
                    </div>
            </div>
        </div>
     );
}
 
export default Instruction;








