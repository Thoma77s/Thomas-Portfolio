import React from 'react';
import Iphone from '../../assets/Images/white-iphone.png';
import LinkedIn from '../../assets/Images/Linkedin-Logo.png';
import GitHubImage from '../../assets/Images/white-github-logo.png';
import GmailImage from '../../assets/Images/Gmail-Logo.png';

function Footer () {
  return (
    <section className="contact-info" id="contact-info">
        <div>
        <nav>
            <ul>
                <li>
                    <a href="#phonenumber"> <img src={Iphone}/></a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/thomas-siffermann-741286123/" target="_blank"> <img src={LinkedIn}/></a>
                </li>
                <li>
                    <a href="https://github.com/Thoma77s" target="_blank"> <img src={GitHubImage}/></a>
                </li>
                <li>
                    <a href="#email"> <img src={GmailImage}/></a>
                </li>
            </ul>
        </nav>
        </div>
    </section>
  );
}

export default Footer;