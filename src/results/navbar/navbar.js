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
                  <p><a href='https://www.premierleague.com/clubs' target="_blank" rel="noopener noreferrer">CLUBS</a></p>
               </div>
               <div className='Nav-Link'>
                  <p><Link to={'/results'}>RESULTS</Link></p>
               </div>
               <div className='Nav-Link'>
                  <p><a href='https://www.premierleague.com/transfers' target="_blank" rel="noopener noreferrer" >TRANSFERS</a></p>
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
               <p><a href='https://www.premierleague.com/clubs' target="_blank" rel="noopener noreferrer">CLUBS</a></p>
            </div>
            <div className='items'>
               <p><Link to={'/results'}>RESULTS</Link></p>
            </div>
            <div className='items'>
               <p><a href='https://www.premierleague.com/transfers' target="_blank" rel="noopener noreferrer" >TRANSFERS</a></p>
            </div>
            <div className='items'>
               <p><a href='https://fantasy.premierleague.com/' target="_blank" rel="noopener noreferrer" >FANTASY</a></p>
            </div>
         </div>
      </div>
   )
}

export default Navbar