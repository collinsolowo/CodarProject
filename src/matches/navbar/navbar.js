import './navbar.css'
import { Link } from 'react-router-dom'
import NavLogo from './epllogo.png'
//  import SlideNav from './homeScript.js'
function Navbar() {
   function SlideNav() {
      const body = document.body
      const navBar = document.querySelector('.Nav-Slide')
      navBar.classList.toggle('show')
      // body.style.overflow = 'hidden'
      console.log(navBar)
   }
   return (
      <div>
         <div className='Nav-House'>
            <div className='Nav-Logo'><img src={NavLogo} alt='' /></div>
            <div className='Nav-Contents'>
               <div className='Nav-Link'>
                  <p><Link to={'/home'}>HOME</Link></p>
               </div>
               <div className='Nav-Link'>
                  <p><Link to={'/matches'}>MATCHES</Link></p>
               </div>
               <div className='Nav-Link'>
                  <p><a href='https://www.google.com/search?q=epl&oq=e&gs_lcrp=EgZjaHJvbWUqBggBEEUYOzIGCAAQRRg5MgYIARBFGDsyBggCEEUYOzIGCAMQRRg7MgYIBBBFGDwyBggFEEUYPDIGCAYQRRg8MgYIBxBFGDzSAQo1MTU2MDZqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8#wptab=si:ACC90nycDzs09chBzsA8de3cUDYRXukDd14AaFRpk98kQksU04uTWF7ibHFpynIyybkuxrLsI8AFmZgkDfD6vs3dN11XuGiy9lDxHrHzGz6JY6w5y8Z-IZktjjozJGeZza4QSQKQ53N5TetQjUZlRNhLn0lUWk83r5KpwcaovcJd-ca3tvD9u8E%3D' target="_blank" rel="noopener noreferrer">CLUBS</a></p>
               </div>
               <div className='Nav-Link'>
                  <p><Link to={'/results'}>RESULTS</Link></p>
               </div>
               <div className='Nav-Link'>
                  <p><Link to={'/transfers'}>TRANSFERS</Link></p>
               </div>
               <div className='Nav-Link'>
               <p><a href='https://fantasy.premierleague.com/' target="_blank" rel="noopener noreferrer" >FANTASY</a></p>
               </div>
            </div>
            {/* <div className='Nav-Contacts'>
               {/* <div className='consultation-box'>
                  <p>Free Consultation</p>
               </div>
            </div> */} 
            <div className='Res-Nav-Icon' onClick={SlideNav}>
            <i class="fa-solid fa-bars"></i>
            </div>
         </div>
         <div className='Nav-Slide'>
            <div className='items'>
               <p><Link to={'/home'}>HOME</Link></p>
            </div>
            <div className='items'>
               <p><Link to={'/matches'}>MATCHES</Link></p>
            </div>
            <div className='items'>
               <p><Link to={'/https://www.google.com/search?q=epl&oq=e&gs_lcrp=EgZjaHJvbWUqBggBEEUYOzIGCAAQRRg5MgYIARBFGDsyBggCEEUYOzIGCAMQRRg7MgYIBBBFGDwyBggFEEUYPDIGCAYQRRg8MgYIBxBFGDzSAQo1MTU2MDZqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8#wptab=si:ACC90nycDzs09chBzsA8de3cUDYRXukDd14AaFRpk98kQksU04uTWF7ibHFpynIyybkuxrLsI8AFmZgkDfD6vs3dN11XuGiy9lDxHrHzGz6JY6w5y8Z-IZktjjozJGeZza4QSQKQ53N5TetQjUZlRNhLn0lUWk83r5KpwcaovcJd-ca3tvD9u8E%3D'}>CLUBS</Link></p>
            </div>
            <div className='items'>
               <p><Link to={'/results'}>RESULTS</Link></p>
            </div>
            <div className='items'>
               <p><Link to={'/transfers'}>TRANSFERS</Link></p>
            </div>
            <div className='items'>
               <p><a href='https://fantasy.premierleague.com/' target="_blank" rel="noopener noreferrer" >FANTASY</a></p>
            </div>   
         </div>
      </div>
   )
}  

export default Navbar