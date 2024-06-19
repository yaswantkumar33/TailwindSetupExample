import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [Dark, setDark] = useState(false);
  useEffect(() => {
    const togglebtn = document.getElementById("togglebtn");
    togglebtn.addEventListener("click", function () {
      if (document.documentElement.classList.contains("dark")) {
        console.log("yep its there ");
        document.documentElement.classList.remove("dark");
      } else {
        document.documentElement.classList.add("dark");
      }
    });
  }, []);
  return (
    <>
      <h3 className="heading">TailWind Learning !!!!!</h3>
      <section className=" flex justify-center items-center flex-col">
        <p className="bg-gray-500  p-2.5 text-base text-center m-6 flex justify-center items-center sm:text-xs md:text-xl lg:text-2xl xl:text-3xl">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil
          repellendus blanditiis, alias distinctio temporibus quod suscipit
          atque, consequatur veniam sapiente incidunt explicabo harum. Earum
          placeat mollitia sit, illum nam nisi.
        </p>

        <div className="card">This is Card Div!</div>

        <div className="flex justify-center items-center mt-6 bg-gray-300 h-20 w-90 rounded-lg">
          <div className="container h-10 w-80">
            This Div Is for Container class
          </div>
          <div className="container h-10 w-80 mx-auto">
            This Div Is for Container class
          </div>
          <div className="container h-10 w-80 mx-auto">
            This Div Is for Container class
          </div>
        </div>
      </section>
      {/* <section className="flex justify-center items-center flex-col">
        <h2>Section 2 !!</h2>
        <div className="fixed w-10 h-10 bg-red-500"> this is the div </div>
      </section> */}
      <div className="fixed w-10 h-10 bg-red-500 top-0"></div>
      <div className="flex justify-between mt-[10px]">
        <div className="h-16 w-16 bg-blue-400 rounded-full"></div>
        <div className="h-16 w-16 bg-blue-400 rounded-full"></div>
        <div className="h-16 w-16 bg-blue-400 rounded-full"></div>
      </div>
      <div className="grid grid-cols-4 gap-2 p-3">
        <div className="h-12 bg-gray-500"></div>
        <div className="h-12 bg-gray-500"></div>
        <div className="h-12 bg-gray-500"></div>
        <div className="h-12 bg-gray-500"></div>
        <div className="h-12 bg-gray-500"></div>
        <div className="h-12 bg-gray-500"></div>
        <div className="h-12 bg-gray-500"></div>
        <div className="h-12 bg-gray-500"></div>
      </div>
      <div className="md:block hidden">
        <p>
          i will be appearing where the device size is greater than equal to
          <span className="text-red-500">768px</span>
        </p>
      </div>
      <div className="max-md:block hidden">
        <p>
          i will be appearing where the device is less than equal to{" "}
          <span className="text-green-500">768px</span>
        </p>
      </div>
      <button className="my-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300">
        Clicl Here !
      </button>
      <div>
        <ul className="my-2 space-y-2">
          <li className="first:bg-green-400">Item 1</li>
          <li className="first:bg-yellow-400 odd:bg-green-100 even:bg-blue-100 p-2 ">
            Item 2
          </li>
          <li className="first:bg-yellow-400 odd:bg-green-100 even:bg-blue-100 p-2 ">
            Item 2
          </li>
          <li className="first:bg-yellow-400 odd:bg-green-100 even:bg-blue-100 p-2 ">
            Item 2
          </li>
          <li className="first:bg-yellow-400 odd:bg-green-100 even:bg-blue-100 p-2 ">
            Item 2
          </li>
        </ul>
      </div>

      {/* theme dark  */}
      <div className="m-10 px-6 py-8 rounded-lg shadow-xl ring-1 ring-slate-900/5  dark:bg-black ">
        <h1 className="dark:text-white">Dark Theme </h1>
        <p className="dark:text-white">Thiis the dark theme paragraph </p>
        <button
          id="togglebtn"
          className="px-2 bg-blue-500 text-white rounded-lg mt-3 text-sm font-medium"
          onClick={() => {
            // document.documentElement.classList.toggle("dark");
          }}
        >
          Toggle to dark mode
        </button>
      </div>
    </>
  );
}

export default App;
