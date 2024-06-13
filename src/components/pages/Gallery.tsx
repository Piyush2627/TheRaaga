import GalleryGrid from "../common/GalleryGrid";

const imageUrls = [
  "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp",
  "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp",
  "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp",
  "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp",
  "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp",
  "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(77).webp",
  "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp",
  "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp",
  "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp",
];

function Gallery() {
  return (
    <>
      <div className="py-4 font-playfair text-3xl text-grandis-300">
        Classes images
      </div>
      <GalleryGrid imageUrls={imageUrls} />
    </>
  );
}

export default Gallery;
