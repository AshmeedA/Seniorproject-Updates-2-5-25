import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    const [values, setValues] = useState({
        email: '',
        password: ''
    });

    const handleChanges = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                'http://localhost:3000/auth/login',
                values,
                {
                    headers: { 'Content-Type': 'application/json' }
                }
            );
            if (response.status === 201) {
                localStorage.setItem('token', response.data.token);
                navigate('/Home');
            }
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600">
            <div className="shadow-lg px-10 py-8 bg-white rounded-lg w-96">
                {/* Company Name */}
                <h1 className="text-2xl font-extrabold text-center text-indigo-800 mb-2">Campus Conversations</h1>
                
                {/* Welcome Text */}
                <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">Welcome Back!</h2>
                <p className="text-center text-gray-500 mb-8">
                    Please log in to access your account
                </p>

                {/* Form */}
                <form onSubmit={handleSubmit}>
                    <div className="mb-5">
                        <label htmlFor="email" className="block text-gray-700 font-semibold">Email</label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            name="email"
                            onChange={handleChanges}
                        />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="password" className="block text-gray-700 font-semibold">Password</label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            name="password"
                            onChange={handleChanges}
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2 rounded-md transition duration-300"
                    >
                        Log In
                    </button>
                </form>
                
                {/* Signup Link */}
                <div className="text-center mt-6">
                    <span className="text-gray-600">Dont have an account? </span>
                    <Link to="/registerpgs" className="text-blue-600 font-semibold hover:underline">
                        Sign Up
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Login;
