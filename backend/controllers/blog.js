const Blogs = require("../models/blog");

const getAllBlogs = async (req, res) => {
  const blogs = await Blogs.find({});

  return res.status(200).json(blogs);
};

const getBlogById = async (req, res) => {
  const blog = await Blogs.findById(req.params.id);

  return res.status(200).json(blog);
};

const createNewBlog = async (req, res) => {
  const { title, description, imgSrc, demoLink, blogContent } = req.body;

  if (!title || !description || !imgSrc || !demoLink || !blogContent) {
    return res.status(400).json({ msg: "Please enter all fields" });
  }

  try {
    const blog = await Blogs.create({
      title,
      description,
      imgSrc,
      demoLink,
      blogContent,
    });
    return res.status(201).json({ msg: "Success", data: blog });
  } catch (err) {
    return res.status(500).json({ msg: "Error", error: err });
  }
};

const deleteBlogById = async (req, res) => {
  try {
    await Blogs.findByIdAndDelete(req.params.id);
    return res.status(201).json({ msg: "Success" });
  } catch (err) {
    return res.status(500).json({ msg: "Error", error: err });
  }
};

module.exports = { getAllBlogs, getBlogById, createNewBlog, deleteBlogById };
