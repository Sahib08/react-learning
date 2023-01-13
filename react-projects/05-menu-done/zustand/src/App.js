import React, { useState, useEffect } from "react";
import Menu from "./Menu";
import Categories from "./Categories";

function App() {
  const [data, setData] = useState([]);
  const [menuItems, setMenuItems] = useState([]);
  const [categories, setCategories] = useState([]);


  const getData = async () => {
    const resp = await fetch('https://api.sampleapis.com/recipes/recipes');
    const json = await resp.json();
    setData(json);
    setCategories([
      "all",
      ...new Set(
        json.map((item) => (item.cuisine !== "" ? item.cuisine : "other")).sort()
      ),
    ])
  }

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    setMenuItems(data)
  }, [data]);

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(data);
      return;
    }
    const newItems = data.filter((item) => {
      if (category === "other") {
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
