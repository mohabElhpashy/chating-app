import React from 'react'
import Style from './Chatting.module.css';
import {BsMoon} from 'react-icons/bs'
import {CgProfile} from 'react-icons/cg';

function Chatting() {
    return (
        <div className={Style.Chat}>
            <header className={Style.mainHeader}>
                <h1 >Chats</h1>
                <h1><BsMoon/></h1>
            </header>
            <section className={Style.availableContacts}>
                <div><CgProfile size="85" color="red"/></div>
                <div><CgProfile size="85" color="red"/></div>
                <div><CgProfile size="85" color="white"/></div>
                <div><CgProfile size="85" color="white"/></div>
                <div><CgProfile size="85" color="white"/></div>
                <div><CgProfile size="85" color="white"/></div>
                <div><CgProfile size="85" color="white"/></div>
                <div><CgProfile size="85" color="white"/></div>


            </section>
        </div>
    )
}

export default Chatting
