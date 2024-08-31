import './matchweek1.css'
import './matchweek2.css'
import './matchweek3.css'
import Chelsea1 from './cheHome.jfif'
import ManUnited1 from './munHome.jfif'

function Matchweek1() {
    return (
        <>
            <div className='matchweek-House sharp'>
                <div className='banner'>
                    <p>Matchweek 1</p>
                </div>
                <div className='match-up-box'>
                    <div className='match-image'>
                        <img src={ManUnited1} alt=''/>
                    </div>
                    <div className='match-box'>
                        <div className='each-match'>
                            <div className='home-team'>
                                <p>Brentford</p>
                            </div>
                            <div className='versuss'>
                                <p>VS</p>
                            </div>
                            <div className='away-team'>
                                <p>Arsenal</p>
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
                                <p>Everton</p>
                            </div>
                        </div>
                        <div className='each-match'>
                            <div className='home-team'>
                                <p>Ipswich</p>
                            </div>
                            <div className='versuss'>
                                <p>VS</p>
                            </div>
                            <div className='away-team'>
                                <p>Brighton</p>
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
                                <p>Chelsea</p>
                            </div>
                        </div>
                        <div className='each-match'>
                            <div className='home-team'>
                                <p>Manchester City</p>
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
                                <p>WestHam</p>
                            </div>
                        </div>
                        <div className='each-match'>
                            <div className='home-team'>
                                <p>Wolves</p>
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
                                <p>Bournemouth</p>
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
                                <p>Tottenham</p>
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
                                <p>Southampton</p>
                            </div>
                        </div>
                    </div>
                    <div className='match-image'>
                        <img src={Chelsea1} alt=''/>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Matchweek1