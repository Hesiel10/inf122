import React from "react";
import "../styles/Portafolio.css";

export function Portfolio(){
    function download (){
        alert("Downloading Document")
    }
    return (
        <div className="main">
          <div className="container">
          <div className="profile">
    
    <figure className="profile-Image">
    <Image src={require("../images/perfil_picture.jpeg")}
        alt="Foto de perfil" />
    </figure>
    
    <div className="profile-info">
      <h1>Victor Alvarado</h1>
      <p>Software Engineer</p>
      <div className="profile-social">
        <a href="https://github.com" target="_blank">
        <Image src={require("../icons/github.svg").default} alt="github" className="profile-social-Image" />

        </a>
        <a href="https://twitter.com" target="_blank">
          <Image src={require("../icons/twitter.svg").default} alt="twitter" className="profile-social-Image" />
        </a>
        <a href="https://linkedin.com" target="_blank">
          <Image src={require("../icons/linkedin.svg").default} alt="linkedin" className="profile-social-Image" />
        </a>
        <a href="https://youtube.com" target="_blank">
          <Image src={require("../icons/youtube.svg").default} alt="youtube" className="profile-social-Image" />
        </a>
      </div>
    </div>
    </div>
    
            <div className="facts">
              <div className="fact-item">
                <h2>7</h2>
                <p>Years of work experience</p>
              </div>
              <div className="fact-item">
                <h2>50+</h2>
                <p>Completed projects</p>
              </div>
              <div className="fact-item">
                <h2>20+</h2>
                <p>Satisfied customers</p>
              </div>
            </div>
    
            <div className="buttons">
              <button className="btn-primary" onClick={download}>
                <div className="btn-content">
                  <p>Download CV</p>
                  <Image src={require("../icons/download.svg").default} alt="arrow" className="btn-primary-Image" />
                </div>
              </button>
              <a className="btn-secondary" href="mailto:contact@me.com">
                <div class="btn-content">
                  <p>Contact me</p>
                </div>
              </a>
            </div>
    
            <div className="tabs">
              <button className="tabs-background-item active">
                <p className="tabs-background-item-text">Portfolio</p>
              </button>
              <button className="tabs-background-item">
                <p className="tabs-background-item-text">Skills</p>
              </button>
    
            </div>
    
            <div className="project-container">
              <div className="content-card-Image">
                <Image className="image" src={require("../images/Hero_2.png")}
                    alt="Foto" />
                <div className="content-card-Image-overlay"></div>
                <div class="content-card-Image-detail">
                  <p className="title">SmarterTrading411</p>
                  <p className="detail">Landing page of SmarterTrading411 created using WordPress</p>
                  <button className="btn">
                    <Image src={require("../icons/link.svg").default} alt="link"/>
                  </button>
                </div>
              </div>
              <div className="content-card-Image">
                <Image className="image" src={require("../images/bussiness_man.png")}
                    alt="Foto" />
                <div className="content-card-Image-overlay"></div>
              </div>
              <div className="content-card-Image">
                <Image className="image" src={require("../images/pictures_wall.jpeg")}
                    alt="Foto" />
                <div className="content-card-Image-overlay"></div>
              </div>
              <div className="content-card-Image">
                <Image className="image" src={require("../images/kitchen.jpeg")}
                    alt="Foto" />
                <div className="content-card-Image-overlay"></div>
              </div>
              <div className="content-card-Image">
                <Image className="image" src={require("../images/mobile_app.png")}
                    alt="Foto" />
                <div className="content-card-Image-overlay"></div>
              </div>
              <div className="content-card-Image">
                <Image className="image" src={require("../images/issima_page.png")}
                    alt="Foto" />
                <div className="content-card-Image-overlay"></div>
              </div>
            </div>
          </div>
        </div>
      );
}