import Joi from "joi";

const mangaUpdate = Joi.object({
  title: Joi.string().min(3).max(30).required().messages({
    "any.required": "Title is required",
    "string.empty": "Title is required",
    "string.min": "Title is too short",
    "string.max": "Title is too long",
  }),
  description: Joi.string().min(10).max(600).required().messages({
    "any.required": "Description is required",
    "string.empty": "Description is required",
    "string.min": "Description is too short",
    "string.max": "Description is too long",
  }),
  cover_photo: Joi.string().uri(),

  category_id: Joi.optional(),
});

export default mangaUpdate;
