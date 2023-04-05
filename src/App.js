import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Details from './components/Details';
import PostsProvider from "./PostsProvider";


const App = () => {
  return (
    <PostsProvider>
      <Router>
      <h2 className='text-center my-4'>Social Media App</h2>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/item/:id" element={<Details />} />
        </Routes>
      </Router>
    </PostsProvider>

  );
};

export default App;