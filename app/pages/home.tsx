import React from 'react';

const HomePage: React.FC = () => {
    return (
        <div className="flex justify-center items-center h-screen ">
            <div className="bg-white p-8 rounded-lg shadow-lg opacity-70">
                <h1 className="text-3xl font-bold mb-4">Welcome to the Honkai Archives</h1>
                <p className="text-opacity-75">
                    Hallo captain! I am Ai Chan your personal guide into the world of honkai and welcome to the valkyrie Archives
                    Here you will find all the information you need about the valkyries, the stigmata, the weapons and their lore itself.
                    you will hire from the best of the best to build your team and take on the honkai beasts and save the world from the honkai.
                    So  what are you waiting for captain? Let's dive in and explore the world of honkai together.
                </p>
            </div>
        </div>
    );
};


export default HomePage;