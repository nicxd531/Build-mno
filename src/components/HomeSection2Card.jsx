const HomeSection2Card = ({index, img, heading, desc}) => {
    return ( 
        <div key={index} className="col-12 col-md-4 container">
            <div className="row">
                <div className="bg-lights col-1">
                    <div className="bg-primary"></div>
                </div>
                <div className="col-11 container">
                    <div className="row d-flex align-items-center">
                        <div className="col-2">
                            <img  width="22px" className="img-fluid " src={img} alt="descriptive icons" />
                        </div>
                        <h4 className="col-6 text-primary" >{heading}</h4>
                    </div>
                    <p className="text-primary">{desc}</p>
                </div>
            </div>
         </div>
         );
}
 
export default HomeSection2Card;