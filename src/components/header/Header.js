import React,{useState} from 'react'
import './Header.css'


function Header() {
    const [date, setDate] = useState(new Date());
    return (
        <div>
            <div className='header'>
                <div className='title'><span>{date.toDateString()}</span> DAILY TODO APP</div>
                <div className='header-caption'>
                    <marquee behavior="alternate">Plan your daily activities ahead of time</marquee>
                </div>
                <div className='header-caption-mobile'>
                    <marquee>Plan your daily activities ahead of time</marquee>
                </div>
            </div>
        </div>
    )
}

export default Header