import { useState } from "react";
import ImageUploader from "./components/ImageUploader";
import ImageGallery from "./components/ImageGallery";

function App() {
  const [uploadedImages, setUploadedImages] = useState([]);

  const handleUploadSuccess = (imageUrl) => {
    setUploadedImages((prev) => [...prev, imageUrl]);
  };

  return (
    <div className="app">
      <h1>AWS S3 Image Uploader</h1>
      <ImageUploader onUploadSuccess={handleUploadSuccess} />
      <ImageGallery images={uploadedImages} />
    </div>
  );
}

export default App;
