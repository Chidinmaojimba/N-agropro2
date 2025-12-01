import npowerlogo from "../assets/npowerlogo.png"; 


const Footer = () => {
    return ( 
        <div>
            <footer>
                    <div className="footer-left">
                          <img src={npowerlogo} alt="Logo" className="footer-logo" />
                    </div>

                    <ul className="footer-links">
                            <li>Terms of Service</li>
                            <li>Privacy Policy</li>
                            <li>Cookie Policy</li>
                    </ul>

                            <div className="para"><p>© 2023, N-Power. All Rights Reserved.</p></div>

            </footer>

        </div>
     );
}
 
export default Footer;