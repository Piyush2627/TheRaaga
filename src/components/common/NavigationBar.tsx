import { Link } from "react-router-dom";
import Logo from "../../assets/images/Logo.png";
function NavigationBar() {
  return (
    <div className="font-playfair">
      <div className="flex w-full items-start justify-between">
        <div className="flex items-center text-xl text-grandis-300">
          <img src={Logo} className="size-28" alt="" />
          <div className="">
            <div className="text-3xl">The Raaga</div>{" "}
            <div className="text-lg">Music</div>
          </div>
        </div>
        <div className="flex items-center">
          <div className="group relative">
            <Link to={"/"}>
              <div className="v absolute m-auto h-full w-full hover:bg-gradient-to-b hover:from-grandis-300 hover:to-transparent hover:to-90%"></div>
              <div className="px-6 py-4 text-grandis-300 hover:text-grandis-500">
                Home
              </div>
            </Link>
          </div>
          <div className="group relative">
            <Link to={"/AboutUs"}>
              <div className="v absolute m-auto h-full w-full hover:bg-gradient-to-b hover:from-grandis-300 hover:to-transparent hover:to-90%"></div>
              <div className="px-6 py-4 text-grandis-300 hover:text-grandis-500">
                About Us
              </div>
            </Link>
          </div>
          <div className="group relative">
            <Link to={"/Enrollment"}>
              {" "}
              <div className="v absolute m-auto h-full w-full hover:bg-gradient-to-b hover:from-grandis-300 hover:to-transparent hover:to-90%"></div>
              <div className="px-6 py-4 text-grandis-300 hover:text-grandis-500">
                Enrollment
              </div>
            </Link>
          </div>
          <div className="group relative">
            <Link to={"/Gallery"}>
              <div className="v absolute m-auto h-full w-full hover:bg-gradient-to-b hover:from-grandis-300 hover:to-transparent hover:to-90%"></div>
              <div className="px-6 py-4 text-grandis-300 hover:text-grandis-500">
                Gallery
              </div>
            </Link>
          </div>
          <div className="group relative">
            <div className="v absolute m-auto h-full w-full hover:bg-gradient-to-b hover:from-grandis-300 hover:to-transparent hover:to-90%"></div>
            <div className="px-6 py-4 text-grandis-300 hover:text-grandis-500">
              Resources
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavigationBar;
