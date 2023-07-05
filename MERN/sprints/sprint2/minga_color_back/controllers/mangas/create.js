import Manga from "../../models/Manga.js";

let create = async (req, res, next) => {
  try {
    const { title, cover_photo, category_id, description, author_id } = req.body;
    console.log(req.body);
    const manga = new Manga({
      title,
      category_id,
      cover_photo,
      description,
      author_id, //que onda esto
    });

    await manga.save();

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

export default create;
