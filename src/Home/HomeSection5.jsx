import HomeSection5Cards from "../components/HomeSection5Card";



const HomeSection5 = () => {
    // this section contains a little bit of javascript ,css and html and also bootstrap classes

    // this are the data used for mapping the cards in this section 
    const data =[
        {
        "img":'/images/homeSection5 img 1.png',
        'heading':'BUY, SELL OR RENT A PROPERTY',
        'desc':"Skip the stress and get a good deal faster when a property is verified by us. Also, sell faster because when you list your property for sale, we send it to our network of realtors and potential buyers."
        },
        {
        "img":'/images/homeSection5 img 2.png',
        'heading':'REVIEW AND CONTACT ANY BUILDING PROFESSIONAL',
        'desc':"Get qualified architects, engineers, carpenters, property lawyers, etc any time you need them. Save costs by asking for quotes from many qualified experts at the same time."
        },
        {
        "img":'/images/homeSection5 img 3.png',
        'heading':'VERIFIED PERSONAL AGENT',
        'desc':"If you are too busy, hire a verified truth worthy, and experienced expert to do everything needed to be done."
        },
        {
        "img":'/images/homeSection5 img 4.png',
        'heading':"YOU DON'T HAVE TO PAY AN AGENT ALL THE TIME",
        'desc':"Get a step-by-step guide, article, explainer video, market trends, and weekly updates on how to save cost, maximize resources and get the best results."
        },
        {
        "img":'/images/homeSection5 img 5.png',
        'heading':"WORK WITH ACCURATE DATA AND TOOLS",
        'desc':"We are constantly creating tools and technologies that will help you get instant and accurate results and also help you make better-informed decisions in the property space."
        }
    ]
    return ( 
        <section className="homeSection5 container">
            <div className="row gx-5">
                {data.map((data, index)=>{
                    return(
                        <HomeSection5Cards desc={data.desc} heading={data.heading} img={data.img} key={index}/>
                    )
                })}
            </div>

        </section>
     );
}
 
export default HomeSection5;