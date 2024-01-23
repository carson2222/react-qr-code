import React, { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import QRCode from "react-qr-code";

function App() {
  const inputRef = useRef(null);
  const [url, setUrl] = useState("Jebać kurwe piperowską");
  const [qrBlur, setQrBlur] = useState(true);
  const [error, setError] = useState({
    display: false,
    message: "",
  });
  function generateQrCode() {
    const newUrl = inputRef.current.value;
    if (!newUrl) {
      setError({ display: true, message: "Error: Input is empty" });
      setQrBlur(true);
      return;
    }
    setUrl(inputRef.current.value);
    setQrBlur(false);
    resetError();
  }
  function resetError() {
    setError({ display: false, message: "" });
  }
  return (
    <div className="w-screen h-screen bg-gradient-to-br from-colorDrop-2 to-colorDrop-3 flex justify-center items-center">
      <div className="flex justify-center items-center flex-col bg-colorDrop-1 border-4 border-colorDrop-4 p-6 min-w-1/4 min-h-2/4">
        <QRCode
          value={url}
          className={`${qrBlur ? "blur-[10px]" : "blur-[0]"} transition-all`}
        />
        <Input ref={inputRef} />
        <Button variant="outline" onClick={generateQrCode}>
          Generate QR code
        </Button>
        <p className={`text-red-700 ${error.display || "opacity-0"}`}>
          {error.message}
        </p>
      </div>
    </div>
  );
}

export default App;
