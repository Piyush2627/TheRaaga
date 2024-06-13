interface GalleryGridProps {
  imageUrls: string[];
}

const GalleryGrid = ({ imageUrls }: GalleryGridProps) => {
  return (
    <>
      {" "}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        {imageUrls.map((url, index) => {
          return (
            <div key={index}>
              <img className="h-auto max-w-full rounded-lg" src={url} alt="" />
            </div>
          );
        })}{" "}
      </div>
    </>
  );
};

export default GalleryGrid;
