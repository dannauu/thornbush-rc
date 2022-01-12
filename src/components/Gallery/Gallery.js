import { useState } from 'react'
import './Gallery.css'
import Img1 from '../assets/img/Img1.jpg'
import Img2 from '../assets/img/Img2.jpg'
import Img3 from '../assets/img/Img3.jpg'
import Img4 from '../assets/img/Img4.jpg'
import Img5 from '../assets/img/Img5.jpg'
import { Container } from 'react-bootstrap'
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
            <div className={model? "model open" : "model"}>
                <img src={tempimgSrc}/>
                <FaWindowClose onClick={() => setModel(false)} />
            </div>
        <div className='gallery'>
            {data.map((item, index) => {
                return(
                    <div className='pics' key={index} onClick={() => getImg(item.imgSrc)}>
                        <img src={item.imgSrc} className='galleryImg' alt=''/>
                    </div>
                )
            })
            }
        </div>
        </Container>
    )
}

export default Gallery
