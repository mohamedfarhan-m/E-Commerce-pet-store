import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'
const Contact = () => {
  return (
    <div className='contact'>
    <div className='contact-col'>
        <h3>Send us  a Message <img src={msg_icon} alt="" /> </h3>
        <p> fjdaf dfhdk rieooe eheacn ncxjlzd iodfhsd hd classNamedshfosdfj 
        difsifidsjc dfhdf dohfdi dshfdfhdshfd ifhiodfid
        fdsijfiodjfijdfijd dfhidjfiodfidjffsodhfiofh</p>
        <ul>
            <li><img src={mail_icon} alt=""/> Contact@Farhan.dev</li>
            <li><img src={phone_icon} alt=""/>+145464644</li>
            <li><img src={location_icon} alt=""/>45 jfdj djfjkda dhfdjfk dfd<br/> kladfj fjdaj </li>
        </ul>
    </div>
    <div className='contact-col'>
        <form>
            <label>Your Name</label>
            <input type="text" name='name' placeholder='Enter your name' required/>
            <label>Phone Number</label>
            <input type="tel" name='phone' placeholder='Enter your mobile number' required/>
            <label> Write Your Messsage here</label>
            <textarea name="message" id=""  rows="6" placeholder='Entere your message' required></textarea>
            <button type="submit" className='btn dark-btn'>Submit now <img src={white_arrow} alt=""/></button>
            
        </form>

        <span>sending</span>
    </div>
      
    </div>
  )
}

export default Contact
