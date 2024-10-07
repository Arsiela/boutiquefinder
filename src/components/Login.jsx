// Login.jsx
import React from 'react';

const Login = ({ userType }) => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h2 className="text-2xl font-bold mb-4">{`Login as ${userType}`}</h2>
            <form className="bg-white p-6 rounded shadow-md">
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Username</label>
                    <input type="text" className="border rounded w-full p-2" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Password</label>
                    <input type="password" className="border rounded w-full p-2" />
                </div>
                <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">Login</button>
            </form>
        </div>
    );
};

export default Login;
