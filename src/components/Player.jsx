import { useState, useRef } from "react";

export default function Player() {
  const playerRef = useRef();

  const [currentName, setCurrentName] = useState();
  function handleButtonClick(){
    setCurrentName(playerRef.current.value);
  }

  return (
    <section id="player">
      <h2>Welcome {currentName?currentName:"Unknown"}</h2>
      <p>
        <input ref={playerRef} type="text" />
        <button onClick={handleButtonClick}>Set Name</button>
      </p>
    </section>
  );
}



// import { useState } from "react";

// export default function Player() {
//   const [currentName, setCurrentName] = useState();
//   const [hasClickedSubmit, setHasClickedSubmit] = useState(false);
//   function handleTextInputChange(event) {
//     setHasClickedSubmit(false);
//     setCurrentName(event.target.value);
//   }

//   function handleButtonClick(){
//     setHasClickedSubmit(true);
//   }

//   return (
//     <section id="player">
//       <h2>Welcome {hasClickedSubmit?currentName:"Unknown"}</h2>
//       <p>
//         <input value={currentName} onChange={handleTextInputChange} type="text" />
//         <button onClick={handleButtonClick}>Set Name</button>
//       </p>
//     </section>
//   );
// }