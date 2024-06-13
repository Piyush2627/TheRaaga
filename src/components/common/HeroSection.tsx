import MandalaPng from "../../assets/images/Asset 1.png";
function HeroSection() {
  return (
    <>
      <div className="flex justify-between gap-10 font-playfair">
        <div className="relative w-1/2">
          <img src={MandalaPng} className="h-full w-full" alt="" />
        </div>
        <div className="flex w-1/2 flex-col content-center justify-center">
          <p className="text-8xl text-grandis-300">Indian Classical Singing</p>
          <p className="mt-4 text-grandis-300 lg:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            magni quam minima eveniet esse recusandae corrupti. Id, ipsum quas a
            animi dicta beatae, impedit velit vitae aperiam harum asperiores
            sint!
          </p>
          <div>
            <button className="lg:px lg:mt-4 lg:rounded-lg lg:bg-grandis-300 lg:px-6 lg:py-2 lg:text-2xl lg:text-black">
              Register
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
