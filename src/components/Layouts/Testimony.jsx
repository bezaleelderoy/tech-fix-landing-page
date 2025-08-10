import Marquee from "react-fast-marquee";

const Testimony = () => {
  const datas = [
    {
      name: "Deva Pratama",
      text: "Gacor abis Mamat bah support techfix",
    },
    {
      name: "Ariza Subyantoro",
      text: "Terimakasih techfix servis hp sehari jadi",
    },
    {
      name: "Satria Bela Pratama",
      text: "Lumayanlah terimakasih TechFix",
    },
    {
      name: "Yusuf",
      text: "Bisa ganti SSD oke",
    },
  ];

  const datas2 = [
    {
      name: "Radicka Yogisara",
      text: "Makasih techfix joki web 20rb anjay",
    },
    {
      name: "Adrian",
      text: "Servis mura mantap pula",
    },
    {
      name: "Imran",
      text: "Terimakasih bisa unlock google account",
    },
    {
      name: "Seva Winata",
      text: "Makasih TechFix joki web gacor",
    },
  ];
  return (
    <div className="mx-auto max-w-[1240px] flex px-4 flex-col items-start overflow-hidden">
      <h1 className="text-5xl text-blue-500 font-bold mt-24">Testimonial</h1>
      <p className="mt-3 text-slate-600 text-xl">
        Kami percaya TechFix memberikan kepuasan pelanggan terbaik 100%.
      </p>
      <div className="w-[120px] bg-blue-500 h-1.5 rounded-lg mt-4"></div>
      <Marquee className="mt-10">
        {datas.map((data) => (
          <div className="bg-slate-50 rounded-lg border border-slate-200 py-4 px-5 mx-2">
            <h1 className="text-blue-500 font-semibold">{data.name}</h1>
            <p>{data.text}</p>
          </div>
        ))}
      </Marquee>
      <Marquee className="mt-5" direction="right">
        {datas2.map((data) => (
          <div className="bg-slate-50 rounded-lg border border-slate-200 py-4 px-5 mx-2">
            <h1 className="text-blue-500 font-semibold">{data.name}</h1>
            <p>{data.text}</p>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Testimony;
