import { useState } from "react";

function Home() {
  const [text, setText] = useState("");

  const handleButton = () => {
    setText("Acho bom, eu mando e você obedece");
  };

  return (
    <div>
      <h2>Aperte o botão</h2>
      <button onClick={handleButton}>Clique aqui</button>
      {text && <h1>{text}</h1>}
    </div>
  );
}

export default Home;
