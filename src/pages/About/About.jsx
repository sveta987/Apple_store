import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';

import {FormOutlined} from "@ant-design/icons";
import { Typography } from 'antd';
import './About.css'

const About = () => {

  const { Paragraph, Text } = Typography;
  const [myText, setMyText]=useState("044- 149922")

  const [ellipsis, setEllipsis] = useState(true);

  return (
    <>

           
      <div className="about">
        <div className="container">
        <div className="inner">
          <div className="first-part">
            <div className="feedback">
              <div className="title">
                <h2 className='heading'>Feedback</h2>
              </div>
              <div className="address">
                <ul>
                  <li className='li'> <i class="fa-solid fa-location-dot"></i><Paragraph style={{fontSize:18}} copyable className='paragraph'>Roubinyants 2/8,Yerevan Armenia</Paragraph></li>
                  <li  className='li'><i class="fa-solid fa-phone"></i> 
                  <Paragraph
                        editable={{
                        tooltip:"edit text",
                        icon:<FormOutlined/>,
                        onChange:setMyText,
              }}
              >
              {myText}    
              </Paragraph>
                  </li>
                  <li><i class="fas fa-clock"></i>Working hours: Mon-Sat 11։00-20։00</li>
                </ul>
              </div>
              <div className="social-icons">
                <Link to="#" className="fa fa-facebook" />
                <Link to="#" className="fa fa-instagram" />
                <Link to="#" className="fa fa-youtube" />
                <Link to="#" className="fa fa-whatsapp" />
                <Link to="#" className="fa fa-linkedin" />
              </div>
            </div>
            <div className='about-us'>
              <h2 className='title'>About Us</h2>
              <Paragraph
                style={{fontSize:"18px"}}
                ellipsis={{
                rows: 10,
                expandable: true,
                symbol: 'read more',
              }}
              >
              Apple Store is an equal opportunity employer that is committed to inclusion and diversity. We take affirmative action to ensure equal opportunity for all applicants without regard to race, color, religion, sex, sexual orientation, gender identity, national origin, disability, Veteran status, or other legally protected characteristics. Apple is committed to working with and providing reasonable accommodation to applicants with physical and mental disabilities. Apple is a drug-free workplace. Reasonable Accommodation and Drug Free Workplace policy
            </Paragraph>
            </div>
          </div>
          <div className="second-part">
            <div className="map">  
              <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Ab978b43747fbb6fa5dcb90bdaff186446e1762addd30db4edcf38f61b98a7191&amp;source=constructor" width="100%" height="400" frameborder="0"></iframe>
            </div>
            <div className="shop">
              <img src="https://rtlimages.apple.com/cmc/dieter/store/16_9/R051.png" alt="" />
              <p>Our shop in Yerevan</p>
            </div>
          </div>
        </div>
        </div>
      </div>

    </>
  )
}

export default About