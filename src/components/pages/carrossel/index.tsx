import React, { useState, useEffect, useRef } from 'react'
import './carrossel.css'
import { motion } from 'framer-motion'
import Imagen1 from '../../../../imagens/img1.png';
import Imagen2 from '../../../../imagens/img2.png';
import Imagen3 from '../../../../imagens/img3.png';
import Imagen4 from '../../../../imagens/img4.png';
import Imagen5 from '../../../../imagens/img5.png';
import Imagen6 from '../../../../imagens/img6.png';
import Imagen7 from '../../../../imagens/img7.png';
import Imagen8 from '../../../../imagens/img8.png';
import Imagen9 from '../../../../imagens/img9.png';
import Imagen10 from '../../../../imagens/img10.png';
import Imagen11 from '../../../../imagens/img11.png';
import Imagen12 from '../../../../imagens/img12.png';


const imagem = [Imagen1, Imagen2, Imagen3, Imagen4, Imagen5, Imagen6, Imagen7, Imagen8, Imagen9, Imagen10, Imagen11, Imagen12];

export default function carrossel() {

    const carrossel = useRef<HTMLDivElement | undefined | any>(null);
    const [width, setWidth] = useState(0);

    useEffect(() => {
        setWidth(carrossel.current?.scrollWidth - carrossel.current?.offsetWidth)
    }, [])

    return (
        <div className='card'>
            <motion.div ref={carrossel} className='carrossel' whileTap={{ cursor: "grabbing" }}>
                <motion.div
                    drag="x"
                    className='inner'
                    dragConstraints={{ right: 0, left: -width }}
                    initial={{ x: 100 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    {
                        imagem.map(imagem => (
                            <motion.div className='item' key={imagem}>
                                <img src={imagem} alt="txt alt" />
                            </motion.div>
                        ))
                    }
                </motion.div>
            </motion.div>

        </div>
    )
}