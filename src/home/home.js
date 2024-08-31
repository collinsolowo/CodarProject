import './home.css'
import Navbar from './navbar/navbar'
import Slider from './imageSlide/imageSlide.js'
import FixtureBox from './fixture/fixtureBox'
import TransferList from './transfer/transferList'
import Stats from './stats/stats'
import Footer from './footer/footer'
function Home(){
    return(
        <>
        <Navbar/>
        <Slider/>
        <FixtureBox/>
        <TransferList/>
        <Stats/>
        <Footer/>
        </>
    )
}

export default Home