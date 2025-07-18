const express = require('express');
const cors = require('cors');
const multer = require('multer');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 5000;

// Enable CORS for frontend access
app.use(cors());

// Multer setup for image uploads
const upload = multer({ dest: path.join(__dirname, 'uploads') });

// Path to blogs.json inside the data folder
const BLOGS_FILE = path.join(__dirname, 'data', 'blogs.json');

// Ensure data folder exists
const dataFolder = path.join(__dirname, 'data');
if (!fs.existsSync(dataFolder)) {
  fs.mkdirSync(dataFolder);
}

// Helper function to read blogs
function readBlogs() {
  try {
    const data = fs.readFileSync(BLOGS_FILE, 'utf-8');
    return JSON.parse(data);
  } catch (err) {
    return [];
  }
}

// Helper function to write blogs
function writeBlogs(blogs) {
  fs.writeFileSync(BLOGS_FILE, JSON.stringify(blogs, null, 2));
}

// POST route to receive blog content and image
app.post('/api/blogs', upload.single('image'), (req, res) => {
  try {
    const content = req.body.content;
    const image = req.file;

    if (!content) {
      return res.status(400).json({ error: 'Content is required' });
    }

    const blogs = readBlogs();

    const newPost = {
      content,
      imagePath: image ? `/uploads/${image.filename}` : null,
      createdAt: new Date().toISOString(),
    };

    blogs.push(newPost);
    writeBlogs(blogs);

    res.status(200).json({ message: 'Blog post saved successfully' });
  } catch (err) {
    console.error('Error handling POST:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

// GET route to fetch all blogs
app.get('/api/blogs', (req, res) => {
  try {
    const blogs = readBlogs();
    res.status(200).json(blogs);
  } catch (err) {
    console.error('Error fetching blogs:', err);
    res.status(500).json({ error: 'Failed to load blogs' });
  }
});

// Serve uploaded images statically
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Start server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});