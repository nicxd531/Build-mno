import HomeSection2Card from "../components/HomeSection2Card";

const HomeSection2 = () => {
    // this section only contains html css and bootstrap and also a component that was used to map each cards 
    // data used in mapping the cards
    const data=[
        {
            "img":"/images/homeSec2 img 1.png",
            "heading":"Limited Investment Risk",
            "desc":"Don't want to be a victim of property scams in Nigeria?..... We have the antidote for that."
        },
        {
            "img":"/images/homeSec2 img 2.png",
            "heading":"Value Guaranteed",
            "desc":"Don't overpay that bricklayer. Get maximum value for your money anytime you wish to buy, build or invest in real estate."
        },
        {
            "img":"/images/homeSec2 img 3.png",
            "heading":"Easy Access",
            "desc":"Why talk to too many people you can't trust when you can go to one trusted platform?"
        },
    ]
    return (  
        <section className="homeSection2 container w-100 bg-dark">
            <div className="w-100 row">
               {
                data.map((data ,index)=>{
                    return(
                        <HomeSection2Card key={index} index={index} img={data.img} heading={data.heading} desc={data.desc}/>
                    )
                })
               }
            </div>
               <div>
                <img className='mb-4' width="22px" height="22px" src="/images/homeSec2 img 4.png" alt="" />
               </div>
        </section>
    );
}
 
export default HomeSection2;