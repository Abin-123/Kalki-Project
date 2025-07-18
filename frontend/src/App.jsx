import React from 'react';
import {  Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import CreateProfile from './components/CreateProfile';
import BlogList from './components/BlogList';
import BlogDetail from './components/BlogDetail';
import DeleteConfirm from './components/DeleteConfirm';
import EditBlog from './components/EditBlog';
import Interface from './components/Interface';

function App() {
  return (
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateProfile />} />
        <Route path="/blogs" element={<BlogList />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/delete/:id" element={<DeleteConfirm />} />
        <Route path="edit/:id" element={<EditBlog />} />
        <Route path="/interface" element={<Interface />} />
      </Routes>
    
  );
}

export default App;
