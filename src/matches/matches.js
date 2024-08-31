import './matches.css'
import Navbar from '../results/navbar/navbar'
import Footer from './footer/footer'
import Matchweek1 from './matchweek/matchweek1'
import Matchweek2 from './matchweek/matchweek2'
import Matchweek3 from './matchweek/matchweek3'
import Seemore from './seeMore/seeMore'

function Matches() {
    return (
        <>
            <Navbar />
            <Matchweek1/>
            <Matchweek2/>
            <Matchweek3/>
            <Seemore/>
            <Footer />
        </>
    )
}

export default Matches