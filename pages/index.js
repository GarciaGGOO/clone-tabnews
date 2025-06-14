import { useEffect, useState } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";

function Home() {
  const [code, setCode] = useState("");

  useEffect(() => {
    const scanner = new Html5QrcodeScanner("reader", {
      fps: 10,
      qrbox: { width: 250, height: 100 },
    });

    scanner.render(
      (decodedText) => {
        setCode(decodedText);
        scanner.clear(); // para parar depois de ler
      },
      (error) => {
        // ignora erros de leitura contínuos
      },
    );

    return () => {
      scanner.clear().catch(console.error);
    };
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>Scanner de Código</h1>

      <div
        id="reader"
        style={{ width: "100%", maxWidth: 400, margin: "auto" }}
      ></div>

      <textarea
        value={code}
        cols={30}
        rows={3}
        readOnly
        placeholder="Código lido aparecerá aqui"
        style={{ marginTop: 20, width: "100%" }}
      />

      <button style={{ marginTop: 10 }}>Enviar</button>
    </div>
  );
}

export default Home;
