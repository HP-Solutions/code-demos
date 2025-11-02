import { useState, useRef } from "react";
import axios from "axios";

function ImageUploader({ onUploadSuccess }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef(null);

  const handleFileSelect = (file) => {
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      setStatus({ type: "error", message: "Please select an image file" });
      return;
    }

    setSelectedFile(file);
    setStatus({ type: "", message: "" });

    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);

    const file = e.dataTransfer.files[0];
    handleFileSelect(file);
  };

  const handleInputChange = (e) => {
    const file = e.target.files[0];
    handleFileSelect(file);
  };

  const handleUpload = async () => {
    if (!selectedFile) return;

    setUploading(true);
    setStatus({ type: "uploading", message: "Uploading image..." });

    const formData = new FormData();
    formData.append("image", selectedFile);

    try {
      const response = await axios.post("/api/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setStatus({ type: "success", message: "Image uploaded successfully!" });
      onUploadSuccess(response.data.url);

      setTimeout(() => {
        handleClear();
      }, 2000);
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error.response?.data?.error || "Upload failed. Please try again.",
      });
    } finally {
      setUploading(false);
    }
  };

  const handleClear = () => {
    setSelectedFile(null);
    setPreview(null);
    setStatus({ type: "", message: "" });
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className="upload-container">
      <div
        className={`dropzone ${isDragging ? "drag-active" : ""}`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current?.click()}
      >
        <div className="dropzone-icon">📁</div>
        <p>
          <strong>Click to select</strong> or drag and drop
        </p>
        <p className="dropzone-hint">PNG, JPG, GIF up to 10MB</p>
        <input
          ref={fileInputRef}
          type="file"
          className="file-input"
          accept="image/*"
          onChange={handleInputChange}
        />
      </div>

      {preview && (
        <div className="preview-container">
          <img src={preview} alt="Preview" className="preview-image" />
          <div className="upload-actions">
            <button onClick={handleUpload} disabled={uploading}>
              {uploading ? "Uploading..." : "Upload to S3"}
            </button>
            <button onClick={handleClear} disabled={uploading}>
              Clear
            </button>
          </div>
        </div>
      )}

      {status.message && (
        <div className={`status-message ${status.type}`}>{status.message}</div>
      )}
    </div>
  );
}

export default ImageUploader;
