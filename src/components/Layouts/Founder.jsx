import React from "react";

const Founder = () => {
  const items = [
    {
      name: "Mamat Seroja",
      position: "Founder",
      image: "./mamatsroja.webp",
    },
    {
      name: "Aurelius Frenandikus",
      position: "Co-Founder",
      image: "./aurelius.webp",
    },
    {
      name: "Henri Saputra",
      position: "Marketing Specialist",
      image: "./henri.webp",
    },
  ];
  return (
    <div className="mx-auto max-w-[1240px] flex px-4 py-28 flex-col items-start">
      <h1 className="text-5xl text-blue-500 font-bold">Meet Our Founder</h1>
      <p className="mt-3 text-slate-600 text-xl">
        Bertemu dengan para founder TechFix yang berpengalaman di bidang
        teknologi dan memiliki passion dalam dunia IT.
      </p>
      <div className="w-[120px] bg-blue-500 h-1.5 rounded-lg mt-4"></div>
      <div className="mt-8 flex max-md:flex-col justify-between items-center w-full">
        {items.map((item, key) => (
          <div
            key={key}
            className="border border-slate-300 rounded-lg px-4 py-4 md:first:mr-7 md:last:ml-7 max-md:first:mb-4 max-md:last:mt-4"
          >
            <h1 className="text-blue-500 text-xl font-semibold">{item.name}</h1>
            <p className="font-medium py-2">{item.position}</p>
            <img
              src={item.image}
              alt={item.name}
              className="rounded-lg w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Founder;
