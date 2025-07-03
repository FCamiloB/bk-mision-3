
import express from "express";
import { createProduct, getProducts, updateProduct, deleteProduct } from "../controllers/productController.js";
const router=express.Router();

router.post("/products", createProduct); // Crear tarea
router.get("/products", getProducts); // Leer tareas
router.put("/products/:id", updateProduct); // Actualizar tarea
router.delete("/products/:id", deleteProduct); // Eliminar tarea

export default router;