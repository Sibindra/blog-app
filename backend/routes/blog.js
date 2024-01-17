const app = require("express");
const router = app.Router();

const { getAllBlogs , getBlogById , createNewBlog } = require("../controllers/blog");

router.get("/", getAllBlogs);
router.get("/:id" , getBlogById)
router.post("/" ,createNewBlog );



module.exports = router;