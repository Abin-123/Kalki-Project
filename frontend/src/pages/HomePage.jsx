import React from 'react';
import backgroundImage from './background.jpg';

const HomePage = () => {
    return (
        <div className="relative h-screen w-full overflow-hidden font-sans">

            <div
                className="hidden md:block absolute right-0 top-0 h-full w-2/3 z-0"
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    clipPath: 'polygon(20% 0, 100% 0, 100% 100%, 0% 100%)',
                }}
            />


            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10" />


            <div className="relative z-20 h-full flex flex-col justify-center items-start px-6 md:px-20 text-white max-w-2xl">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight drop-shadow-xl">
                    ✍️ Share Your Voice with the World
                </h1>
                <p className="text-lg md:text-xl mb-8 font-medium text-gray-200 drop-shadow-md">
                    Your thoughts matter. Start your blogging journey today and inspire others.
                </p>
                <div className="flex space-x-4">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full shadow-md transition duration-300 hover: cursor-pointer">
                        Create Blog
                    </button>
                    <button className="bg-white hover:bg-gray-100 text-blue-700 font-semibold py-3 px-8 rounded-full shadow-md transition duration-300 hover: cursor-pointer">
                        View Blogs
                    </button>
                </div>
            </div>


            <footer className="absolute bottom-0 left-0 w-full bg-gray-900 text-gray-300 py-4 px-6 md:px-20 z-30">
                <div className="flex flex-col md:flex-row justify-between items-center text-sm md:text-base">
                    <p>Developed by <span className="text-white font-semibold ">Jay Team</span></p>

                </div>
            </footer>
        </div>
    );
};

export default HomePage;
