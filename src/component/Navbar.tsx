import npowerlogo from "../assets/npowerlogo.png"; 
import { Link, useNavigate } from "react-router-dom";


const Navbar = () => {
const navigate = useNavigate();
  return (
    <nav className="navbar">
      <div className="nav-left">
        <img src={npowerlogo} alt="Logo" className="nav-logo" />
      </div>

     
        <ul className="nav-links">   
          <li >
            <Link to='/' className="linkss">Home</Link>
          </li>
          <li>
            <Link to='/instruction' className="linkss">Application Status</Link>
          </li>
          <li>
            <Link to='/contact' className="linkss">Contact</Link>
          </li>
        </ul>

      <button  className="apply-btn" onClick={() => navigate("/biodata")}>
         Apply 
       </button>
    </nav>
  );
};

export default Navbar;


