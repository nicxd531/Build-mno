const HomeSection3 = () => {

    // this section contains just html,css and bootstrap classes
    return ( 
        <section className="homeSection3  container w-100">
            <div className="row">
                <div className="col-12 col-md-5">
                    <img className="img-fluid" src="/images/Cafe Discussion.png" alt=" discussion"/>
                </div>
                <div className=" col-12 col-md-7 d-flex justify-content-center flex-column">
                    <h2 className="text-primary text-capitalize">Are you a real <br/>estate agent?</h2>
                    <p>Become a better-informed Realtor and get deeper education about real estate in Nigeria. It helps you answer your potential clients better and build trust.</p>
                    <button className="btn btn-primary">Register free</button>
                    <p>10X your confidence and expertise.</p>
                </div>
            </div>
                
            
        </section>
     );
}
export default HomeSection3;