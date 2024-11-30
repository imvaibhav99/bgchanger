// import { useState } from "react";

// function App() {
//   const [color, setColor] = useState("white");

//   return (
//     <div        //<div> For entire page
//       className="h-screen w-full duration-200"
//       style={{ backgroundColor: color }}
//     >
//       <div className="fixed flex flex-wrap justify-center bottom-12 px-2 inset-x-0">       //<div> for section which will contanin buttons
//         <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">      //<div> for button section
//           <button
//             onClick={() => setColor("red")}  //callback function to call the function setColor,uske andar ek aur function call kr rhe hain with color "red"
//             className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
//             style={{ backgroundColor: "red" }}
//           >
//             Red
//           </button>
//           <button
//             onClick={() => setColor("green")}
//             className="outline-none px-4 py-2 rounded-full text-white shadow-lg"
//             style={{ backgroundColor: "green" }}
//           >
//             Green
//           </button>
//           <button
//             onClick={() => setColor("blue")}
//             className="outline-none px-4 py-2 rounded-full text-white shadow-lg"
//             style={{ backgroundColor: "blue" }}
//           >
//             Blue
//           </button>
//           <button
//             onClick={() => setColor("yellow")}
//             className="outline-none px-4 py-2 rounded-full text-white shadow-lg"
//             style={{ backgroundColor: "yellow" }}
//           >
//             Yellow
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;
import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        backgroundColor: color,
        transition: "background-color 0.2s ease",
      }}
    >
      {/* Buttons */}
      <div
        style={{
          position: "absolute",
          bottom: "3rem",
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "1rem",
            backgroundColor: "white",
            padding: "1rem",
            borderRadius: "1.5rem",
            boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
          }}
        >
          <button
            onClick={() => setColor("red")} ////callback function to call the function setColor,uske andar ek aur function call kr rhe hain with color "red"
            style={{
              padding: "0.5rem 1rem",
              backgroundColor: "red",
              color: "white",
              border: "none",
              borderRadius: "9999px",
              cursor: "pointer",
            }}
          >
            Red
          </button>
          <button
            onClick={() => setColor("green")}
            style={{
              padding: "0.5rem 1rem",
              backgroundColor: "green",
              color: "white",
              border: "none",
              borderRadius: "9999px",
              cursor: "pointer",
            }}
          >
            Green
          </button>
          <button
            onClick={() => setColor("blue")}
            style={{
              padding: "0.5rem 1rem",
              backgroundColor: "blue",
              color: "white",
              border: "none",
              borderRadius: "9999px",
              cursor: "pointer",
            }}
          >
            Blue
          </button>
          <button
            onClick={() => setColor("yellow")}
            style={{
              padding: "0.5rem 1rem",
              backgroundColor: "yellow",
              color: "white",
              border: "none",
              borderRadius: "9999px",
              cursor: "pointer",
            }}
          >
            Yellow
          </button>
          <button
            onClick={() => setColor("grey")}
            style={{
              padding: "0.5rem 1rem",
              backgroundColor: "grey",
              color: "white",
              border: "none",
              borderRadius: "9999px",
              cursor: "pointer",
            }}
          >
            Grey
          </button>
          <button
            onClick={() => setColor("black")}
            style={{
              padding: "0.5rem 1rem",
              backgroundColor: "Black",
              color: "white",
              border: "none",
              borderRadius: "9999px",
              cursor: "pointer",
            }}
          >
            Black
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;