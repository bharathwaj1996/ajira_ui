import './AddressComponent.css'
import React from 'react';

function AddressComponent(){
    return(
        <div className='address-box'>
            <div className='address-box-title'>
                My Profile
            </div>

            <div className='form-class'>
                <form onSubmit={handleSubmit}>
                    <div>
                        <span ><input className='input-width margin-class' type='text' placeholder='First Name'></input></span>
                        <span><input className='input-width' type='text' placeholder='Last Name'></input></span>
                    </div>
                    <br></br>
                    <br></br>
                    <div>
                    <span><input className='input-width1' type='text' placeholder='Email'></input></span>
                    </div>
                    <br></br>
                    <br></br>
                    <div>
                    <span><input className='input-width1' type='text' placeholder='Phone Number'></input></span>
                    </div>
                    <br></br>
                    <br></br>
                    <div>
                    <span><input className='input-width1' type='text' placeholder='Password'></input></span>
                    </div>
                    <br></br>
                    <br></br>
                    <div>
                    <span><input className='input-width1' type='text' placeholder='Confirm Password'></input></span>
                    </div>
                    <br></br>
                    <br></br>
                    <button className='address-button' type='submit'>Add New Address</button>
                </form>

            </div>

        </div>

    )
    function handleSubmit(e){
        e.preventDefault();
    }
}
export default AddressComponent;

