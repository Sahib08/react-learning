import {create} from 'zustand';

export const useRecipeStore = create( (set, get) => ({
 allRecipes: [],
 filteredRecipes: [],
 categories: [],
 getRecipesAsyncActions: async () => {
    const resp = await fetch('https://api.sampleapis.com/recipes/recipes');
    const json = await resp.json();
    //setData(json);
    set( state => ({ ...state, allRecipes: json }))
    set( state => ({ ...state, categories: [
      "all",
      ...new Set(
        json.map((item) => (item.cuisine !== "" ? item.cuisine : "other")).sort()
      )] 
    }))
    // setCategories([
    //   "all",
    //   ...new Set(
    //     json.map((item) => (item.cuisine !== "" ? item.cuisine : "other")).sort()
    //   ),
    // ])
  },
  setFilteredRecipesAction: (category) => {
    if (category === "all") {
      //setMenuItems(data);
      set( state => ({ ...state, filteredRecipes: get().allRecipes }))
      return;
    }
    const newItems = get().allRecipes.filter((item) => {
      if (category === "other") {
        return item.cuisine === "";
      }
      return item.cuisine === category;
    });
    console.log(newItems);
    //setMenuItems(newItems);
    set( state => ({ ...state, filteredRecipes: newItems }))
  },
  setCategoriesAction: () => {
    set( state => ({ 
        ...state, 
        categories: [
            "all",
            ...new Set(
            get().allRecipes.map((item) => (item.cuisine !== "" ? item.cuisine : "other")).sort()
            ),
        ]
    }))
  },
}));