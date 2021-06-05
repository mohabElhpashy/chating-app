    import React,{useState} from 'react'
    import Style from './Chatting.module.css';
    import {BsMoon} from 'react-icons/bs'
    import {CgProfile} from 'react-icons/cg';
    function Chatting() {
        const [darkMode,setdarkMode]=useState(true)
        const [users]=useState(["Mohab Elhbashy",
        "Mohab Elhbashy",
        "Mohab Elhbashy",
        "Mohab Elhbashy",
        "Mohab Elhbashy",
        "Mohab Elhbashy",
        "Mohab Elhbashy"])

        if(darkMode){ document.getElementsByTagName("body")[0].style.backgroundImage='none';
        document.getElementsByTagName("body")[0].style.backgroundColor='#333';

    }
    else{
        document.getElementsByTagName("body")[0].style.backgroundImage='none';
        document.getElementsByTagName("body")[0].style.backgroundColor='white';

    }
        const Activate_Darkmode=()=>{
        setdarkMode(!darkMode) }
        
        const Error_Message=(message:string)=>{
            console.log(message)
        }
        const is_Data_valid=(email:string)=>{
        
            return !email||!email.includes('@')         

        }
        const create_user=(email:string,password:string)=>{
        if(is_Data_valid(email)){
            Error_Message('Wrong Email or Not Vaild')
        } 
        else{
            const user=build_user(email,password)
            console.log(user)
        }
            

        }
        
    const build_user=(email:string,password:string)=>{
        return {
            email:email,
            password:password
        }
    }
    create_user('mohab@ohamed','01119548731')

        return (
            
            <div className={Style.Chat} >
                <header className={Style.mainHeader} style={{backgroundColor:darkMode?'#333':'white'}}>
                    <h1 style={{color:darkMode?'white':'black'}} >Messages</h1>
                    <h1 style={{color:darkMode?'white':'black'}}  onClick={Activate_Darkmode}><BsMoon/></h1>
                </header>
                <section className={Style.availableContacts}>
                    {users.map(user_data=>{
                return (
    <div  style={{color:darkMode?'white':'black'}} ><CgProfile size="80" color="green"/>{user_data}</div>)})}



                    


                </section>
            </div>
        )
    }

    export default Chatting
