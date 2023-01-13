import React, { useState, useEffect } from "react";
import Menu from "./components/Menu";
import Categories from "./components/Categories";
import { useRecipeStore } from "./store/recipeStore";

function App() {
  // const [data, setData] = useState([]);
  // const [menuItems, setMenuItems] = useState([]);
  // const [categories, setCategories] = useState([]);

  const recipes = useRecipeStore((state) => state.allRecipes)
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes)
  const categories = useRecipeStore((state) => state.categories)

  const getRecipesAsyncActions = useRecipeStore((state) => state.getRecipesAsyncActions)
  const setFilteredRecipesAction = useRecipeStore((state) => state.setFilteredRecipesAction)
  const setCategoriesAction = useRecipeStore((state) => state.setCategoriesAction)


  // const getData = async () => {
  //   const resp = await fetch('https://api.sampleapis.com/recipes/recipes');
  //   const json = await resp.json();
  //   setData(json);
  //   setCategories([
  //     "all",
  //     ...new Set(
  //       json.map((item) => (item.cuisine !== "" ? item.cuisine : "other")).sort()
  //     ),
  //   ])
  // }

  useEffect(() => {
    getRecipesAsyncActions();
  }, []);

  useEffect(() => {
    setFilteredRecipesAction(categories[0])
  }, [recipes]);

  // const filterItems = (category) => {
  //   if (category === "all") {
  //     setMenuItems(data);
  //     return;
  //   }
  //   const newItems = data.filter((item) => {
  //     if (category === "other") {
  //       return item.cuisine === "";
  //     }
  //     return item.cuisine === category;
  //   });
  //   console.log(newItems);
  //   setMenuItems(newItems);
  // };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItems={setFilteredRecipesAction} />
        <Menu items={filteredRecipes} />
      </section>
    </main>
  );
}

export default App;
