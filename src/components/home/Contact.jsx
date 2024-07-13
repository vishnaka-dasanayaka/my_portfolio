import fe from "../../assets/img/fe.jpg";

function Contact() {
  return (
    <div id="contact" className="w-screen h-auto py-10 bg-white">
      <div className="mx-32">
        <h1 className="text-3xl font-extrabold capitalize ">get in touch</h1>
        <div className="flex items-start justify-between mt-10">
          <div className="flex flex-col items-start justify-start mr-3">
            <div className="flex items-center justify-start mb-5">
              <img
                src={fe}
                className="object-cover w-10 h-10 rounded-full"
                alt=""
              />
              <h1 className="ml-3 font-extrabold ">+94 71 370 4691</h1>
            </div>

            <div className="flex items-center justify-start mb-5">
              <img
                src={fe}
                className="object-cover w-10 h-10 rounded-full"
                alt=""
              />
              <h1 className="ml-3 font-extrabold ">
                vishnakadasanayaka@gmail.com
              </h1>
            </div>

            <div className="flex items-center justify-start mb-5">
              <img
                src={fe}
                className="object-cover w-10 h-10 rounded-full"
                alt=""
              />
              <h1 className="ml-3 font-extrabold ">
                vishnaka-dasanayaka lnkd in
              </h1>
            </div>

            <div className="flex items-center justify-start mb-5">
              <img
                src={fe}
                className="object-cover w-10 h-10 rounded-full"
                alt=""
              />
              <h1 className="ml-3 font-extrabold ">vishnaka-dasanayaka</h1>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start mr-3">
            <div className="flex items-center justify-start mb-5">
              <img
                src={fe}
                className="object-cover w-10 h-10 rounded-full"
                alt=""
              />
              <h1 className="ml-3 font-extrabold ">vishnaka-dasanayaka hc</h1>
            </div>

            <div className="flex items-center justify-start mb-5">
              <img
                src={fe}
                className="object-cover w-10 h-10 rounded-full"
                alt=""
              />
              <h1 className="ml-3 font-extrabold ">
                vishnaka-dasanayaka leet{" "}
              </h1>
            </div>

            <div className="flex items-center justify-start mb-5">
              <img
                src={fe}
                className="object-cover w-10 h-10 rounded-full"
                alt=""
              />
              <h1 className="ml-3 font-extrabold ">
                vishnaka-dasanayaka fiverr
              </h1>
            </div>

            <div className="flex items-center justify-start mb-5">
              <img
                src={fe}
                className="object-cover w-10 h-10 rounded-full"
                alt=""
              />
              <h1 className="ml-3 font-extrabold ">vishnaka-dasanayaka</h1>
            </div>
          </div>

          <div className="flex flex-col items-center justify-between w-1/3">
            <h1 className="text-lg font-extrabold text-black ">
              Send a Message
            </h1>

            <input
              type="text"
              placeholder="Full name"
              className="w-full p-1 mt-3 border-b-2 border-black outline-none"
            />
            <input
              type="text"
              placeholder="Email"
              className="w-full p-1 mt-3 border-b-2 border-black outline-none"
            />
            <input
              type="text"
              placeholder="Message"
              className="w-full p-1 mt-3 border-b-2 border-black outline-none"
            />

            <button className="w-full py-2 mt-5 text-white capitalize bg-blue-400 hover:bg-blue-600">
              {" "}
              send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
