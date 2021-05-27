import React,{useState} from 'react'
import Style from './Regest.module.css';
import { BsChatDotsFill } from 'react-icons/bs';


function Regest() {
    const [CheckLogin,setCheckLogin]=useState(true)
    return (
        <div className={Style.RegestContent}>
               <div>
               <BsChatDotsFill size="100" color="#ff7f00"/> 
               <h2 style={{fontWeight:'bold',fontStyle:'italic',color:'white'}}>My Chat . . . </h2>
<h4 style={{fontWeight:'bold',fontStyle:'italic',color:'white'}}>Chat To every one and make more friends</h4>    
<div style={{color:'white'}}>
   <div className={Style.DivLogin}>
       <h2 onClick={()=>setCheckLogin(true)} style={{color:CheckLogin?'orange':'white'}}>Log in</h2> <h2>-</h2>
       <h2 onClick={()=>setCheckLogin(false)} style={{color:!CheckLogin?'orange':'white'}}>Sign up</h2></div> 
           <div className={Style.DivInput} style={{display:CheckLogin?"flex":"none"}} >
                      <input placeholder="Enter User name" type='username'/>
                      <input placeholder='Enter password' type='password'/>
                      <button className={Style.Buttons}>Log In</button>

                  </div>
                  <div className={Style.DivInputSignup} style={{display:!CheckLogin?"grid":"none"}} >
                      <input placeholder="Enter First name" type='text'/>
                      <input placeholder="Enter Last name" type='text'/>
                      <input placeholder="Enter Phone number" type='text'/>
                      <input placeholder="Enter email" type='text'/>
                      <input className={Style.III} placeholder='password' type='password'/><br/>
                      <button className={Style.Buttons}>Sign up</button>

                  </div>
           </div> 
            </div> 
         
           
                   </div>
    )
}

export default Regest
