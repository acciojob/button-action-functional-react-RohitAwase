
import React, { useState } from "react";

const App = () => {
  const [show, setShow] = useState(false);

  return (
    <div id="main">
      <button id="click" onClick={() => setShow(true)}>
        Click Me
      </button>

      {show && (
        <p id="para">
          Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy
        </p>
      )}
    </div>
  );
};

export default App;
