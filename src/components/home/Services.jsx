import fe from "../../assets/img/fe.jpg";
import be from "../../assets/img/be.jpg";
import fs from "../../assets/img/fs.jpg";
function Services() {
  return (
    <div id="services" className="w-screen h-auto py-10 bg-gray-100">
      <div className="flex flex-col items-start justify-between mx-5 lg:mx-32 lg:flex-row">
        <div className="flex flex-col items-start justify-start w-full h-auto py-5 lg:pr-20 lg:w-1/2">
          <h1 className="text-3xl font-extrabold capitalize ">
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
        <div className="flex flex-col items-start justify-start w-full h-auto py-5 lg:w-1/2 ">
          <div className="flex items-center justify-start w-full h-auto p-3 mb-5 bg-white rounded-lg">
            <div className="hidden h-20 rounded-full lg:blockw-1/5">
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
            <div className="hidden w-1/5 h-20 rounded-full lg:block">
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
            <div className="hidden w-1/5 h-20 rounded-full lg:block">
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
