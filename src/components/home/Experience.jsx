import lightway from "../../assets/img/lightway.svg";
import hifigod from "../../assets/img/hifigod.jpeg";
import fiver from "../../assets/img/fiver.png";
import AddIcon from "@mui/icons-material/Add";

function Experience() {
  return (
    <div id="experience" className="w-screen h-auto py-10 bg-gray-100">
      <h1 className="mx-5 text-3xl font-extrabold capitalize lg:mx-32">
        work experience
      </h1>

      <div className="items-start justify-start hidden grid-cols-2 mx-32 mt-10 lg:grid">
        <div className="flex flex-col items-start justify-start p-5 mb-3 mr-3 bg-white rounded-lg">
          <h1 className="mb-3 text-lg font-extrabold capitalize">
            software engineer
            <span className="ml-2 text-xs font-normal">(internship)</span>
          </h1>
          <div className="flex flex-col items-center lg:flex-row">
            <div className="w-2/3 mt-2 mb-5 lg:w-1/4 lg:mb-0 ">
              <img
                src={lightway}
                className="object-cover w-full h-fit"
                alt=""
              />
            </div>
            <div className="lg:ml-5">
              <h2 className="text-[#FE8906] text-xl lg:text-lg">
                <a href="https://lightwayit.com/" target="_blank">
                  LightwayIt (pvt) Ltd, Sri Lanka
                </a>
              </h2>
              <h3 className="text-xs font-thin">Oct,2023 - Jan,2024</h3>
            </div>
          </div>
          <div className="mt-3 ">
            <h2 className="my-3 font-extrabold capitalize">
              technologies :{" "}
              <span className="block font-serif font-normal lg:inline ">
                React JS, Express JS, Meta Developer Tools, Open AI, Amazon Web
                Services (Lambda, S3, DynamoDB, API Gateway, IAM, CloudFront,
                CloudWatch)
              </span>
            </h2>
            <h2 className="my-3 font-extrabold capitalize">
              projects :{" "}
              <a
                href="https://lightwayit.com/work.html#chatbot"
                target="_blank"
              >
                <span className="block font-serif font-normal text-blue-500 underline lg:inline hover:text-green-500">
                  Socialq chatbot
                </span>
                <span className="font-serif font-normal normal-case ">
                  {" "}
                  This a service powered by OpenAI's advanced NLP capabilities
                  to deliver personalised and engaging support. It accurately
                  interprets customer messages, automates repetitive tasks, and
                  tailors responses based on customer history and preferences,
                  enhancing efficiency and customer satisfaction.
                </span>
              </a>
            </h2>
            <div className="flex items-start justify-start mb-1">
              <AddIcon className="mt-[1px] scale-90" fontSize="small" />
              <p className="text-sm">
                Built an user interface for business owner to gather information
                using React JS.
              </p>
            </div>
            <div className="flex items-start justify-start mb-1">
              <AddIcon className="mt-[1px] scale-90" fontSize="small" />
              <p className="text-sm">
                Used Meta Developer Tools to make connection between chatbot and
                server
              </p>
            </div>
            <div className="flex items-start justify-start mb-1">
              <AddIcon className="mt-[1px] scale-90" fontSize="small" />
              <p className="text-sm">
                Used AWS Lambda to run the code in serverless manner
              </p>
            </div>
            <div className="flex items-start justify-start mb-1">
              <AddIcon className="mt-[1px] scale-90" fontSize="small" />
              <p className="text-sm">
                Used other AWS to store data and make API.
              </p>
            </div>
            <div className="flex items-start justify-start mb-1">
              <AddIcon className="mt-[1px] scale-90" fontSize="small" />
              <p className="text-sm">
                Integrate OpenAI API to feed messages and get back the response
                according to data in databases.
              </p>
            </div>
            <div className="flex items-start justify-start mb-1">
              <AddIcon className="mt-[1px] scale-90" fontSize="small" />
              <p className="text-sm">Worked in a AGILE environment</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start p-5 mb-3 mr-3 bg-white rounded-lg">
          <h1 className="mb-3 text-lg font-extrabold capitalize">
            front end web developer
            <span className="ml-2 text-xs font-normal">
              (Remote, part time)
            </span>
          </h1>
          <div className="flex items-center">
            <div className="w-1/4 mt-2 ">
              <img src={hifigod} className="object-cover w-full h-fit" alt="" />
            </div>
            <div className="ml-5">
              <h2 className="text-teal-400">
                <a>Hifi God, Australia</a>
              </h2>
              <h3 className="text-xs font-thin">Jan,2024 - present</h3>
            </div>
          </div>
          <div className="mt-3 ">
            <h2 className="my-3 font-extrabold capitalize">
              technologies :{" "}
              <span className="font-serif font-normal ">
                Angular, AWS Cognito, Tailwind CSS
              </span>
            </h2>
            <h2 className="my-3 font-extrabold capitalize">
              projects :{" "}
              <a href="https://www.simzilla.com" target="_blank">
                <span className="font-serif font-normal text-blue-500 underline hover:text-green-500">
                  simzilla
                </span>
                <span className="font-serif font-normal normal-case">
                  {" "}
                  is a web application wchich provides a platform for people to
                  host their game rooms and find a matching game room.
                </span>
              </a>
            </h2>
            <div className="flex items-start justify-start mb-1">
              <AddIcon className="mt-[1px] scale-90" fontSize="small" />
              <p className="text-sm">
                Utilise the Angular framework to develop the structure and
                dynamic behavior of web pages.
              </p>
            </div>
            <div className="flex items-start justify-start mb-1">
              <AddIcon className="mt-[1px] scale-90" fontSize="small" />
              <p className="text-sm">
                Implement styling with the Tailwind CSS framework to enhance the
                visual appeal and responsiveness.
              </p>
            </div>
            <div className="flex items-start justify-start mb-1">
              <AddIcon className="mt-[1px] scale-90" fontSize="small" />
              <p className="text-sm">
                Integrate AWS Cognito for robust user management and
                authentication.
              </p>
            </div>
            <div className="flex items-start justify-start mb-1">
              <AddIcon className="mt-[1px] scale-90" fontSize="small" />
              <p className="text-sm">
                Work in the Sprint methodology to evaluate and track progress
                effectively.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start justify-start p-5 mb-3 mr-3 bg-white rounded-lg">
          <h1 className="mb-3 text-lg font-extrabold capitalize">
            Freelancer web developer
          </h1>
          <div className="flex items-center">
            <div className="w-1/4 mt-2 ">
              <img
                src={fiver}
                className="object-cover w-full scale-95 h-fit"
                alt=""
              />
            </div>
            <div className="ml-5">
              <h2 className="text-[#1CBF73]">
                <a
                  href="https://www.fiverr.com/sachinvishnaka?up_rollout=true"
                  target="_blank"
                >
                  Fiverr
                </a>
              </h2>
              <h3 className="text-xs font-thin">Jan,2023 - present</h3>
            </div>
          </div>
          <div className="mt-3 ">
            <h2 className="my-3 font-extrabold capitalize">
              technologies :{" "}
              <span className="font-serif font-normal ">
                Java Script, React JS, Tailwind CSS, Bootstrap
              </span>
            </h2>

            <div className="flex items-start justify-start mb-1">
              <AddIcon className="mt-[1px] scale-90" fontSize="small" />
              <p className="text-sm">
                Collaborated with international clients to resolve issues in
                their web applications using React JS and Tailwind
                CSS/Bootstrap.
              </p>
            </div>
            <div className="flex items-start justify-start mb-1">
              <AddIcon className="mt-[1px] scale-90" fontSize="small" />
              <p className="text-sm">
                Developed problem-solving and critical thinking skills through
                this experience.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid items-start justify-start grid-cols-1 mx-5 mt-10 lg:mx-32 lg:hidden">
        <div className="flex flex-col items-start justify-start p-5 mb-3 mr-3 bg-white rounded-lg">
          <h1 className="mb-3 text-lg font-extrabold capitalize">
            front end web developer
            <span className="ml-2 text-xs font-normal">
              (Remote, part time)
            </span>
          </h1>
          <div className="flex flex-col items-center ">
            <div className="w-2/3 h-24 mt-2 ">
              <img
                src={hifigod}
                className="object-contain w-full h-full scale-95"
                alt=""
              />
            </div>
            <div className="">
              <h2 className="text-xl text-[#93ad2d]">
                <a>Hifi God, Australia</a>
              </h2>
              <h3 className="text-xs font-thin">Jan,2024 - present</h3>
            </div>
          </div>
          <div className="mt-3 ">
            <h2 className="my-3 font-extrabold capitalize">
              technologies :{" "}
              <span className="block font-serif font-normal ">
                Angular, AWS Cognito, Tailwind CSS
              </span>
            </h2>
            <h2 className="my-3 font-extrabold capitalize">
              projects :{" "}
              <a href="https://www.simzilla.com" target="_blank">
                <span className="block font-serif font-normal text-blue-500 underline hover:text-green-500">
                  simzilla
                </span>
                <span className="font-serif font-normal normal-case">
                  {" "}
                  This a web application wchich provides a platform for people
                  to host their game rooms and find a matching game room.
                </span>
              </a>
            </h2>
            <div className="flex items-start justify-start mb-1">
              <AddIcon className="mt-[1px] scale-90" fontSize="small" />
              <p className="text-sm">
                Utilise the Angular framework to develop the structure and
                dynamic behavior of web pages.
              </p>
            </div>
            <div className="flex items-start justify-start mb-1">
              <AddIcon className="mt-[1px] scale-90" fontSize="small" />
              <p className="text-sm">
                Implement styling with the Tailwind CSS framework to enhance the
                visual appeal and responsiveness.
              </p>
            </div>
            <div className="flex items-start justify-start mb-1">
              <AddIcon className="mt-[1px] scale-90" fontSize="small" />
              <p className="text-sm">
                Integrate AWS Cognito for robust user management and
                authentication.
              </p>
            </div>
            <div className="flex items-start justify-start mb-1">
              <AddIcon className="mt-[1px] scale-90" fontSize="small" />
              <p className="text-sm">
                Work in the Sprint methodology to evaluate and track progress
                effectively.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start justify-start p-5 mb-3 mr-3 bg-white rounded-lg">
          <h1 className="mb-3 text-lg font-extrabold capitalize">
            software engineer
            <span className="ml-2 text-xs font-normal">(internship)</span>
          </h1>
          <div className="flex flex-col items-center lg:flex-row">
            <div className="w-2/3 h-24 mt-2 ">
              <img
                src={lightway}
                className="object-contain w-full h-full scale-95"
                alt=""
              />
            </div>
            <div className="lg:ml-5">
              <h2 className="text-[#FE8906] text-xl lg:text-lg">
                <a href="https://lightwayit.com/" target="_blank">
                  LightwayIt (pvt) Ltd, Sri Lanka
                </a>
              </h2>
              <h3 className="text-xs font-thin">Oct,2023 - Jan,2024</h3>
            </div>
          </div>
          <div className="mt-3 ">
            <h2 className="my-3 font-extrabold capitalize">
              technologies :{" "}
              <span className="block font-serif font-normal lg:inline ">
                React JS, Express JS, Meta Developer Tools, Open AI, Amazon Web
                Services (Lambda, S3, DynamoDB, API Gateway, IAM, CloudFront,
                CloudWatch)
              </span>
            </h2>
            <h2 className="my-3 font-extrabold capitalize">
              projects :{" "}
              <a
                href="https://lightwayit.com/work.html#chatbot"
                target="_blank"
              >
                <span className="block font-serif font-normal text-blue-500 underline lg:inline hover:text-green-500">
                  Socialq chatbot
                </span>
                <span className="font-serif font-normal normal-case ">
                  {" "}
                  This a service powered by OpenAI's advanced NLP capabilities
                  to deliver personalised and engaging support. It accurately
                  interprets customer messages, automates repetitive tasks, and
                  tailors responses based on customer history and preferences,
                  enhancing efficiency and customer satisfaction.
                </span>
              </a>
            </h2>
            <div className="flex items-start justify-start mb-1">
              <AddIcon className="mt-[1px] scale-90" fontSize="small" />
              <p className="text-sm">
                Built an user interface for business owner to gather information
                using React JS.
              </p>
            </div>
            <div className="flex items-start justify-start mb-1">
              <AddIcon className="mt-[1px] scale-90" fontSize="small" />
              <p className="text-sm">
                Used Meta Developer Tools to make connection between chatbot and
                server
              </p>
            </div>
            <div className="flex items-start justify-start mb-1">
              <AddIcon className="mt-[1px] scale-90" fontSize="small" />
              <p className="text-sm">
                Used AWS Lambda to run the code in serverless manner
              </p>
            </div>
            <div className="flex items-start justify-start mb-1">
              <AddIcon className="mt-[1px] scale-90" fontSize="small" />
              <p className="text-sm">
                Used other AWS to store data and make API.
              </p>
            </div>
            <div className="flex items-start justify-start mb-1">
              <AddIcon className="mt-[1px] scale-90" fontSize="small" />
              <p className="text-sm">
                Integrate OpenAI API to feed messages and get back the response
                according to data in databases.
              </p>
            </div>
            <div className="flex items-start justify-start mb-1">
              <AddIcon className="mt-[1px] scale-90" fontSize="small" />
              <p className="text-sm">Worked in a AGILE environment</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start justify-start p-5 mb-3 mr-3 bg-white rounded-lg">
          <h1 className="mb-3 text-lg font-extrabold capitalize">
            Freelancer web developer
          </h1>
          <div className="flex flex-col items-center">
            <div className="w-2/3 h-24 mt-2 ">
              <img
                src={fiver}
                className="object-contain w-full h-full scale-95"
                alt=""
              />
            </div>
            <div className="mt-5 ">
              <h2 className="text-[#1CBF73] text-xl">
                <a
                  href="https://www.fiverr.com/sachinvishnaka?up_rollout=true"
                  target="_blank"
                >
                  Fiverr
                </a>
              </h2>
              <h3 className="text-xs font-thin">Jan,2023 - present</h3>
            </div>
          </div>
          <div className="mt-3 ">
            <h2 className="my-3 font-extrabold capitalize">
              technologies :{" "}
              <span className="block font-serif font-normal ">
                Java Script, React JS, Tailwind CSS, Bootstrap
              </span>
            </h2>

            <div className="flex items-start justify-start mb-1">
              <AddIcon className="mt-[1px] scale-90" fontSize="small" />
              <p className="text-sm">
                Collaborated with international clients to resolve issues in
                their web applications using React JS and Tailwind
                CSS/Bootstrap.
              </p>
            </div>
            <div className="flex items-start justify-start mb-1">
              <AddIcon className="mt-[1px] scale-90" fontSize="small" />
              <p className="text-sm">
                Developed problem-solving and critical thinking skills through
                this experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
