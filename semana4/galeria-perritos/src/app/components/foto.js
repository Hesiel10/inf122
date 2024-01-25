"use client";
import Image from 'next/image';
import style from './foto.module.css';
import { useState, useEffect } from 'react';

export function Foto(){
    const [perrito, setPerrito]=useState("/vercel.svg");
    const url = "https://dog.ceo/api/breeds/image/random";
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setPerrito(data.message)
            })
    }, [])
    return(
        <div className={style.contenedor}>
            <Image src={perrito} height={350} width={350} />
        </div>
    )
}
