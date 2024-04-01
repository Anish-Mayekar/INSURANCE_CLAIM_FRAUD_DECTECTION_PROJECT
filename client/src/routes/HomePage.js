import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import HomeAbout from "../components/Homeabout"
import Footer from "../components/Footer";
import AssetsImg from "../assets/homepage_bg.png"
import CardInfo from "../components/CardInfo";
// import WhyChooseUs from "../components/WhyChooseUs";


function Home(){
    return(
        <>
        <Navbar/>
        <br></br><br></br><br></br><br></br>
        <Hero
        cName="hero"
        heroImg={AssetsImg}
        title=""
        text=""
        buttonText="Plan"
        url="/"
        btnClass="show"
        />
        <HomeAbout/>
        <CardInfo/>
        
        <br></br><br></br>
        {/* <WhyChooseUs/> */}
        <br></br><br></br>

        <Footer/>
        </>
    );
}

export default Home;