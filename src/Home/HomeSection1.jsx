const HomeSection1 = () => {

    // home section contains no fuction just normal css and html and also bootstrap classes 
    const mainText=<h2 className="text-primary"><span>No More REAL ESTATE & </span><br></br>CONSTRUCTION Hassle</h2>;
    const discription= "Buy, Sell, Build, Manage, Hire, or do-it-yourself!!!  Everything you need to have a SAFE PROPERTY deal is right here...."
    
    return ( 
        <section className="HomeSection1 container ">
            <div className="row">
                <div className="col-12 col-md-6">
                    {mainText}
                    <h5>{discription}</h5>
                    <button className=" homeBtn btn btn-primary ">Speak With An Expert</button>
                    <h6 className="mt-2">Get a 30 Minutes FREE Real Estate/Construction Expert Advice</h6>
                    <ul className="text-primary fw-semibold">
                        <li>  10+ Years Experience + Certified</li>
                        <li>  Trusted By Experts and Nonexperts</li>
                    </ul>
                </div >
                <div className="col-12 col-md-6 img">
                    <img className="img-fluid" src="/images/homesection1 image.png" alt="illustration" />
                </div>
            </div>
        </section>
     );
}
 
export default HomeSection1;