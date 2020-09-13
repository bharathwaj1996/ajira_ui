import React, { Profiler,useState } from 'react';
import logo from './assets/Group_436.svg';
import search from './assets/baseline-search-24px.png'
import cart from './assets/Path_19.png'
import profile from './assets/Path_41.png'
import phone from './assets/Icon feather-phone-call.png'
import mail from './assets/Icon feather-mail.png'
import social from './assets/Group 214.png'
import fav from './assets/Path 35.png'
import './App.css';
import MainComponent from './components/mainComponent'
import ProfileComp from './components/profileComponent'

function App() {
  const [current,setNewState]=useState('home');
  const footerLinks=['About us',"Delivery Information","Return & Exchange","Technical & Privacy","Order Status"]

  function handleClick(e){
    console.log(e);
    setNewState('profile');
  }
  function handleClick1(e){
    console.log(e);
    setNewState('home')
  }
  return (
    <div className="App">
      <header className="App-header">
        <span onClick={handleClick1} className='appLgo'><img src={logo}></img></span>
        <span className='forMe'>For me</span>
        <span className='jeans'>Jeans</span>
        <span className='shirts'>Shirts</span>
        <span className='t-shirts'>T-Shirts</span>
        <span className='trousers'>Trousers</span>
        <span className='jaggers'>Jaggers</span>
        <span className='shorts'>Shorts</span>
        <span className='iconBar'>
        <span className='search'><img src={search}></img></span>
        <span className='cart'><img src={cart}></img></span>
        {current=='profile'&&
          <span className='cart'><img src={fav}></img></span>
        }
        <span className='profile' onClick={handleClick}><img src={profile}></img></span>
        
        </span>
      </header>
  <div>{
    current=='home'? <MainComponent/>:<ProfileComp/>

    }</div>
      
    </div>
  );
}

export default App;
