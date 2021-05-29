import React,{useState} from 'react'
import Style from './Chatting.module.css';
import {BsMoon} from 'react-icons/bs'
import {CgProfile} from 'react-icons/cg';
function Chatting() {
    const [darkMode,setdarkMode]=useState(true)

    if(darkMode){ document.getElementsByTagName("body")[0].style.backgroundImage='none';
    document.getElementsByTagName("body")[0].style.backgroundColor='#333';

}
else{
    document.getElementsByTagName("body")[0].style.backgroundImage='none';
    document.getElementsByTagName("body")[0].style.backgroundColor='white';

}
    const ActivateDarkmode=()=>{
    setdarkMode(!darkMode) }
    return (
        
        <div className={Style.Chat} >
            <header className={Style.mainHeader} style={{backgroundColor:darkMode?'#333':'white'}}>
                <h1 style={{color:darkMode?'white':'black'}} >Messages</h1>
                <h1 style={{color:darkMode?'white':'black'}}  onClick={ActivateDarkmode}><BsMoon/></h1>
            </header>
            <section className={Style.availableContacts}>
                <div style={{color:darkMode?'white':'black'}} ><CgProfile size="80" color="green"/>Mohamed ammar</div>
                <div style={{color:darkMode?'white':'black'}}><CgProfile size="80" color="green"/>Youssef ilsaqa</div>
                <div style={{color:darkMode?'white':'black'}}><CgProfile size="80" color="green"/>Mohab Elhbashy</div>
                <div style={{color:darkMode?'white':'black'}}><CgProfile size="80" color="green"/>Mohab Elhbashy</div>
                <div style={{color:darkMode?'white':'black'}}><CgProfile size="80" color="green"/>Mohab Elhbashy</div>
                <div style={{color:darkMode?'white':'black'}}><CgProfile size="80" color="green"/>Mohab Elhbashy</div>
                <div style={{color:darkMode?'white':'black'}}><CgProfile size="80" color="green"/>Mohab Elhbashy</div>
                <div style={{color:darkMode?'white':'black'}}><CgProfile size="80" color="green"/>Mohab Elhbashy</div>
                <div style={{color:darkMode?'white':'black'}}><CgProfile size="80" color="green"/>Mohab Elhbashy</div>



                


            </section>
        </div>
    )
}

export default Chatting
