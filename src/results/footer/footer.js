import './footer.css'
import {Link} from 'react-router-dom'

function Footer() {
    const date = new Date()
    const year = date.getUTCFullYear()
    console.log(year)
    return (
        <>
            <div className='footer-House'>
                <div className='footer-Box'>
                    <div className='footee'>
                        <div className='footer-Slide'>
                            <div className='each-Slide'><p><Link to='/home'>Home</Link></p></div>
                            <div className='each-Slide'><p><Link to='/matches'>Matches</Link></p></div>
                            <div className='each-Slide'><p><a href='https://www.google.com/search?q=epl&oq=e&gs_lcrp=EgZjaHJvbWUqBggBEEUYOzIGCAAQRRg5MgYIARBFGDsyBggCEEUYOzIGCAMQRRg7MgYIBBBFGDwyBggFEEUYPDIGCAYQRRg8MgYIBxBFGDzSAQo1MTU2MDZqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8#wptab=si:ACC90nycDzs09chBzsA8de3cUDYRXukDd14AaFRpk98kQksU04uTWF7ibHFpynIyybkuxrLsI8AFmZgkDfD6vs3dN11XuGiy9lDxHrHzGz6JY6w5y8Z-IZktjjozJGeZza4QSQKQ53N5TetQjUZlRNhLn0lUWk83r5KpwcaovcJd-ca3tvD9u8E%3D' target="_blank" rel="noopener noreferrer">Clubs</a></p></div>
                            <div className='each-Slide'><p><Link to='/results'>Results</Link></p></div>
                            <div className='each-Slide'><p><a href='https://fantasy.premierleague.com/' target="_blank" rel="noopener noreferrer" >Fantasy</a></p></div>
                        </div>
                        <div className='footer-Slide'>
                            <div className='each-Slide'><p><a href='https://www.premierleague.com/footballandcommunity/youth-development' target="_blank" rel="noopener noreferrer">Youth Development</a></p></div>
                            <div className='each-Slide'><p><a href='https://www.premierleague.com/footballandcommunity/NoRoomForRacism' target="_blank" rel="noopener noreferrer">No Room for Racism</a></p></div>
                            <div className='each-Slide'><p><a href='https://www.premierleague.com/epl' target="_blank" rel="noopener noreferrer">ePremier League</a></p></div>
                            <div className='each-Slide'><p><a href='https://www.hublot.com/' target="_blank" rel="noopener noreferrer">Hublot</a></p></div>
                            <div className='each-Slide'><p><a href='https://www.ea.com/en-gb/games/ea-sports-fc' target="_blank" rel="noopener noreferrer">EA Sports</a></p></div>
                        </div>
                        <div className='footer-Slide'>
                            <div className='each-Slide'><p><a href='https://www.premierleague.com/hall-of-fame' target="_blank" rel="noopener noreferrer">Hall of Fame</a></p></div>
                            <div className='each-Slide'><p><a href='https://www.premierleague.com/managers' target="_blank" rel="noopener noreferrer">Managers</a></p></div>
                            <div className='each-Slide'><p><a href='https://www.premierleague.com/referees' target="_blank" rel="noopener noreferrer">Referees</a></p></div>
                            <div className='each-Slide'><p><a href='https://www.premierleague.com/tickets' target="_blank" rel="noopener noreferrer">Tickets</a></p></div>
                            <div className='each-Slide'><p><a href='https://www.premierleague.com/contact/faqs' target="_blank" rel="noopener noreferrer">FAQs</a></p></div>
                        </div>
                    </div>
                    <div className='socials'>
                        <p>JOIN ALL OUR SOCIAL NETWORKS</p>
                        <div className='socials-logos-house'>
                            <div className='logo facebook'><a href='https://www.facebook.com/premierleague' target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-facebook"></i></a></div>
                            <div className='logo x'><a href='https://www.instagram.com/plinusa/' target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-square-instagram"></i></a></div>
                            <div className='logo instagram'><a href='https://twitter.com/premierleague' target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-twitter"></i></a></div>
                            <div className='logo pinterest'><a href='https://www.tiktok.com/@premierleague' target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-tiktok"></i></a></div>
                        </div>
                    </div>
                </div>
                <div className='copyright'>
                    <p>@{year} All Copyright Reserved</p>
                </div>
            </div>
        </>
    )
}

export default Footer 