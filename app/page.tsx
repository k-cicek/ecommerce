import getProducts from "./actions/getProducts";
import Banner from "./components/home/Banner";
import Category from "./components/home/Category";
import Products from "./components/home/Products";

export default async function Home({ searchParams }: { searchParams: { category?: string, search?: string } }) {
  const { category = null, search = null } = await (searchParams as any);
  const products = await getProducts({ category, search });
  return (
    <div>
      <Category />
      <Banner />
      <Products products={products} />
    </div>
  );
}
