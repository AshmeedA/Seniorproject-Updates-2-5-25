import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Registerpgs from './pages/Registerpgs';
import Login from './pages/Login';
import About from './pages/About';
import CreatePost from './pages/CreatePost';
import { useState } from 'react';

function App() {
  console.log("App component loaded"); // Debug log
  const [posts,setPosts] = useState([]); //to hold post 
  const addPost = (newPost) => { 
    setPosts([...posts, newPost]);
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/registerpgs" element={<Registerpgs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
          {/* Pass posts as a prop to Home component */}
          <Route path="/" element={<Home posts={posts} />} />
          {/* Pass addPost as a prop to CreatePost component */}
          <Route path="/create-post" element={<CreatePost addPost={addPost} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
