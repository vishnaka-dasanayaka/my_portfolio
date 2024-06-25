import fe from "../../assets/img/fe.jpg";

function Experience() {
  return (
    <div id="experience" className="w-screen h-auto py-10 bg-gray-100">
      <h1 className="mx-32 text-3xl font-extrabold capitalize">
        my work experience{" "}
      </h1>

      <div className="grid items-center justify-start grid-cols-3 mx-32 mt-10">
        <div className="flex items-center justify-start p-5 mb-3 mr-3 bg-white rounded-lg">
          <div className="w-16 h-16 ">
            <img src={fe} className="object-cover w-full h-full" alt="" />
          </div>
          <div className="ml-3">
            <h1 className="text-sm font-extrabold capitalize">
              freelancer web developer
            </h1>
            <h2 className="text-green-500">
              <a href="">@fiverr</a>
            </h2>
            <h3 className="text-xs font-thin">2022 - present</h3>
          </div>
        </div>

        <div className="flex items-center justify-start p-5 mb-3 mr-3 bg-white rounded-lg">
          <div className="w-16 h-16 ">
            <img src={fe} className="object-cover w-full h-full" alt="" />
          </div>
          <div className="ml-3">
            <h1 className="text-sm font-extrabold capitalize">
              trainee software engineer
            </h1>
            <h2 className="text-orange-400">
              <a href="">@lightwayIT</a>
            </h2>
            <h3 className="text-xs font-thin">Oct,2023 - Jan,2024</h3>
          </div>
        </div>

        <div className="flex items-center justify-start p-5 mb-3 mr-3 bg-white rounded-lg">
          <div className="w-16 h-16 ">
            <img src={fe} className="object-cover w-full h-full" alt="" />
          </div>
          <div className="ml-3">
            <h1 className="text-sm font-extrabold capitalize">
              front end web developer
              <span className="text-xs font-thin">(part time)</span>
            </h1>
            <h2 className="text-teal-400">
              <a href="">@hifigod</a>
            </h2>
            <h3 className="text-xs font-thin">Jan,2024 - present</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
