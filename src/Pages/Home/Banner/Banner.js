import React from 'react';
import { useNavigate } from 'react-router-dom';
import banner1 from '../../../images/banner1.jpg';
import banner2 from '../../../images/banner2.jpg';
import banner3 from '../../../images/banner3.jpg';

const Banner = () => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate('/parts');
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="carousel w-3/4">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img src={banner1} className="w-full h-96 border-0 rounded-lg"></img>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="text-secondary btn btn-ghost">❮</a>
                            <a href="#slide2" className="text-secondary btn btn-ghost">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img src={banner2} className="w-full h-96 border-0 rounded-lg"></img>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="text-secondary btn btn-ghost">❮</a>
                            <a href="#slide3" className="text-secondary btn btn-ghost">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img src={banner3} className="w-full h-96 border-0 rounded-lg"></img>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="text-secondary btn btn-ghost">❮</a>
                            <a href="#slide1" className="text-secondary btn btn-ghost">❯</a>
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className="text-5xl font-bold">Welcome To <span className='text-primary'>Car Parts Manufacturer</span> </h1>
                    <p className="py-6">Here you will find the most qualityfull parts of almost every renowend brands</p>
                    <button onClick={handleNavigate} className="btn btn-primary">Purchase Now</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;