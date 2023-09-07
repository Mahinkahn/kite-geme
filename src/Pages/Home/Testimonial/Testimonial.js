import React, { Component } from 'react';
import Slider from "react-slick";



const Testimonial = () => {

    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true
    };
    return (
        <div className='mt-20 mb-20 container  mx-auto'>

            <Slider {...settings}>
                <div className=''>
                    <div className="relative w-full max-w-[300px]">

                        <div className="group ">
                            <img
                                src="https://www.kitegamesstudio.com/wp-content/uploads/2022/07/redoan2.png"
                                alt="Avatar"
                                className=" w-full h-auto"
                            />
                            <div className="absolute inset-x-0  bottom-0 flex h-2/4 items-center justify-center bg-[#4caf50] bg-opacity-50 text-white text-lg transition-opacity opacity-0 group-hover:opacity-100">
                                My Name is John
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="relative w-full max-w-[300px]">

                        <div className="group ">
                            <img
                                src="https://www.kitegamesstudio.com/wp-content/uploads/2022/07/redoan2.png"
                                alt="Avatar"
                                className="block w-full h-auto"
                            />
                            <div className="absolute inset-x-0  bottom-0 flex h-2/4 items-center justify-center bg-[#4caf50] bg-opacity-50 text-white text-lg transition-opacity opacity-0 group-hover:opacity-100">
                                My Name is John
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="relative w-full max-w-[300px]">

                        <div className="group ">
                            <img
                                src="https://www.kitegamesstudio.com/wp-content/uploads/2022/07/redoan2.png"
                                alt="Avatar"
                                className="block w-full h-auto"
                            />
                            <div className="absolute inset-x-0  bottom-0 flex h-2/4 items-center justify-center bg-[#4caf50] bg-opacity-50 text-white text-lg transition-opacity opacity-0 group-hover:opacity-100">
                                My Name is John
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="relative w-full max-w-[300px]">

                        <div className="group ">
                            <img
                                src="https://www.kitegamesstudio.com/wp-content/uploads/2022/07/redoan2.png"
                                alt="Avatar"
                                className="block w-full h-auto"
                            />
                            <div className="absolute inset-x-0  bottom-0 flex h-2/4 items-center justify-center bg-[#4caf50] bg-opacity-50 text-white text-lg transition-opacity opacity-0 group-hover:opacity-100">
                                My Name is John
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="relative w-full max-w-[300px]">

                        <div className="group ">
                            <img
                                src="https://www.kitegamesstudio.com/wp-content/uploads/2022/07/redoan2.png"
                                alt="Avatar"
                                className="block w-full h-auto"
                            />
                            <div className="absolute inset-x-0  bottom-0 flex h-2/4 items-center justify-center bg-[#4caf50] bg-opacity-50 text-white text-lg transition-opacity opacity-0 group-hover:opacity-100">
                                My Name is John
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="relative w-full max-w-[300px]">

                        <div className="group ">
                            <img
                                src="https://www.kitegamesstudio.com/wp-content/uploads/2022/07/redoan2.png"
                                alt="Avatar"
                                className="block w-full h-auto"
                            />
                            <div className="absolute inset-x-0  bottom-0 flex h-2/4 items-center justify-center bg-[#4caf50] bg-opacity-50 text-white text-lg transition-opacity opacity-0 group-hover:opacity-100">
                                My Name is John
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="relative w-full max-w-[300px]">

                        <div className="group ">
                            <img
                                src="https://www.kitegamesstudio.com/wp-content/uploads/2022/07/redoan2.png"
                                alt="Avatar"
                                className="block w-full h-auto"
                            />
                            <div className="absolute inset-x-0  bottom-0 flex h-2/4 items-center justify-center bg-[#4caf50] bg-opacity-50 text-white text-lg transition-opacity opacity-0 group-hover:opacity-100">
                                My Name is John
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="relative w-full max-w-[300px]">

                        <div className="group ">
                            <img
                                src="https://www.kitegamesstudio.com/wp-content/uploads/2022/07/redoan2.png"
                                alt="Avatar"
                                className="block w-full h-auto"
                            />
                            <div className="absolute inset-x-0  bottom-0 flex h-2/4 items-center justify-center bg-[#4caf50] bg-opacity-50 text-white text-lg transition-opacity opacity-0 group-hover:opacity-100">
                                My Name is John
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="relative w-full max-w-[300px]">

                        <div className="group ">
                            <img
                                src="https://www.kitegamesstudio.com/wp-content/uploads/2022/07/redoan2.png"
                                alt="Avatar"
                                className="block w-full h-auto"
                            />
                            <div className="absolute inset-x-0  bottom-0 flex h-2/4 items-center justify-center bg-[#4caf50] bg-opacity-50 text-white text-lg transition-opacity opacity-0 group-hover:opacity-100">
                                My Name is John
                            </div>
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
    );
};

export default Testimonial;