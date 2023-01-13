import React, { useState, useEffect } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

const allCategories = [
  "all",
  ...new Set(
    items.map((item) => (item.cuisine !== "" ? item.cuisine : "other")).sort()
  ),
];

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  /*   const getData = async () => {
    const resp = await fetch('https://api.sampleapis.com/wines/reds');
    const json = await resp.json();
    setData(json);
  }

  useEffect(() => {
    getData();
  }, []); */

  useEffect(() => {
    console.log("categories: ", categories);
  }, []);

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => {
      if (category == "other") {
        return item.cuisine === "";
      }
      return item.cuisine === category;
    });
    console.log(newItems);
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
