import React from 'react';


const InfoCards = () => {



    return (
        <div className='mt-32 w-[1170px] mx-auto'>
            <div className=" relative">
                <div className="border-b-4 border-[#4caf50] w-[68px] absolute bottom-24 left-[-85px]"></div>
                <div className="">
                    <h2 className=' text-[#4a4747] text-[50px] font-medium uppercase tracking-wider'>New release</h2>
                    <p className=' text-2xl font-light text-[#4a4747] tracking-wider leading-[39px] max-w-[800px] mt-[35px] mb-[90px] mx-0'>The brand new app we've published on the App Store.</p>
                </div>
            </div>

            <div className="col-span-12">
                <div className="mb-[65px] m-0">
                    <img className=' max-w-[116px]  m-0' src="https://www.kitegamesstudio.com/wp-content/uploads/2022/07/slideshow-1.png" alt="" />
                    <h4 className=' text-[40px] text-[#4a4747] font-normal tracking-wider ml-12 leading-[44px] '>Slideshow maker & video <br /> editor</h4>
                </div>
            </div>

            <div className="">
                <div className=" mb-[112px]">
                    <a className=' inline-block' href="https://play.google.com/store/apps/details?id=com.kitegames.slideshow.maker">
                        <img src="http://www.kitegamesstudio.com/wp-content/themes/kitegames/img/play-store.png" alt="" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default InfoCards;