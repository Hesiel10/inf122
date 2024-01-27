"use client";

import Image from "next/image";
import styles from './portafol.module.css';
import { useEffect, useState } from 'react';
import perfil_pictue from './images/perfil_picture.jpeg';
import bussines from './images/bussiness_man.png';
import hero from './images/Hero_2.png';
import issima from './images/issima_page.png';
import kitchen from './images/kitchen.jpeg';
import mobile from './images/mobile_app.png';
import wall from './images/pictures_wall.jpeg';
import git from './icons/github.svg';
import downloadd from './icons/download.svg';
import link from './icons/link.svg';
import linkedin from './icons/linkedin.svg';
import twitter from './icons/twitter.svg';
import youtube from './icons/youtube.svg';

function Portafolio() {
    useEffect(() => {

    }, []);
    function download() {
        alert("Downloading Document");
    }

    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <div className={styles.profile}>
                    <figure className={styles.profileImage}>
                        <Image src={perfil_pictue} alt="Foto de perfil" width={215} height={215} className={styles.profileImage} />
                    </figure>
                    <div className={styles.profileInfo}>
                        <h1>Victor Alvarado</h1>
                        <p>Software Engineer</p>
                        <div className={styles.profileSocial}>
                            <a href="https://github.com" target="_blank">
                                <Image src={git} alt="github" className={styles.profileSocialImg} />
                            </a>
                            <a href="https://twitter.com" target="_blank">
                                <Image src={twitter} alt="twitter" className={styles.profileSocialImg} />
                            </a>
                            <a href="https://linkedin.com" target="_blank">
                                <Image src={linkedin} alt="linkedin" className={styles.profileSocialImg} />
                            </a>
                            <a href="https://youtube.com" target="_blank">
                                <Image src={youtube} alt="youtube" className={styles.profileSocialImg} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className={styles.facts}>
                    <div className={styles.factItem}>
                        <h2>7</h2>
                        <p>Years of work experience</p>
                    </div>
                    <div className={styles.factItem}>
                        <h2>50+</h2>
                        <p>Completed projects</p>
                    </div>
                    <div className={styles.factItem}>
                        <h2>20+</h2>
                        <p>Satisfied customers</p>
                    </div>
                </div>

                <div className={styles.buttons}>
                    <button className={styles.btnPrimary} onClick={download}>
                        <div className={styles.btnContent}>
                            <p>Download CV</p>
                            <Image src={downloadd} alt="youtube" width={36} height={36} className={styles.btnPrimaryImg} />
                        </div>
                    </button>
                    <a className={styles.btnSecondary} href="mailto:contact@me.com">
                        <div className={styles.btnContent}>
                            <p>Contact me</p>
                        </div>
                    </a>
                </div>

                <div className={styles.tabs}>
                    <button className="tabsBackgroundItem active">
                        <p className={styles.tabsBackgroundItemText}>Portfolio</p>
                    </button>
                    <button className={styles.tabsBackgroundItem}>
                        <p className={styles.tabsBackgroundItemText}>Skills</p>
                    </button>
                </div>

                <div className={styles.projectc}>
                    <div className={styles.contentCardImage}>
                        <Image className={styles.image} src={hero} width={360} height={360}
                            alt="Foto" />
                        <div className={styles.contentCardImageOverlay}></div>
                        <div className={styles.contentCardImageDetail}>
                            <p className={styles.title}>SmarterTrading411</p>
                            <p className={styles.detail}>Landing page of SmarterTrading411 created using WordPress</p>
                            <button className={styles.btn}>
                                <Image src={link} alt="youtube" width={36} height={36} />
                            </button>
                        </div>

                        <div className={styles.contentCardImage}>
                            <Image className={styles.image} src={bussines} width={36} height={36}
                                alt="Foto" />
                            <div className={styles.contentCardImageOverlay}></div>
                        </div>


                        <div className={styles.contentCardImage}>
                            <Image className="image" src={wall} width={36} height={36}
                                alt="Foto" />
                            <div className={styles.contentCardImageOverlay}></div>
                        </div>


                        <div className={styles.contentCardImage}>
                            <Image className="image" src={kitchen} width={36} height={36}
                                alt="Foto" />
                            <div className={styles.contentCardImageOverlay}></div>
                        </div>


                        <div className={styles.contentCardImage}>
                            <Image className={styles.image} src={mobile} width={36} height={36}
                                alt="Foto" />
                            <div className={styles.contentCardImageOverlay}></div>
                        </div>


                        <div className={styles.contentCardImage}>
                            <Image className={styles.image} src={issima} width={36} height={36}
                                alt="Foto" />
                            <div className={styles.contentCardImageOverlay}></div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Portafolio;
