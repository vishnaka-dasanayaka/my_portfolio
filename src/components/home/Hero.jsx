import me from "../../assets/img/me.png";
import bg_3 from "../../assets/img/bg_3.png";
import foe from "../../assets/img/foe.jpeg";

function Hero() {
  return (
    <div
      id="home"
      className="relative flex flex-col items-center justify-end w-screen h-screen bg-white lg:flex-row "
    >
      <div className="relative h-full lg:hidden">
        <img src={me} className="object-cover w-full h-full " alt="" />
        <div className="absolute flex items-center justify-around w-full bottom-20">
          <a href="./#service">
            <button className="px-5 py-1 text-lg font-extrabold tracking-widest text-white uppercase bg-orange-500 rounded-lg">
              services
            </button>
          </a>
          <a href="./#experience">
            <button className="px-5 py-1 text-lg font-extrabold tracking-widest text-white uppercase bg-orange-500 rounded-lg">
              experiences
            </button>
          </a>
        </div>
      </div>
      <div className="z-10 flex-col items-start justify-between hidden w-1/4 h-full pb-24 ml-32 lg:flex pt-44 ">
        <div className="text-5xl font-extrabold tracking-wider capitalize ">
          <h1 className="mb-5 ">Hey there,</h1>
          <h1>I'm Vishnaka</h1>
        </div>

        <div className="">
          <h1 className="text-sm text-[rgb(53,132,169)] cursor-pointer font-extrabold hover:text-blue-500 underline">
            vishnakadasanayaka@gmail.com
          </h1>
          <h1 className="mt-2 text-xs text-blue-500 underline capitalize cursor-pointer">
            download CV
          </h1>
        </div>
        <div className="flex items-center justify-center font-extrabold">
          <div>
            <h1 className="text-4xl">2</h1>
          </div>
          <div className="flex flex-col items-start justify-center ml-2 text-xs uppercase">
            <h1>years</h1>
            <h1>experience</h1>
          </div>
        </div>
      </div>
      <div className="z-10 flex-col items-end justify-center hidden w-full h-full bg-transparent lg:flex lg:flex-row lg:w-1/2 mb-44">
        <img
          src={me}
          className="object-cover lg:scale-125    w-full lg:w-80% h-full lg:h-5/6 "
          alt=""
        />
      </div>

      <div className="z-10 flex-col items-end justify-between hidden w-1/4 h-full pb-24 mr-32 lg:flex pt-44 ">
        <div className="flex flex-col items-end text-lg font-semibold tracking-wider ">
          <h1 className="">I develop full-stack web apps</h1>
          <h1>
            with <span className="text-orange-400">MERN</span> stack
          </h1>
          <h1>
            or <span className="text-green-500">SpringBoot</span>
          </h1>
        </div>

        <div className="flex flex-col items-center justify-center">
          <div className="w-16 h-auto">
            <img src={foe} alt="" />
          </div>
          <div className="flex flex-col items-center justify-center mt-5 ml-2 text-xs ">
            <h1>B.Sc. Engineering (Hons) - UG</h1>
            <h1>Faculty of Engineering</h1>
            <h1>University of Ruhuna</h1>
          </div>
        </div>
      </div>

      <div className="absolute z-0 items-center justify-center hidden w-full h-full lg:flex ">
        <img
          src={bg_3}
          className="object-cover w-full h-auto scale-75 opacity-50 "
          alt=""
        />
      </div>
    </div>
  );
}

export default Hero;
