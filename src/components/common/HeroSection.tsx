import MandalaPng from "../../assets/images/pngwing.com.png";
function HeroSection() {
  return (
    <>
      <div className="flex justify-between gap-10 font-playfair">
        <div className="relative w-1/2">
          <img src={MandalaPng} className="lg:size-[650px]" alt="" />
        </div>
        <div className="flex w-1/2 flex-col content-center items-center justify-center">
          <p className="text-8xl text-grandis-300">!Indian Classical Singing</p>
          <p className="mt-4 text-grandis-300 lg:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            magni quam minima eveniet esse recusandae corrupti. Id, ipsum quas a
            animi dicta beatae, impedit velit vitae aperiam harum asperiores
            sint!
          </p>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
