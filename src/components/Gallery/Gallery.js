import { useState } from 'react'
import './Gallery.css'
import Img1 from '../assets/img/Img1.jpg'
import Img2 from '../assets/img/Img2.jpg'
import Img3 from '../assets/img/Img3.jpg'
import Img4 from '../assets/img/Img4.jpg'
import Img5 from '../assets/img/Img5.jpg'
import Img6 from '../assets/img/Img6.jpg'
import Img7 from '../assets/img/Img7.jpg'
import Img8 from '../assets/img/Img8.jpg'
import Img9 from '../assets/img/Img9.jpg'
import { Container, Image } from 'react-bootstrap'
import { FaWindowClose } from "react-icons/fa";


const Gallery = () => {

    let data = [
        {
            id: 1,
            imgSrc: Img1
        },
        {
            id: 2,
            imgSrc: Img2
        },
        {
            id: 3,
            imgSrc: Img3
        },
        {
            id: 4,
            imgSrc: Img4
        },
        {
            id: 5,
            imgSrc: Img5
        },
        {
            id: 6,
            imgSrc: Img6
        },
        {
            id: 7,
            imgSrc: Img7
        },
        {
            id: 8,
            imgSrc: Img8
        },
        {
            id: 9,
            imgSrc: Img9
        },
    ]

    const [model, setModel] = useState(false);
    const [tempimgSrc, setTempImgSrc] = useState('');
    const getImg = (imgSrc) => {
        setTempImgSrc(imgSrc);
        setModel(true);
    }


    return (
        <Container className='galleryContainer'>
            
            <h1 className='galleryHeader'>Thornbush RC Park Gallery</h1>
            <div className={model ? "model open" : "model"}>
                <Image src={tempimgSrc} alt='' />
                <FaWindowClose onClick={() => setModel(false)} />
            </div>
            <div className='gallery'>
                {data.map((item, index) => {
                    return (
                        <div className='pics' key={index} onClick={() => getImg(item.imgSrc)}>
                            <Image src={item.imgSrc} className='galleryImg' alt='' />
                        </div>
                    )
                })
                }
            </div>
        </Container>
    )
}

export default Gallery
