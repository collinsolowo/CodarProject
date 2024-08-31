import './matchweek1.css'
import './matchweek2.css'
import './matchweek3.css'
import Chelsea2 from './cheAway.jfif'
import Mancity1 from './mciHome.jfif'

function Matchweek2() {
    return (
        <>
            <div className='matchweek-House'>
                <div className='banner'>
                    <p>Matchweek 3</p>
                </div>
                <div className='match-up-box'>
                    <div className='match-image'>
                        <img src={Chelsea2} alt=''/>
                    </div>
                    <div className='match-box'>
                        <div className='each-match'>
                            <div className='home-team'>
                                <p>Tottenham</p>
                            </div>
                            <div className='versuss'>
                                <p>VS</p>
                            </div>
                            <div className='away-team'>
                                <p>Leicester City</p>
                            </div>
                        </div>
                        <div className='each-match'>
                            <div className='home-team'>
                                <p>Manchester United</p>
                            </div>
                            <div className='versuss'>
                                <p>VS</p>
                            </div>
                            <div className='away-team'>
                                <p>Brentford</p>
                            </div>
                        </div>
                        <div className='each-match'>
                            <div className='home-team'>
                                <p>Southampton</p>
                            </div>
                            <div className='versuss'>
                                <p>VS</p>
                            </div>
                            <div className='away-team'>
                                <p>Everton</p>
                            </div>
                        </div>
                        <div className='each-match'>
                            <div className='home-team'>
                                <p>Brighton</p>
                            </div>
                            <div className='versuss'>
                                <p>VS</p>
                            </div>
                            <div className='away-team'>
                                <p>Chelsea</p>
                            </div>
                        </div>
                        <div className='each-match'>
                            <div className='home-team'>
                                <p>Newcastle</p>
                            </div>
                            <div className='versuss'>
                                <p>VS</p>
                            </div>
                            <div className='away-team'>
                                <p>Aston Villa</p>
                            </div>
                        </div>
                        <div className='each-match'>
                            <div className='home-team'>
                                <p>Crystal Palace</p>
                            </div>
                            <div className='versuss'>
                                <p>VS</p>
                            </div>
                            <div className='away-team'>
                                <p>Ipswich</p>
                            </div>
                        </div>
                        <div className='each-match'>
                            <div className='home-team'>
                                <p>Bournemouth</p>
                            </div>
                            <div className='versuss'>
                                <p>VS</p>
                            </div>
                            <div className='away-team'>
                                <p>Fulham</p>
                            </div>
                        </div>
                        <div className='each-match'>
                            <div className='home-team'>
                                <p>Chelsea</p>
                            </div>
                            <div className='versuss'>
                                <p>VS</p>
                            </div>
                            <div className='away-team'>
                                <p>Manchester City</p>
                            </div>
                        </div>
                        <div className='each-match'>
                            <div className='home-team'>
                                <p>WestHam</p>
                            </div>
                            <div className='versuss'>
                                <p>VS</p>
                            </div>
                            <div className='away-team'>
                                <p>Nottingham Forest</p>
                            </div>
                        </div>
                        <div className='each-match'>
                            <div className='home-team'>
                                <p>Liverpool</p>
                            </div>
                            <div className='versuss'>
                                <p>VS</p>
                            </div>
                            <div className='away-team'>
                                <p>Wolves</p>
                            </div>
                        </div>
                    </div>
                    <div className='match-image'>
                        <img src={Mancity1} alt=''/>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Matchweek2