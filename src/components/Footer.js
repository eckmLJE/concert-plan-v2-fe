import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-title">ConcertPlan</div>
      <div className="footer-content">
        <div className="footer-item">A demo by Lucas Eckman</div>
        <div className="footer-item">React, Redux, Connected Router, JWT/bcrypt</div>
        <div className="footer-item">
          Visit <a href="http://www.lucaseckman.com" className="lucas-home">lucaseckman.com</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
