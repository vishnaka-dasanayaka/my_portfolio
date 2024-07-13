import fe from "../../assets/img/fe.jpg";
import be from "../../assets/img/be.jpg";
import fs from "../../assets/img/fs.jpg";
function Services() {
  return (
    <div id="services" className="w-screen h-auto py-10 bg-gray-100">
      <div className="flex items-start justify-between mx-32">
        <div className="flex flex-col items-start justify-start w-1/2 h-auto py-5 pr-20">
          <h1 className="text-3xl font-extrabold capitalize">
            what do i provide?
          </h1>
          <p className="mt-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            repellat, aut et at, adipisci asperiores corrupti minus quod facere,
            dolorum quis officiis? Qui earum assumenda at quisquam veniam
            architecto vel.
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            maxime blanditiis vel eligendi unde. Porro repellat cumque iste
            impedit unde, velit consequuntur tenetur quod quas quam doloremque
            ea, fugiat error?
          </p>
        </div>
        <div className="flex flex-col items-start justify-start w-1/2 h-auto py-5 ">
          <div className="flex items-center justify-start w-full h-auto p-3 mb-5 bg-white rounded-lg">
            <div className="w-1/5 h-20 rounded-full">
              <img
                src={fe}
                className="object-cover w-20 h-20 bg-blue-100 rounded-full"
                alt=""
              />
            </div>

            <div className="flex flex-col items-start justify-start w-fit">
              <h1 className="text-xl font-extrabold tracking-wide capitalize ">
                front-end web development
              </h1>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias
                tenetur esse doloribus nemo exercitationem
              </p>
              <h3 className="text-xs text-blue-400 cursor-pointer hover:text-blue-500">
                projects...
              </h3>
            </div>
          </div>

          <div className="flex items-center justify-start w-full h-auto p-3 mb-5 bg-white rounded-lg">
            <div className="w-1/5 h-20 rounded-full">
              <img
                src={be}
                className="object-cover w-20 h-20 bg-blue-100 rounded-full"
                alt=""
              />
            </div>

            <div className="flex flex-col items-start justify-start w-fit">
              <h1 className="text-xl font-extrabold tracking-wide capitalize ">
                back-end web development
              </h1>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias
                tenetur esse doloribus nemo exercitationem
              </p>
              <h3 className="text-xs text-blue-400 cursor-pointer hover:text-blue-500">
                projects...
              </h3>
            </div>
          </div>

          <div className="flex items-center justify-start w-full h-auto p-3 mb-5 bg-white rounded-lg">
            <div className="w-1/5 h-20 rounded-full">
              <img
                src={fs}
                className="object-cover w-20 h-20 bg-blue-100 rounded-full"
                alt=""
              />
            </div>

            <div className="flex flex-col items-start justify-start w-fit">
              <h1 className="text-xl font-extrabold tracking-wide capitalize ">
                full-stack web development
              </h1>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias
                tenetur esse doloribus nemo exercitationem
              </p>
              <h3 className="text-xs text-blue-400 cursor-pointer hover:text-blue-500">
                projects...
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
