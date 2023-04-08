import { Button } from "bootstrap";

const NavBar = () => {
    return ( 
    <nav className="navbar navbar-expand-md navbar-light fixed-top">
        <div className="container-fluid ">
            
            <a className="navbar-brand col 4" href="#" style={{ height: '43px' }}>
            <img src="/images/company logo.png" alt="Logo" className="img-fluid" style={{ height: '43px' }}/>
            </a>

        
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent">
            <span className="navbar-toggler-icon"></span>
            </button>

        
            <div className="collapse navbar-collapse col-8 w-50" id="navbarContent">
            <ul className="navbar-nav  ms-auto mb-2 mb-md-0 d-flex justify-content-md-between justify-content-start">
                <li className="nav-item">
                <a className="nav-link" href="/">Home</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="/Blogs">Blog</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="/ContactUs">Contact Us</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="/AboutUs">About Us</a>
                </li>
            </ul>
            </div>
         </div>
    </nav>
     );
}
 
export default NavBar;