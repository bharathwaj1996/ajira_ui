import React from 'react';
import './mainComponent.css';
import mainPic from '../assets/3271O-TCM2063-SGI-3x2@2x 1.svg';
import star from '../assets/Group 99.png'
import AppFooter from './AppFooter';


function MainComponent(){
    return(
        <div className='main-div'>
            <div>
            <img src={mainPic}></img>
            </div>
            <div className='second-div'>
               <div className='text'><span>Summer</span> is here</div>
               <div className='text1'>So is our collection</div>
            </div>
            <div className='third'>
                <div className='textThree'><span>Wrinkle-free</span> t-shirts</div>
            </div>
            <div className='fourth'>
                <div className='text-four'><span>Stain-free</span> denim shirts</div>
            </div>
            
            <div class='collections'>
            <div class='collection-title'>
                    LATEST COLLECTION
                </div>
        <div>
                <span className='pic'>
                        <div className='info'>
                           Printed polo t-shirt
                        </div>
                        <div className='highlight'>1,499</div>
                </span>
                <span className='pic'>
                <div className='info'>
                           Printed polo t-shirt
                        </div>
                        <div className='highlight'>1,499</div>
                </span>
                <span className='pic'>
                <div className='info'>
                           Printed polo t-shirt
                        </div>
                        <div className='highlight'>1,499</div>
                </span>
                <span className='pic'>
                <div className='info'>
                           Printed polo t-shirt
                        </div>
                        <div className='highlight'>1,499</div>
                </span>
               
               </div> 
               
               
              
                
                
                
                
            </div>

            <div className='testimonials'>
                <div className='testText'>TESTIMONIALS</div>
                <span class='test1'>
                    <div className='card'>
                           <div className='cardBody'>
                               <div className='pic1'>

                               </div>
                               <span className='floatName'>Vikas</span>
                               <span className='floatRating'><img src={star}></img></span><br/><br></br>
                               <div className='reviewText'>
                                   Love the cloth material.So breeezy and light and durable to. must say I must say the jeans I bought is worth the price
                               </div>

                           </div>
                    </div>
                </span>
                <span class='test2'>
                <div className='card'>
                          <div className='cardBody'>
                          <div className='pic1'>

</div>
<span className='floatName'>Vikas</span>
<span className='floatRating'><img src={star}></img></span><br/><br></br>
<div className='reviewText'>
    Love the cloth material.So breeezy and light and durable to. must say I must say the jeans I bought is worth the price
</div>
                           </div>
                    </div>
                </span>
                <span class='test3'>
                <div className='card'>
                <div className='cardBody'>
                <div className='pic1'>

</div>
<span className='floatName'>Vikas</span>
<span className='floatRating'><img src={star}></img></span><br/><br></br>
<div className='reviewText'>
    Love the cloth material.So breeezy and light and durable to. must say I must say the jeans I bought is worth the price
</div>
                               </div>
                    </div>

                </span>

            </div>

            <div className='subscribe'>
                
               <div className='subscribe-header'>
                   GET COUPONS AND STYLE GUIDES
               </div>
               
               <div className='subscribe-sub-text'>
                   Subscribe to our Newsletter
               </div>
               <div>
                   <input className='input-field' placeholder='E-mail' type='text'></input>
                   <button onClick={handleSubmit}type='submit'>Subscribe</button>
               </div>
            </div>
            <footer className='app-footer'>
            <AppFooter/>
            </footer>
        </div>   

    )
    function handleSubmit(e){
        e.preventDefault();

    }
}

export default MainComponent;