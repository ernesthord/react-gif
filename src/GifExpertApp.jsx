import { useState } from "react";
import {GifGrid} from "./components/GifGrid";
import {AddCategory} from "./components/AddCategory";
export const GiftExpertApp = () => {
  const [categories, setCategories] = useState(['One Punch','two Punch']);

   const addCategories = (newCategory) => {
    if(categories.includes(newCategory)) return;
      setCategories([...categories, newCategory]);
    console.log('addCategories called ' + newCategory);
   };

  return (
    <>
      <h2>GiftExpertApp</h2>
      <AddCategory addCategoriesPadre = {addCategories} />
        {categories.map((category) => (
          <GifGrid key={category} name={category} /> 
        ))}
    </>
  );
}