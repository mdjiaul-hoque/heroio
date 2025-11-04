import React, { useEffect, useState } from 'react';
import { FaDownload, FaStar } from 'react-icons/fa';
import { Link } from 'react-router';
import Banner from './Banner';

const Trending = () => {
    const [trending, setTrending] = useState([]);

    useEffect(() => {
        fetch('/trending.json')
            .then(res => res.json())
            .then(data => {
                setTrending(data);
            });
    }, []);

    return (

        <>
        
         <Banner></Banner>


        <div className="max-w-6xl mx-auto px-4 py-8">

            <h2 className="text-2xl font-bold mb-6">Trending Apps</h2>

            {/* Grid Layout: 4 cards per row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

                {trending.map(item => (
                    <Link to={`/apps/${item.id}`}>
                    <div
                        key={item.id}
                        className="border rounded-xl shadow hover:shadow-lg transition p-3 bg-white"
                    >
                        {/* Image */}
                        <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-48 object-cover rounded-lg"
                        />

                        {/* Title */}
                        <h3 className="text-lg font-semibold mt-3">{item.title}</h3>

                        {/* Footer: Downloads + Rating */}
                        <div className="flex items-center justify-between mt-2 text-gray-600 text-sm">

                            {/* Downloads */}
                            <div className="flex items-center gap-1">
                                <FaDownload size={15} />
                                <span>{item.downloads}</span>
                            </div>

                            {/* Rating */}
                            <div className="flex items-center gap-1">
                                <FaStar size={15} className="text-yellow-500" />
                                <span>{item.ratingAvg}</span>
                            </div>
                        </div>
                    </div>
                    </Link>
                ))}

            </div>
            {/* ✅ Show All Button */}
            <div className="flex justify-center mt-10">
                <Link to="/apps" className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition">Show All</Link>
            </div>
        </div>
    </>
    );
};

export default Trending;
