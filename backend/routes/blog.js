const app = require("express");
const router = app.Router();

const {
  getAllBlogs,
  getBlogById,
  createNewBlog,
  deleteBlogById,
} = require("../controllers/blog");

router.get("/", getAllBlogs);
router.get("/:id", getBlogById);
router.post("/", createNewBlog);
router.delete("/:id", deleteBlogById);

module.exports = router;
