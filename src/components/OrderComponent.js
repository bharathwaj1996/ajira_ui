import React from 'react'
import order_pic from '../assets/Rectangle 6.png'
import './OrderComponent.css'
import downarrow from '../assets/Vector 2.png'
import AppFooter from './AppFooter'

function OrderComponent (){
    return(
        <div className='order-border'>
            <div className='order-title'>My Orders</div>

            <div className='order-body'>
                <span className='order-pic'><img src={order_pic}></img></span>
                <span className='order-det'>
                    <div className='order-det-text'>
                        <span className='float-left'>order#1233445</span>
                        <span className='float-right'>  Credit card payment</span>
                    </div>
                    <br></br>
                    <br></br>
                    <div className='order-highlight'>
                        <span  className='float-left'>Made up white checkered slim fit shirt</span>
                        <spa  className='float-right'>Rs 1,899</spa>
                    </div>
                    <br></br><br></br>
                    <div className='order-det-text'>
                        <span  className='float-left'>Delivery excepted by 30 Aug </span>
                        <span  className='float-right'><img src={downarrow}></img></span>
                    </div>
                </span>
            </div>

            <div className='order-body'>
                <span className='order-pic'><img src={order_pic}></img></span>
                <span className='order-det'>
                    <div className='order-det-text'>
                        <span className='float-left'>order#1233445</span>
                        <span className='float-right'>  Credit card payment</span>
                    </div>
                    <br></br>
                    <br></br>
                    <div className='order-highlight'>
                        <span  className='float-left'>Made up white checkered slim fit shirt</span>
                        <spa  className='float-right'>Rs 1,899</spa>
                    </div>
                    <br></br><br></br>
                    <div className='order-det-text'>
                        <span  className='float-left'>Delivery excepted by 30 Aug </span>
                        <span  className='float-right'><img src={downarrow}></img></span>
                    </div>
                </span>
            </div>

            <div className='order-body'>
                <span className='order-pic'><img src={order_pic}></img></span>
                <span className='order-det'>
                    <div className='order-det-text'>
                        <span className='float-left'>order#1233445</span>
                        <span className='float-right'>  Credit card payment</span>
                    </div>
                    <br></br>
                    <br></br>
                    <div className='order-highlight'>
                        <span  className='float-left'>Made up white checkered slim fit shirt</span>
                        <spa  className='float-right'>Rs 1,899</spa>
                    </div>
                    <br></br><br></br>
                    <div className='order-det-text'>
                        <span  className='float-left'>Delivery excepted by 30 Aug </span>
                        <span  className='float-right'><img src={downarrow}></img></span>
                    </div>
                </span>
            </div>

            <div className='order-body'>
                <span className='order-pic'><img src={order_pic}></img></span>
                <span className='order-det'>
                    <div className='order-det-text'>
                        <span className='float-left'>order#1233445</span>
                        <span className='float-right'>  Credit card payment</span>
                    </div>
                    <br></br>
                    <br></br>
                    <div className='order-highlight'>
                        <span  className='float-left'>Made up white checkered slim fit shirt</span>
                        <spa  className='float-right'>Rs 1,899</spa>
                    </div>
                    <br></br><br></br>
                    <div className='order-det-text'>
                        <span  className='float-left'>Delivery excepted by 30 Aug </span>
                        <span  className='float-right'><img src={downarrow}></img></span>
                    </div>
                </span>
            </div>

            
            
        </div>
    )
}
export default OrderComponent;