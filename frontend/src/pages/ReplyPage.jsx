import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { useState } from "react";

const ReplyPage = ({ posts, addReply }) => {
    const { id } = useParams(); // Get post ID from the route
    const [newReply, setNewReply] = useState("");

    // Find the specific post by ID
    const post = posts.find((post) => post.id === id);

    // If the post is not found, display an error
    if (!post) {
        return <p>Post not found.</p>;
    }

    // Handle new reply input change
    const handleReplyChange = (e) => {
        setNewReply(e.target.value);
    };

    // Handle reply submission
    const handleReplySubmit = () => {
        if (newReply.trim()) {
            addReply(post.id, newReply); // Add the reply to the post
            setNewReply(""); // Clear the input
        }
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold">{post.title}</h1>
            <p className="mt-2 text-gray-600">{post.content}</p>

            {/* Replies Section */}
            <div className="mt-4">
                <h2 className="text-xl font-semibold">Replies</h2>
                {post.replies && post.replies.length > 0 ? (
                    <ul className="mt-2 space-y-2">
                        {post.replies.map((reply, index) => (
                            <li
                                key={index}
                                className="p-2 bg-gray-100 rounded-md shadow-sm"
                            >
                                {reply}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-gray-500">No replies yet.</p>
                )}
            </div>

            {/* Add Reply Section */}
            <div className="mt-6">
                <textarea
                    value={newReply}
                    onChange={handleReplyChange}
                    placeholder="Write your reply here..."
                    className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                    onClick={handleReplySubmit}
                    className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                    Submit Reply
                </button>
            </div>
        </div>
    );
};

ReplyPage.propTypes = {
    posts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired, // Ensure each post has an id
            title: PropTypes.string.isRequired, // Ensure each post has a title
            content: PropTypes.string.isRequired, // Ensure each post has content
            replies: PropTypes.arrayOf(PropTypes.string), // Replies should be an array of strings
        })
    ).isRequired, // The posts prop is required
    addReply: PropTypes.func.isRequired, // The addReply function is required
};

export default ReplyPage;
