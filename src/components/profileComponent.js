import './profileComponent.css'
import React,{useState} from 'react'
import profilePic from '../assets/image 1.png'
import arrow from '../assets/arrow_icon.png'
import OrderComponent from './OrderComponent';
import AppFooter from './AppFooter';
import AddressComponent from './AddressCompnent';

function ProfileCmp(){
    const[currentView,setView]=useState('order');
    return(
        <div className='background'>
           <div className='title-div'>Home/My Profile</div>
           <table>
               <tr className='profileInfo'>
                   <td>
                   <div className='profile-picture'>
                        <span><img src={profilePic}></img></span>
                        <span className='center-align'>Grishk &nbsp;</span>
                        <span className='mailTextColor'>grishkiam@gmail.com</span>
                   </div>

                   <div className='option-bar'>
                       <div onClick={changeView1}> 
                          <span className='main-option'>My Profile</span>
                          
                           <span><img src={arrow}></img></span>
                           
                           <br></br>
                           <p> Notifications,password</p>
                       </div>
                       <br></br>
                       <div onClick={changeView}>
                       <span className='main-option'>My Orders</span>
                          
                          <span><img src={arrow}></img></span>
                          
                          <br></br>
                          <p> Already have 12 orders</p>
                       </div>
                       <br></br>
                       <div className='border-class'>
                       <span className='main-option'>Shipping Address</span>
                          
                          <span><img src={arrow}></img></span>
                          
                          <br></br>
                          <p>Address</p> 
                       </div>

                   </div>
                   </td>

                   <td>{
                   currentView=='order'?<OrderComponent/>:<AddressComponent/>
               }
               </td>
               </tr>
               {/* <tr className='cart1'>
                  </tr> */}
                  
                      
                  
           </table>
           <div className='profile-footer'>
           <AppFooter></AppFooter>
           </div>
        </div>
    )
    function changeView(e){
        setView('order')
    }
    function changeView1(e){
        setView('form')
    }
    
}

export default ProfileCmp;