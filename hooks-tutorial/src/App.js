// import Counter from "./Counter";

// const App = () => {
//   return <Counter />;
// };

// export default App;

import { useState } from "react";
import Average from "./Average";
// import Counter from "./Counter";
// import Info from "./info";

const App = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <button
        onClick={() => {
          setVisible(!visible);
        }}
      >
        {visible ? "숨기기" : "보이기"}
      </button>
      <hr />
      {visible && <Average />}
    </div>
  );
};

export default App;
