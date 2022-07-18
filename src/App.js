import React, { useState } from "react";
import MenuCard from "./components/MenuCard";
// import Navbar from "./components/Navbar";
import Menu from "./Api/Menu";
const App = () => {
  const [menuData, setMenuData] = useState(Menu);
  const filterMenu = (category) => {
    const updatedList = Menu.filter((props) => {
      return props.category === category;
    });
    setMenuData(updatedList);
  };
  return (
    <>
      <nav className="m-7">
        <div className="flex w-2/5 xsm:w-full justify-center align-middle gap-3 m-auto rounded-md">
          <li
            className="list-none text-lg p-5 rounder-md border-b-transparent rounded-md cursor-pointer border-b-4 border-transparent hover:bg-slate-100 hover:shadow-lg  active:border-b-4 active:border-blue-300"
            onClick={() => filterMenu("Breakfast")}
          >
            Breakfast
          </li>
          <li
            className="list-none text-lg p-5 rounder-md border-b-transparent rounded-md cursor-pointer border-b-4 border-transparent hover:bg-slate-100 hover:shadow-lg  active:border-b-4 active:border-blue-300"
            onClick={() => {
              filterMenu("Lunch");
            }}
          >
            Lunch
          </li>
          <li
            className="list-none text-lg p-5 rounder-md border-b-transparent rounded-md cursor-pointer border-b-4 border-transparent hover:bg-slate-100 hover:shadow-lg  active:border-b-4 active:border-blue-300"
            onClick={() => filterMenu("Evening")}
          >
            Evening
          </li>
          <li
            className="list-none text-lg p-5 rounder-md border-b-transparent rounded-md cursor-pointer border-b-4 border-transparent hover:bg-slate-100 hover:shadow-lg  active:border-b-4 active:border-blue-300"
            onClick={() => filterMenu("Dinner")}
          >
            Dinner
          </li>
          <li
            className="list-none text-lg p-5 rounder-md border-b-transparent rounded-md cursor-pointer hover:shadow-lg hover:bg-slate-300 "
            onClick={() => setMenuData(Menu)}
          >
            All
          </li>
        </div>
      </nav>
      <MenuCard menuData={menuData} />
    </>
  );
};

export default App;
