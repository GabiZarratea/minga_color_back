import Router from "express";
import read from "../controllers/chapters/read.js";
import orderExists from "../middlewares/exists_order.js";

let chapter_router = Router();

// chapter_router.post() //crea un autor
chapter_router.get("/", read);
chapter_router.post("/chapters", orderExists); // orderExist es el middleware para verificar si ya existe un capitulo de una manga

// chapter_router.purge() //actualizar un autor
// chapter_router.delete() //elimina un autor

export default chapter_router;
