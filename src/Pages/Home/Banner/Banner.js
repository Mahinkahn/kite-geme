import React, { useEffect, useState } from 'react';


const Banner = () => {

    const slides = [
        {
            imageUrl: 'https://www.kitegamesstudio.com/wp-content/uploads/2022/07/amtv.png',
            caption: 'First slide label\nSome representative placeholder content for the first slide.',
        },
        {
            imageUrl: 'https://www.kitegamesstudio.com/wp-content/uploads/2022/07/color_pop.png',
            caption: 'Second slide label\nSome representative placeholder content for the second slide.',
        },
        {
            imageUrl: 'https://www.kitegamesstudio.com/wp-content/uploads/2022/07/slideshow-1.png',
            caption: 'Third slide label\nSome representative placeholder content for the third slide.',
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
        <div className="hero ">
            <img src="https://www.kitegamesstudio.com/wp-content/uploads/2017/08/Slider2.jpg" alt="" />
            <div className="">
                <div className="relative">
                    {/* Carousel items */}
                    <div className="relative w-full overflow-hidden">
                        {slides.map((slide, index) => (
                            <div
                                key={index}
                                className={`absolute left-0 w-full h-full transform transition-transform duration-1000 ${index === activeIndex ? 'translate-x-0' : 'translate-x-full'
                                    }`}
                            >
                                <img src={slide.imageUrl} className="block w-full h-full object-cover" alt={`Slide ${index + 1}`} />
                                <div className="absolute inset-x-0 bottom-0 bg-black bg-opacity-60 p-4 text-white">
                                    <h5 className="text-xl">{slide.caption.split('\n')[0]}</h5>
                                    <p>{slide.caption.split('\n')[1]}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Banner;