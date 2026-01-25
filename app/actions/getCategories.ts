import prisma from "@/libs/prismadb";

export default async function getCategories() {
  const products = await prisma.product.findMany({
    select: { category: true },
  });

  const categories = Array.from(
    new Set(products.map((p) => p.category)),
  ).filter(Boolean);
  return categories;
}
