import prisma from "../prismaClient.js";

export const createProduct = async (req, res) => {
  const { name, price, categoryId } = req.body;
  try {
    const product = await prisma.product.create({
      data: { name, price, categoryId },
    });
    res.json(product);
  } catch (error) {
    res.status(400).json({ error: error.message });
    console.error("Error al crear tarea", error);
  }
};
export const getProducts = async (req, res) => {
  try {
    const products = await prisma.product.findMany({
      include: {
        category: true,
        
      },
    });
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.error("Error al obtener los productos:", error);
  }
};
export const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name, price, categoryId } = req.body;
  try {
    const product = await prisma.product.update({
      where: { id: Number(id) },
      data: { name, price, categoryId },
    });
    res.json(product);
  } catch (error) {
    res.status(404).json({ error: "Tarea no encontrada" });
  }
};

export const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.product.delete({where: { id: Number(id) }});
    res.json({ message: "Tarea Eliminada" });
  } catch (error) {
    res.status(404).json({ error: "Tarea no encontrada" });
  }
};
