import React from 'react'
import logo from '../assets/Group_436.svg';
import search from '../assets/baseline-search-24px.png'
import cart from '../assets/Path_19.png'
import profile from '../assets/Path_41.png'
import phone from '../assets/Icon feather-phone-call.png'
import mail from '../assets/Icon feather-mail.png'
import social from '../assets/Group 214.png'
import fav from '../assets/Path 35.png'

function AppFooter(){
    return(
        
        <div>
        <span className='footer-span'>
          <div>About us</div>
          <div>Delivery Information</div>
          <div>Return & Exchange</div>
          <div>Technical & Privacy</div>
          <div>Order Status</div>
        </span>
          <span className='footer-span1'>
       <div>
        <img src={logo}></img>
        </div>
        <div>Stay in touch with us</div>
        <div><img src={social}></img></div>
        </span>
        
        <span className='footer-span3'>
          <div>
            Our Corporate Office:
          </div>
          <div>
            No 7, A2B road,Adyar Rajpuram,
            Tnagar,chennai-642002
          </div>
          <div>
          <img src={mail}></img> &nbsp;sales@madeup.com
          </div>
          <div>
          <img src={phone}></img> &nbsp;044-9999 9999
          </div>
        </span>
        </div>
    )
}

export default AppFooter