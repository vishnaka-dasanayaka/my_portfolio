import mongo from "../../assets/img/mongo.png";
import fe from "../../assets/img/fe.jpg";

function Works() {
  return (
    <div id="works" className="w-screen h-auto py-10 bg-white">
      <h1 className="mx-5 text-3xl font-extrabold capitalize lg:mx-32">
        projects
      </h1>

      <div className="flex flex-col items-center mx-5 mt-10 lg:mx-32">
        <div className="w-full h-auto p-5 mb-5 border-4 border-purple-600 rounded-lg lg:mr-5 bg-purple-50">
          <h1 className="text-xl font-bold tracking-wider capitalize">
            eye planet{" "}
            <span className="text-xs italic tracking-normal text-gray-500 capitalize">
              (full-stack web dev project)
            </span>
          </h1>
          <div className="flex flex-col items-center justify-start lg:flex-row">
            <div className="w-full lg:w-1/3">
              <p className="py-5 ">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Impedit, temporibus? Saepe dolores corrupti, similique quis
                consequuntur a est.{" "}
                <span className="text-xs text-blue-500 cursor-pointer">
                  more...
                </span>
              </p>

              <h2 className="">Technologies</h2>
              <div className="flex items-center justify-start mt-2">
                <div className="w-10 h-10 p-1 mr-2 bg-white rounded-full">
                  <img
                    src={mongo}
                    className="object-cover w-full h-full"
                    alt=""
                  />
                </div>

                <div className="w-10 h-10 p-1 mr-2 bg-white rounded-full">
                  <img
                    src={mongo}
                    className="object-cover w-full h-full"
                    alt=""
                  />
                </div>

                <div className="w-10 h-10 p-1 mr-2 bg-white rounded-full">
                  <img
                    src={mongo}
                    className="object-cover w-full h-full"
                    alt=""
                  />
                </div>

                <div className="w-10 h-10 p-1 mr-2 bg-white rounded-full">
                  <img
                    src={mongo}
                    className="object-cover w-full h-full"
                    alt=""
                  />
                </div>

                <div className="w-10 h-10 p-1 mr-2 bg-white rounded-full">
                  <img
                    src={mongo}
                    className="object-cover w-full h-full"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="grid items-center justify-center w-full grid-cols-2 lg:grid-cols-3 lg:w-2/3">
              <div className="p-2 ">
                <img src={fe} className="object-cover w-full h-full" alt="" />
              </div>

              <div className="p-2 ">
                <img src={fe} className="object-cover w-full h-full" alt="" />
              </div>

              <div className="p-2 ">
                <img src={fe} className="object-cover w-full h-full" alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-auto p-5 mb-5 border-4 border-blue-600 rounded-lg lg:mr-5 bg-blue-50">
          <h1 className="text-xl font-bold tracking-wider capitalize">
            eye planet{" "}
            <span className="text-xs italic tracking-normal text-gray-500 capitalize">
              (full-stack web dev project)
            </span>
          </h1>
          <div className="flex flex-col items-center justify-start lg:flex-row">
            <div className="w-full lg:w-1/3">
              <p className="py-5 ">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Impedit, temporibus? Saepe dolores corrupti, similique quis
                consequuntur a est.{" "}
                <span className="text-xs text-blue-500 cursor-pointer">
                  more...
                </span>
              </p>

              <h2 className="">Technologies</h2>
              <div className="flex items-center justify-start mt-2">
                <div className="w-10 h-10 p-1 mr-2 bg-white rounded-full">
                  <img
                    src={mongo}
                    className="object-cover w-full h-full"
                    alt=""
                  />
                </div>

                <div className="w-10 h-10 p-1 mr-2 bg-white rounded-full">
                  <img
                    src={mongo}
                    className="object-cover w-full h-full"
                    alt=""
                  />
                </div>

                <div className="w-10 h-10 p-1 mr-2 bg-white rounded-full">
                  <img
                    src={mongo}
                    className="object-cover w-full h-full"
                    alt=""
                  />
                </div>

                <div className="w-10 h-10 p-1 mr-2 bg-white rounded-full">
                  <img
                    src={mongo}
                    className="object-cover w-full h-full"
                    alt=""
                  />
                </div>

                <div className="w-10 h-10 p-1 mr-2 bg-white rounded-full">
                  <img
                    src={mongo}
                    className="object-cover w-full h-full"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="grid items-center justify-center w-full grid-cols-2 lg:grid-cols-3 lg:w-2/3">
              <div className="p-2 ">
                <img src={fe} className="object-cover w-full h-full" alt="" />
              </div>

              <div className="p-2 ">
                <img src={fe} className="object-cover w-full h-full" alt="" />
              </div>

              <div className="p-2 ">
                <img src={fe} className="object-cover w-full h-full" alt="" />
              </div>
            </div>
          </div>
        </div>

        <button className="px-3 py-1 capitalize bg-gray-200 rounded-lg">
          more works ...
        </button>
      </div>
    </div>
  );
}

export default Works;
