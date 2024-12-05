// import React, {  useState } from 'react'
// import { FaFire } from "react-icons/fa";
// import { FaTrash } from "react-icons/fa";

// function Burbarrel({ setcards }) {
//     const [active, setactive] = useState(false)
    
//     const handledragover = (e) => {
//         e.preventDefault();
//         setactive(true);
//     }
//     const handledragleave = () => {
//         setactive(false);
//     }
//     const handledragend = (e) => {
//         // console.log(e)
//         const cardid = e.dataTransfer.getData("cardid");
//         // console.log(cardid)
//         setcards((prev) => prev.filter((c) => c.id !== cardid));
//         setactive(false);
//     }
//     return (
//         <div 
//         onDragOver={handledragover} 
//         onDragLeave={handledragleave} 
//         onDrag={handledragend} 
//         // onDragEnd={}
//         className={`mt-10 grid h-56 w-56 shrink-0 place-content-center rounded border text-3xl 
//     ${active ?
//                 'border-red-800 bg-neutral-800/20 text-red-500'
//                 :
//                 'border-neutral-500 bg-neutral-500/20 text-neutral-500'}`
//         }>
//             {
//                 active ? <FaFire className=' animate-bounce' /> :
//                     <FaTrash />
//             }
//         </div>
//     )
// }

// export default Burbarrel



import React, {  useState } from 'react'
import { FaFire } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";

function Burbarrel({ setCards }) {
  const [active, setActive] = useState(false);

  const handleDragOver = (e) => {
    e.preventDefault();
    setActive(true);
  };

  const handleDragLeave = () => {
    setActive(false);
  };

  const handleDragEnd = (e) => {
    const cardId = e.dataTransfer.getData("cardId");

    setCards((pv) => pv.filter((c) => c.id !== cardId));

    setActive(false);
  };

  return (
    <div
      onDrop={handleDragEnd}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      className={`mt-10 grid h-56 w-56 shrink-0 place-content-center rounded border text-3xl ${
        active
          ? "border-red-800 bg-red-800/20 text-red-500"
          : "border-neutral-500 bg-neutral-500/20 text-neutral-500"
      }`}
    >
      {active ? <FaFire className="animate-bounce" /> : <FaTrash />}
    </div>
  );
}

export default Burbarrel;