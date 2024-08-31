import './results.css'
import Navbar from './navbar/navbar'
import Footer from './footer/footer'
import Seemore from './seeMore/seeMore'
import MatchResult1 from './matchResults/matchResult1'
import MatchResult2 from './matchResults/matchResult2'
import MatchResult3 from './matchResults/matchResult3'
function Results() {
    return(
        <>
        <Navbar/>
        <MatchResult1/>
        <MatchResult2/>
        <MatchResult3/>
        <Seemore/>
        <Footer/>
        </>
    )
}

export default Results