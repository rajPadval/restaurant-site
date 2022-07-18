import React from "react";

const MenuCard = ({ menuData }) => {
  return (
    <>
      <div className="grid w-fit m-auto grid-cols-3 p-3 gap-10 sm:grid-cols-1 md:grid-cols-2">
        {menuData.map((props) => {
          // const [id, name, category, price] = curElem;
          return (
            <>
              <div class="w-80 bg-white shadow-2xl  rounded-md" key={props.id}>
                {" "}
                <img
                  src={props.image}
                  className="w-[295px] m-3 overflow-hidden rounded-2xl border-2 hover:shadow-lg hover:shadow-blue-500 h-48"
                  alt=""
                  srcset=""
                />
                <div class="p-4 flex flex-col items-center">
                  {" "}
                  <p class="text-gray-400 font-light text-xs text-center">
                    {props.category}
                  </p>{" "}
                  <h1 class="text-gray-800 text-center mt-1">{props.name}</h1>{" "}
                  <p class="text-center text-gray-800 mt-1">₹{props.price}</p>{" "}
                  <div class="inline-flex items-center mt-2">
                    {" "}
                    <button class="bg-white rounded-l border text-gray-600 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center px-2 py-1 border-r border-gray-200">
                      {" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        {" "}
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M20 12H4"
                        />{" "}
                      </svg>{" "}
                    </button>{" "}
                    <div class="bg-gray-100 border-t border-b border-gray-100 text-gray-600 hover:bg-gray-100 inline-flex items-center px-4 py-1 select-none">
                      1
                    </div>{" "}
                    <button class="bg-white rounded-r border text-gray-600 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center px-2 py-1 border-r border-gray-200">
                      {" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        {" "}
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M12 4v16m8-8H4"
                        />{" "}
                      </svg>{" "}
                    </button>{" "}
                  </div>{" "}
                  <button class="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 active:bg-blue-700 disabled:opacity-50 mt-4 w-full flex items-center justify-center">
                    {" "}
                    Add to order{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6 ml-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      {" "}
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />{" "}
                    </svg>{" "}
                  </button>{" "}
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default MenuCard;
