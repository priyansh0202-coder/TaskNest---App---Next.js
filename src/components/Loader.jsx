import React from "react";

const Loader = () => {
    return (
        <div className="flex flex-col items-center justify-center h-[80vh] w-full bg-white">
            <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            <p className="mt-4 text-gray-600 text-sm font-medium">Loading tasks...</p>
        </div>
    );
};

export default Loader;
