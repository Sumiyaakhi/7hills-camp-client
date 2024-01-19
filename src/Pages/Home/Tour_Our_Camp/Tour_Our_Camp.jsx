import React from 'react';
import img from "../../../assets/images/boat_bg.png"
import { FaYoutube } from 'react-icons/fa';
import SectionTitle from '../../../Components/Shared/SectionTitle/SectionTitle';
const Tour_Our_Camp = () => {
    return (
        <div >
            
            <SectionTitle
            title="Meet us with a short"
            subTitle="Be with us"
            ></SectionTitle>
            
            <iframe width="100%" height="700" src="https://www.youtube.com/embed/rSY_t3ikMRo?si=iETTzwEcGA5xSF6U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
    );
};

export default Tour_Our_Camp;