import HeroSection from "../common/HeroSection";
import Bgimg from "../../assets/images/bgtexture.jpg";
import CourseFeatures from "../common/CourseFeatures";
function HomePage() {
  return (
    <div>
      <img
        src={Bgimg}
        className="absolute left-0 top-0 -z-50 h-screen w-screen"
        alt=""
      />
      <div className="absolute left-0 top-0 -z-40 h-screen w-full bg-gradient-to-t from-revolver-950 to-transparent"></div>
      <HeroSection />
      <div className="mt-44">
        <p className="text-center font-playfair text-6xl text-grandis-300">
          Decrption
        </p>
        <p className="mt-4 text-center font-playfair text-lg text-grandis-300 lg:px-24">
          Welcome to The Raaga, your gateway to the enchanting world of Indian
          Classical Singing. At The Raaga, we are dedicated to preserving and
          promoting the rich heritage of Indian classical music through
          comprehensive and immersive learning experiences. Whether you are a
          beginner looking to explore the basics or an advanced student seeking
          to refine your skills, our expert instructors will guide you on a
          melodious journey of discovery and mastery. Join us to experience the
          profound beauty and intricate nuances of this timeless art form.
        </p>
      </div>

      <div className="mt-24 h-48 w-full">
        <div className="absolute left-0 flex h-48 w-full items-center justify-center bg-[url(./assets/images/mandalaBackGround.jpeg)] bg-cover bg-center opacity-70">
          <div className="text-center text-5xl font-extrabold capitalize text-revolver-950">
            Start learning from the best music teacher.
          </div>
        </div>
      </div>
      <div className="mt-24">
        <CourseFeatures />
      </div>
    </div>
  );
}

export default HomePage;
