import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <h3 className="heading">TailWind Learning !!!!!</h3> */}
      <section className=" flex justify-center items-center flex-col">
        <p className="bg-gray-500  p-2.5 text-base text-center m-12 flex justify-center items-center sm:text-xs md:text-xl lg:text-2xl xl:text-3xl">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil
          repellendus blanditiis, alias distinctio temporibus quod suscipit
          atque, consequatur veniam sapiente incidunt explicabo harum. Earum
          placeat mollitia sit, illum nam nisi.
        </p>

        <div className="card">This is Card Div!</div>

        <div className="flex justify-center items-center mt-16 bg-gray-300 h-80 w-90 rounded-lg">
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
    </>
  );
}

export default App;
