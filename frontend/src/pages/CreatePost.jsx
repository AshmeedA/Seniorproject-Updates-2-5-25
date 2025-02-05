import { useState } from "react";
import PropTypes from "prop-types"; // Import PropTypes
import { useNavigate } from "react-router-dom";

const CreatePost = ({ addPost }) => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [gif, setGif] = useState(""); // New state for GIF URL
    const [attachment, setAttachment] = useState(""); // New state for attachment URL
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (title && content) {
            const newPost = { 
                title, 
                content, 
                gif: gif.trim() || null, // Add GIF URL if provided, otherwise null
                attachment: attachment.trim() || null, // Add attachment if provided, otherwise null
            };
            addPost(newPost); // Add the new post to the list on the Home page
            navigate("/"); // Navigate back to the home page
        }
    };

    return (
        <div className="p-8 max-w-md mx-auto bg-white rounded shadow">
            <h2 className="text-2xl font-semibold mb-4">Create a Post</h2>
            <form onSubmit={handleSubmit}>
                {/* Title Input */}
                <div className="mb-4">
                    <label className="block text-gray-700 font-semibold mb-2">Title</label>
                    <input 
                        type="text" 
                        value={title} 
                        onChange={(e) => setTitle(e.target.value)} 
                        className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
                        required
                    />
                </div>

                {/* Content Input */}
                <div className="mb-4">
                    <label className="block text-gray-700 font-semibold mb-2">Content</label>
                    <textarea 
                        value={content} 
                        onChange={(e) => setContent(e.target.value)} 
                        className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
                        rows="5"
                        required
                    />
                </div>

                {/* GIF URL Input */}
                <div className="mb-4">
                    <label className="block text-gray-700 font-semibold mb-2">GIF URL (optional)</label>
                    <input 
                        type="text" 
                        value={gif} 
                        onChange={(e) => setGif(e.target.value)} 
                        className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
                        placeholder="Enter a GIF URL"
                    />
                </div>

                {/* Attachment URL Input */}
                <div className="mb-4">
                    <label className="block text-gray-700 font-semibold mb-2">Attachment URL (optional)</label>
                    <input 
                        type="text" 
                        value={attachment} 
                        onChange={(e) => setAttachment(e.target.value)} 
                        className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
                        placeholder="Enter an attachment URL"
                    />
                </div>

                {/* Submit Button */}
                <button 
                    type="submit" 
                    className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                    Post
                </button>
            </form>
        </div>
    );
};

// Define PropTypes for validation
CreatePost.propTypes = {
    addPost: PropTypes.func.isRequired,
};

export default CreatePost;
