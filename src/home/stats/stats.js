import './stats.css'

function Stats() {
    return (
        <>
            <div className='stats-house'>
                <div className='stats-box scorers'>
                    <div className='topic line'><p>GOALS</p></div>
                    <div className='line'>
                        <div className='stat-player goals'><p>Erling Haaland</p></div>
                        <div className='tally'><p>30</p></div>
                    </div>
                    <div className='line'>
                        <div className='stat-player goals'><p>Alexsander Isak</p></div>
                        <div className='tally'><p>25</p></div>
                    </div>
                    <div className='line'>
                        <div className='stat-player goals'><p>Mohammed Salah</p></div>
                        <div className='tally'><p>23</p></div>
                    </div>
                    <div className='line'>
                        <div className='stat-player goals'><p>Son Heung-Min</p></div>
                        <div className='tally'><p>22</p></div>
                    </div>
                    <div className='line'>
                        <div className='stat-player goals'><p>Cole Palmer</p></div>
                        <div className='tally'><p>20</p></div>
                    </div>
                </div>
                <div className='stats-box assisters'>
                    <div className='topic line'><p>ASSISTS</p></div>
                    <div className='line'>
                    <div className='stat-player assits'><p>Cole Palmer</p></div>
                    <div className='tally'><p>14</p></div>
                    </div>
                    <div className='line'>
                    <div className='stat-player assits'><p>Kevin De Bruyne</p></div>
                    <div className='tally'><p>12</p></div>
                    </div>
                    <div className='line'>
                    <div className='stat-player assits'><p>Martin Odegaard</p></div>
                    <div className='tally'><p>10</p></div>
                    </div>
                    <div className='line'>
                    <div className='stat-player assits'><p>Kieran Trippier</p></div>
                    <div className='tally'><p>8</p></div>
                    </div>
                    <div className='line'>
                    <div className='stat-player assits'><p>Bruno Fernandes</p></div>
                    <div className='tally'><p>7</p></div>
                    </div>
                </div>
                <div className='stats-box yellow-cards'>
                    <div className='topic line'><p>YELLOW CARDS</p></div>
                    <div className='line'>
                    <div className='stat-player yellow'><p>John McGinn</p></div>
                    <div className='tally'><p>10</p></div>
                    </div>
                    <div className='line'>
                    <div className='stat-player yellow'><p>Casimero</p></div>
                    <div className='tally'><p>8</p></div>
                    </div>
                    <div className='line'>
                    <div className='stat-player yellow'><p>Yves Bissouma</p></div>
                    <div className='tally'><p>7</p></div>
                    </div>
                    <div className='line'>
                    <div className='stat-player yellow'><p>Kieran Trippier</p></div>
                    <div className='tally'><p>6</p></div>
                    </div>
                    <div className='line'>
                    <div className='stat-player yellow'><p>Declan Rice</p></div>
                    <div className='tally'><p>4</p></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Stats