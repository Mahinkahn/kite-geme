import React from 'react';


const Services = () => {


    return (
        <div className="relative w-1/2 max-w-[300px]">

            <div className="group">
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
    );
};

export default Services;