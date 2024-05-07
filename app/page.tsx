"use client"
import Image from 'next/image';
import React from 'react';

import Navbar1 from "./comman/navbar";
import Footer from './comman/footer';

import Valkyries from './pages/valkyries';
import HomePage from './pages/home';


export default function Home() {
  const [selectedItem, setSelectedItem] = React.useState('home');

  return (
    <>
      <header className='grid grid-cols-3 gap-2 w-full'>
        <title>Valkyrie Archives 3</title>
        <link rel="icon" href="/images/icons/shicksallogo64.ico" />
          <div></div>
          <div className='flex flex-row'>
          <h1 className="text-center font-Pixelify_Sans text-4xl font-bold p-4 text-yellow-500 mt-4 ">Valkyrie Archives 3</h1>
          <Image
            className="h-32 w-32 mt-4 flex-wrap justify-center"
            src="/images/Assets/kianaBanner.png"
            alt="Kiana Kaslana Herrcher of flamscion"
            width={256}
            height={256}
            />
          </div>
          <div></div>
      </header>
      <body>
        <div>
          <Navbar1 setSelectedItem={setSelectedItem} />
          {selectedItem === 'home' && <HomePage />}
          {selectedItem === 'valkyries' && <Valkyries />}
        </div>
      <Footer />
      </body>
      
      
    </>
  );
}
