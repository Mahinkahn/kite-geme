import React, { useEffect, useState } from 'react';


const Banner = () => {

    const slides = [
        {
            imageUrl: 'https://www.kitegamesstudio.com/wp-content/uploads/2022/07/amtv.png',
            imUrl: 'http://www.kitegamesstudio.com/wp-content/themes/kitegames/img/play-store.png',
            caption: 'Blur Photo Editor & Portrait',
        },
        {
            imageUrl: 'https://www.kitegamesstudio.com/wp-content/uploads/2022/07/color_pop.png',
            imUrl: 'http://www.kitegamesstudio.com/wp-content/themes/kitegames/img/play-store.png',
            caption: 'Color Pop Effects',
        },
        {
            imageUrl: 'https://www.kitegamesstudio.com/wp-content/uploads/2022/07/slideshow-1.png',
            imUrl: 'http://www.kitegamesstudio.com/wp-content/themes/kitegames/img/play-store.png',
            caption: 'Add Music To Video & Editor',
        },
    ];

    const [activeIndex, setActiveIndex] = useState(0);

    // Function to increment the active slide index
    const nextSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    // Auto transition to the next slide every 5 seconds
    useEffect(() => {
        const interval = setInterval(nextSlide, 5000);
        return () => clearInterval(interval);
    }, []);


    return (
        <div className="hero relative">
            <img src="https://www.kitegamesstudio.com/wp-content/uploads/2017/08/Slider2.jpg" alt="" className="w-full h-auto" />
            <div className="absolute  inset-y-0 right-0 left-[350px] mt-32  flex justify-around items-center">
                <div className="relative w-2/3 h-2/6 overflow-hidden">
                    {slides.map((slide, index) => (
                        <div
                            key={index}
                            className={`absolute left-0 w-full h-full transform transition-transform duration-1000 ${index === activeIndex ? 'translate-x-0' : 'translate-x-full'
                                }`}
                        >
                            <img src={slide.imageUrl} className="block w-[113.571px] h-[113.571px] object-cover" alt={`Slide ${index + 1}`} />
                            <div className="absolute inset-x-0  p-4 text-[#4a4747]">
                                <h5 className=" text-7xl font-[5]">{slide.caption.split('\n')[0]}</h5>
                                <div className=" mt-6 ml-36">
                                    <img src={slide.imUrl} className="block  h-full object-cover" alt={`Slide ${index + 1}`} />
                                </div>

                                {/* <img src={slide.imUrl.split('\n')[1]} alt='' {`Slide ${index + 1}`} /> */}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Banner;