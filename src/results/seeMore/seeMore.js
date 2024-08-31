import './seeMore.css'
import images from './eplSlide3.jfif'
function Seemore() {
    return(
        <>
        <div className='see-more-box'>
            <div className='see-more-box-image'>
                <img src={images} alt=''/>
            </div>
            <div className='info-slide'>
                <p>GET THE FULL FIXTURE LIST FOR THE 2024/25 SEASON</p>
                <div>
                <p><a href='https://www.google.com/search?q=premier+league+games&gs_lcrp=EgZjaHJvbWUqBggBEEUYOzIGCAAQRRg5MgYIARBFGDsyBggCEEUYOzIGCAMQRRg7MgYIBBBFGDwyBggFEEUYPDIGCAYQRRg8MgYIBxBFGDzSAQo1MTU2MDZqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8&si=ACC90nxf9KAEpHgHfAikz_8O8Y5Hh0ixj21IrePIxqwFME2hPrAtHgxFMhMJd22o6cAVUtabSJThEHz0rv3ESLFKsWwB_IDhEVyMUaCOxXoM7m8kO3nHJw6AtC9ZAcPdLIsC6eXmZBxJsSxF1qJkU2uRUly-_d__Fz_j9rwBYTzvTfgkZtuuobI%3D&ictx=1&ved=2ahUKEwjx9Ln9vZyIAxXFygIHHX_kBCAQyNoBKAB6BAgWEAA'>Check Fixtures</a></p>
                </div>
            </div>
        </div>
        </>
    )
}

export default Seemore