const HomeSection5Cards = ({img, desc, heading ,index}) => {
    // this component only contain html,css and bootstrap classes
    return ( 
        <div className="hSec5Card col-6 col-md-2" key={index}>
            <div className="img-fluid w-100"> 
                <img className="img-fluid" src={img} alt="image" />
            </div>
            <h4>{heading}</h4>
            <p>{desc}</p>
        </div>
     );
}
 
export default HomeSection5Cards;