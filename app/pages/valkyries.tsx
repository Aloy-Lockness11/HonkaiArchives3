import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const Valkyries = () => {
    const [valkyries, setValkyries] = useState([]);

    useEffect(() => {
        fetch('/app/api/handler')
            .then(response => response.json())
            .then(data => setValkyries(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div className="space-y-4">
            <h1 className="text-xl font-bold">Valkyries</h1>
            <p>This is the valkyries page</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {valkyries.map(valkyrie => (
                    <div key={valkyrie.valkyrieid} className="max-w-sm rounded overflow-hidden shadow-lg">
                        <Image
                            className="w-full"
                            src= {`/images/valkyries/${valkyrie.imagename}.webp`}
                            alt= {valkyrie.name}
                            width={256}
                            height={256}
                        />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">{valkyrie.name}</div>
                            <p className="text-gray-700 text-base">{valkyrie.shortdescription}</p>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Hire Cost: ${valkyrie.hirecost.toFixed(2)}</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Power: {valkyrie.power}</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mb-2">Defence: {valkyrie.defence}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Valkyries;