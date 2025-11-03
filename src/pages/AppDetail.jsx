import React, { useState, useEffect } from "react";
import { useLoaderData, useParams } from "react-router";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import toast, { Toaster } from "react-hot-toast";
import NoAppFound from "./NoAppFound";

const AppDetail = () => {
    const data = useLoaderData(); // array of apps
    const { id } = useParams();   // route param
    const appId = parseInt(id);

    const app = data.find(app => app.id === appId);

    // Check localStorage if app is already installed
    const [installed, setInstalled] = useState(false);

    useEffect(() => {
        if (!app) return;
        const installedApps = JSON.parse(localStorage.getItem("installedApps") || "[]");
        if (installedApps.some(a => a.id === app.id)) {
            setInstalled(true);
        }
    }, [app]);

    if (!app) return <NoAppFound></NoAppFound>;

    const { image, title, description, downloads, ratingAvg, reviews, ratings } = app;

    const handleInstall = () => {
        setInstalled(true);

        // Save app to localStorage
        const installedApps = JSON.parse(localStorage.getItem("installedApps") || "[]");
        if (!installedApps.some(a => a.id === app.id)) {
            installedApps.push(app);
            localStorage.setItem("installedApps", JSON.stringify(installedApps));
        }

        toast.success(`${title} installed successfully!`);
    };

    return (
        <div className="max-w-6xl mx-auto p-6 space-y-10">
            <Toaster position="top-right" />

            {/* App Information */}
            <div className="flex flex-col lg:flex-row gap-6">
                {/* Image */}
                <img src={image} alt={title} className="w-full lg:w-1/3 h-64 object-cover rounded-lg" />

                {/* Details */}
                <div className="flex-1 space-y-3">
                    <h1 className="text-3xl font-bold">{title}</h1>
                    <div className="flex items-center gap-6 text-gray-600">
                        <span>Downloads: {downloads}</span>
                        <span>Rating: {ratingAvg}</span>
                        <span>Reviews: {reviews}</span>
                    </div>

                    <button
                        onClick={handleInstall}
                        disabled={installed}
                        className={`px-6 py-2 rounded-lg font-semibold text-white ${installed ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
                            }`}
                    >
                        {installed ? "Installed" : "Install"}
                    </button>
                </div>
            </div>

            {/* App Review Chart */}
            <div className="bg-white p-6 rounded-lg shadow">
                <h2 className="text-xl font-bold mb-4">App Reviews</h2>
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart
                        data={[...ratings].reverse()} // 5-star on top
                        layout="vertical"
                        margin={{ top: 5, right: 20, left: 20, bottom: 5 }}
                    >
                        <XAxis type="number" />
                        <YAxis dataKey="name" type="category" />
                        <Tooltip />
                        <Bar dataKey="count" fill="#3b82f6" />
                    </BarChart>
                </ResponsiveContainer>
            </div>

            {/* App Description */}
            <div className="bg-white p-6 rounded-lg shadow space-y-3">
                <h2 className="text-xl font-bold">Description</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default AppDetail;
