import Author from "../models/Author.js";

async function finds_id(req, res, next) {
  try {
    const author = await Author.findOne({ user_id: req.user._id }); //metodo findOne busca autor con user_Id que coincida con el user id
    if (author) {
      req.body.author_id = author._id;
      console.log(author, "author");
      return next();
    }

    return res.status(404).json({
      success: false,
      message: ["Author not found"],
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: [error.message],
    });
  }
}

export default finds_id;
