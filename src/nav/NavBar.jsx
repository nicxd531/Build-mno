import { Button } from "bootstrap";

const NavBar = () => {
    return ( 
    <nav className="navbar navbar-expand-md navbar-light fixed-top">
        <div className="container-fluid ">
            
            <a className="navbar-brand col 4" href="#" style={{ height: '43px' }}>
                <img src="/images/company logo.png" alt="Logo" className="img-fluid" style={{ height: '37.12px' }}/>
            </a>

        
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent">
                <span className="navbar-toggler-icon"></span>
            </button>

        
            <div className="collapse navbar-collapse col-8 w-50" id="navbarContent">
                <ul className="navbar-nav w-100 mb-2 mb-md-0 d-flex justify-content-md-between justify-content-start">
                    <li className="nav-item">
                        <a className="nav-link strokes" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link strokes" href="/Blogs">Blog</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link strokes" href="/ContactUs">Contact Us</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link strokes" href="/AboutUs">About Us</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link strokes" href="/AboutUs">Register</a>
                    </li>
                    <button className="nav-item btn btn-primary d-md-flex jusify-content-center text-center align-items-center text-light">
                        <a className="nav-link text-white text-center" href="/AboutUs">log in</a>
                    </button>
                </ul>
            </div>
         </div>
    </nav>
     );
}
 
export default NavBar;