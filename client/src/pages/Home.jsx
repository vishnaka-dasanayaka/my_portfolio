import me from "../assets/img/me.png";
import bg from "../assets/img/bg.jpg";
import bg_2 from "../assets/img/bg-2.png";
import bg_3 from "../assets/img/bg_3.png";
import foe from "../assets/img/foe.jpeg";

function Home() {
  return (
    <div className="relative flex items-center justify-end w-screen h-screen">
      <div className="z-10 flex flex-col items-start justify-between w-1/4 h-full pb-24 ml-32 pt-44 ">
        <div className="text-5xl font-extrabold tracking-wider capitalize">
          <h1 className="mb-5 ">Hey there,</h1>
          <h1>I'm Vishnaka</h1>
        </div>

        <div>
          <h1 className="text-sm text-[rgb(173,181,219)] cursor-pointer hover:text-blue-500 underline">
            vishnakadasanayaka@gmail.com
          </h1>
        </div>
        <div className="flex items-center justify-center">
          <div>
            <h1 className="text-4xl">2</h1>
          </div>
          <div className="flex flex-col items-start justify-center ml-2 text-xs uppercase">
            <h1>years</h1>
            <h1>experience</h1>
          </div>
        </div>
      </div>
      <div className="z-10 flex items-end justify-center w-1/2 h-full bg-transparent ">
        <img src={me} className="object-cover w-80%  h-5/6 " alt="" />
      </div>

      <div className="z-10 flex flex-col items-end justify-between w-1/4 h-full pb-24 mr-32 pt-44 ">
        <div className="flex flex-col items-end text-lg font-semibold tracking-wider ">
          <h1 className="">I develop full-stack web apps</h1>
          <h1>using MERN stack</h1>
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
      <div className="absolute z-0 flex items-center justify-center w-full h-full ">
        <img
          src={bg_3}
          className="object-cover w-full h-auto scale-75 opacity-50"
          alt=""
        />
      </div>
    </div>
  );
}

export default Home;
