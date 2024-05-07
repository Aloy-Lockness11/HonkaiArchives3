import React from 'react';
import '../customTailCss/navbar.css'; 

const Footer: React.FC = () => {
    return (
        <div className="bg-slate-800 text-white font-Pixelify_Sans w-full text-center">
            <p>Note:</p>
            <p>
                I Own None of these chararters and some image assets on this website
            </p>
            <p>
                All image rights belong to mihoyo. I just made this website to help
                captains enjoy and learn stats and lore tidbits as a fan :D
            </p>
            <p >&copy; Mihoyo</p>
            <p >
                Source I used for Assets: <a href="https://honkaiimpact3.fandom.com/wiki">Hoyoverse Fandom</a>
            </p>
        </div>
    );
};


export default Footer;