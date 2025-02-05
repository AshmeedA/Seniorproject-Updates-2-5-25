import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Registerpgs = () => {
    const [values, setValues] = useState({
        username: '',
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
                'http://localhost:3000/auth/registerpgs',
                values,
                {
                    headers: { 'Content-Type': 'application/json' }
                }
            );
            if (response.status === 201) {
                navigate('/login');
            }
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-green-500 to-teal-600">
            <div className="shadow-lg px-10 py-8 bg-white rounded-lg w-96">
                {/* Company Name */}
                <h1 className="text-2xl font-extrabold text-center text-teal-800 mb-2">Campus Conversations</h1>

                {/* Page Title */}
                <h2 className="text-3xl font-bold text-center text-green-700 mb-6">Create an Account</h2>
                <p className="text-center text-gray-500 mb-8">
                    Join us to stay connected with the university community.
                </p>

                {/* Form */}
                <form onSubmit={handleSubmit}>
                    <div className="mb-5">
                        <label htmlFor="username" className="block text-gray-700 font-semibold">Username</label>
                        <input
                            type="text"
                            placeholder="Enter your username"
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                            name="username"
                            onChange={handleChanges}
                        />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="email" className="block text-gray-700 font-semibold">Email</label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                            name="email"
                            onChange={handleChanges}
                        />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="password" className="block text-gray-700 font-semibold">Password</label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                            name="password"
                            onChange={handleChanges}
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-green-700 hover:bg-green-800 text-white font-semibold py-2 rounded-md transition duration-300"
                    >
                        Register
                    </button>
                </form>

                {/* Login Link */}
                <div className="text-center mt-6">
                    <span className="text-gray-600">Already have an account? </span>
                    <Link to="/login" className="text-green-600 font-semibold hover:underline">
                        Log In
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Registerpgs;
