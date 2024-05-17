import Herosection from "./components/homePage/Herosection";
import CategoriesFood from "./components/homePage/categoriesFood/CategoriesFood";
import RecipesFood from "./components/homePage/recipesFood/RecipesFood";

export default function Home() {
  return (
    <main className="main">
      <Herosection />
      <CategoriesFood />
      <RecipesFood />
    </main>
  );
}
