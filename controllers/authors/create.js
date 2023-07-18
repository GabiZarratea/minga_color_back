import Author from "../../models/Author.js";

let createAuthorController = async (req, res, next) => {
  try {
    const { name, last_name, city, date, photo, user_id } = req.body;
    const newAuthor = new Author({
      name,
      last_name,
      city,
      date,
      photo,
      user_id,
    });
    await newAuthor.save();

    return res.status(201).json({
      success: "ok",
      id: manga._id,
      timestamps: manga.createdAt,
    });
  } catch (error) {
    console.log(error);
    return next(500, error);
  }
};

export default createAuthorController;