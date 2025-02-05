




import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaSearch, FaPlus } from "react-icons/fa";
import PropTypes from "prop-types";

const Home = ({ posts }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handlePostClick = () => {
        navigate("/create-post");
    };

    return (
        <div className="relative h-screen bg-white text-gray-900 flex flex-col">
            {/* Header Section */}
            <div className="bg-gray-100 text-center py-8 relative">
                <h1 className="text-3xl font-bold">Campus Conversations</h1>
                <p className="mt-2 text-gray-700">
                    Simplifying communication to make your university experience better.
                </p>

                {/* Menu Button */}
                <button
                    onClick={toggleMenu}
                    className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center text-gray-700 bg-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-500 hover:bg-gray-300 transition-all"
                    aria-label="Toggle menu"
                >
                    &#9776;
                </button>
            </div>

            {/* Search Bar */}
            <div className="flex items-center w-full max-w-md px-4 mt-6 mx-auto">
                <label htmlFor="search" className="sr-only">
                    Search
                </label>
                <input
                    id="search"
                    type="text"
                    placeholder="Search..."
                    className="w-full px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    aria-label="Search"
                />
                <button
                    className="px-4 py-2 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700 transition-all"
                    aria-label="Search"
                >
                    <FaSearch />
                </button>
            </div>

            {/* Dropdown Menu */}
            {isMenuOpen && (
                <nav
                    className="absolute top-16 right-4 w-40 bg-white border border-gray-300 rounded-lg shadow-lg"
                    aria-label="Main menu"
                >
                    <Link
                        to="/"
                        onClick={() => setIsMenuOpen(false)}
                        className="block px-4 py-2 hover:bg-gray-200 focus:bg-gray-200"
                    >
                        Home
                    </Link>
                    <Link
                        to="/about"
                        onClick={() => setIsMenuOpen(false)}
                        className="block px-4 py-2 hover:bg-gray-200 focus:bg-gray-200"
                    >
                        About
                    </Link>
                    <Link
                        to="/login"
                        onClick={() => setIsMenuOpen(false)}
                        className="block px-4 py-2 hover:bg-gray-200 focus:bg-gray-200"
                    >
                        Login
                    </Link>
                </nav>
            )}

            {/* Posts Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-5xl mx-auto mt-6 px-4">
                {(posts?.length || 0) > 0 ? (
                    posts.map((post, index) => (
                        <div
                            key={index}
                            className="p-4 bg-gray-50 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                        >
                            {/* Post Title */}
                            <h3 className="text-xl font-semibold">{post.title}</h3>

                            {/* Post Content */}
                            <p className="mt-2 text-gray-600">{post.content}</p>

                            {/* GIF Rendering */}
                            {post.gif && (
                                <img
                                    src={post.gif}
                                    alt="Post GIF"
                                    className="mt-4 w-full rounded-lg"
                                />
                            )}

                            {/* Attachment Rendering */}
                            {post.attachment && (
                                <a
                                    href={post.attachment}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-2 block text-blue-500 underline hover:text-blue-700"
                                >
                                    View Attachment
                                </a>
                            )}
                        </div>
                    ))
                ) : (
                    <p className="text-gray-500 text-center col-span-full">
                        No posts to display.
                    </p>
                )}
            </div>

            {/* Floating Add Button */}
            <button
                onClick={handlePostClick}
                className="fixed bottom-8 right-8 w-12 h-12 flex items-center justify-center bg-green-600 text-white rounded-full shadow-lg hover:bg-green-700 transform hover:scale-110 transition-all"
                aria-label="Create new post"
            >
                <FaPlus size={20} />
            </button>
        </div>
    );
};

Home.propTypes = {
    posts: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            content: PropTypes.string.isRequired,
            gif: PropTypes.string, // Added gif property
            attachment: PropTypes.string, // Added attachment property
        })
    ).isRequired,
};

// Default props to handle undefined posts
Home.defaultProps = {
    posts: [],
};

export default Home;
