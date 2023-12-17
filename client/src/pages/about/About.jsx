const datas = [
  {
    id: 1,
    name: "Kobiowu Quadri",
    knows: "DevQuat",
    stack: "Mern Stack + Typescript + Next.js + Software",
    whatsApp: 2349157750858,
    profession: "Programmer",
    image: "/img/him.jpg",
    content:
      "I'm AbdulQuadri Kobiowu, an accomplished Full-Stack Developer specializing in the dynamic MERN (MongoDB, Express.js React.js Node.js) stack, enriched with TypeScript and Next.js. With a strong beckground in frontend and beckend technologies. I bring a holistic approach to web development.",
  },
  {
    id: 2,
    name: "Alimi Rasheed",
    knows: "Alimisolution",
    stack: "Mern Stack + Typescript",
    whatsApp: 2348080755931,
    profession: "Programmer",
    image: "/img/me.jpg",

    content:
      "I'm Alimi AbdulRosheed , a passionate Full-Stack Developer, specialized in MERN STACK (MongoDB, Express.js React.js Node.js) with TypeScript. I have a strong understanding of both frontend and backend technologies. I am a quick learner and a Team Player. And i have confident that i can be useful to any Web Development Team.",
  },
 
];

import Footer from "../../components/footer/Footer";
function About() {
  return (
    <>
      <div className="max-w-4xl mx-auto my-10 md:mb-32 mb-20 ">
        <h1 className="sm:text-3xl md:text-4xl text-2xl text-center md:mb-20 mb-14 font-semibold">
          About us
        </h1>
        <div className="grid md:grid-cols-2 justify-between items-center gap-7 lg:gap-20 px-18">
          {datas.map((data) => (
            <div
              key={data.id}
              className="shadow-lg py-10 px-10 mx-3 bg-gray-950 lg:mx-0"
            >
              <img
                src={data.image}
                alt={data.name}
                className="w-[300px] h-[300px] mx-auto rounded-full block mb-4 object-cover"
              />
              <div className="text-white text-center">
                <p className="tracking-wider mt-8 mb-2">{data.name}</p>
                <p className="text-sm tracking-widest bg-blue-800 inline-block px-4  rounded-md">
                  {data.knows}
                </p>
                <p className="text-sm mt-3">{data.stack}</p>
                <p className="text-sm mt-2">+{data.whatsApp}</p>
                <p className="text-sm tracking-widest mt-5">{data.content}</p>
                <p className="text-xs tracking-widest bg-blue-800 inline-block px-4 py-1  rounded-md mt-4">
                  {data.profession}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
