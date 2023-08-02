import Manga from "../../models/Manga.js";
import Chapter from "../../models/Chapter.js";

const destroy = async (req, res, next) => {
  try {
    let destroyed = await Manga.findOneAndDelete({ _id: req.params.id }); //metodo mongoose for delete
    if (destroyed) {
      await Chapter.deleteMany({ manga_id: req.params.id });
      return res.status(200).json({
        success: true,
        message: "Manga and chapters deleted.",
        destroyed,
      });
    } else {
      return res.status(404).json({
        success: false,
        message: "Not Found",
      });
    }
  } catch (error) {
    next(error);
  }
};

export default destroy;
