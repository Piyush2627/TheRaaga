import HeroSection from "../common/HeroSection";
import NavigationBar from "../common/NavigationBar";
import Bgimg from "../../assets/images/bgtexture.jpg";

function HomePage() {
  return (
    <div>
      <img
        src={Bgimg}
        className="absolute left-0 top-0 -z-50 h-screen w-screen"
        alt=""
      />
      <div className="absolute left-0 top-0 -z-40 h-screen w-screen bg-gradient-to-t from-revolver-950 to-transparent"></div>
      <NavigationBar />
      <HeroSection />
      <div className="mt-44">
        <p className="text-center font-playfair text-6xl text-grandis-300">
          Decrption
        </p>
        <p className="mt-4 text-center font-playfair text-lg text-grandis-300 lg:px-24">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, quae.
          Rem fuga laudantium odit eligendi est provident sapiente sunt
          voluptatibus beatae harum accusamus quia esse, ipsum omnis voluptatem
          tenetur explicabo.
        </p>
      </div>
      <div className="mt-24 flex items-center justify-between">
        <div className="text-9xl font-bold text-grandis-300 opacity-70">
          23+
        </div>{" "}
        <div className="text-9xl font-bold text-grandis-300 opacity-70">
          23+
        </div>{" "}
        <div className="text-9xl font-bold text-grandis-300 opacity-70">
          23+
        </div>
      </div>
    </div>
  );
}

export default HomePage;
