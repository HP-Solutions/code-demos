function ImageGallery({ images }) {
  if (images.length === 0) {
    return (
      <div className="gallery">
        <h2>Uploaded Images</h2>
        <div className="gallery-empty">
          No images uploaded yet. Upload your first image above!
        </div>
      </div>
    );
  }

  return (
    <div className="gallery">
      <h2>Uploaded Images ({images.length})</h2>
      <div className="gallery-grid">
        {images.map((url, index) => (
          <div key={index} className="gallery-item">
            <img src={url} alt={`Uploaded ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageGallery;
