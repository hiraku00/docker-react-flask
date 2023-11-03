import { useState } from "react";
import axios from "axios";

function App() {
  const [text, setText] = useState("");
  const [processedText, setProcessedText] = useState("");

  const processText = async () => {
    const response = await axios.post("http://localhost:5001/process", {
      text,
    });
    setProcessedText(response.data.text);
  };

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={processText}>Process</button>
      <p>{processedText}</p>
    </div>
  );
}

export default App;
