import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "react-headless-accordion";
import { FaChevronDown } from "react-icons/fa";

const Faq = () => {
  const questions = [
    {
      title: "Bagaimana cara kerja TechFix?",
      answer:
        "Hubungi Kita > Kita Dateng > Cek Barang > Kita Perbaiki > Kasih > Bayar",
    },
    {
      title: "Apakah ada alamat tetap?",
      answer: "Tidak. TechFix ada dimana saja",
    },
    {
      title: "Apakah data saya tidak akan hilang?",
      answer:
        "Tidak. Teknisi TechFix tau diri. Jika kita tidak mampu kita tidak akan ambil jobnya",
    },
    {
      title: "TechFix sampai mana saja?",
      answer: "Tergantung mood teknisi. paling jauh denpasar utara",
    },
    {
      title: "Barang yang dipakai ORI tidak?",
      answer: "Hmm gmn ya",
    },
    {
      title: "Ada garansi gak?",
      answer:
        "Ada. tenang aja kita bakal jual rugi klo misalnya anda tidak puas",
    },
    {
      title: "Kok sosmed techfix jarang aktif ya?",
      answer: "cc @henrigaming09",
    },
    {
      title: "Apakah TechFix buka loker magang?",
      answer: "Tidak",
    },
  ];
  return (
    <div className="mx-auto max-w-[1240px] flex  px-4 flex-col overflow-hidden">
      <h1 className="text-5xl text-blue-500 font-bold text-center mt-24">
        Frequently Asked Questions
      </h1>
      <Accordion className="mt-10">
        {questions.map((question, key) => (
          <AccordionItem className="my-10" key={key}>
            <AccordionHeader className="bg-slate-100 w-full flex items-center justify-between py-3 px-4 rounded-t-lg">
              <h3 className={`accordion-title font-medium`}>
                {question.title}
              </h3>
              <FaChevronDown />
            </AccordionHeader>

            <AccordionBody className="bg-slate-100 mb-5 rounded-b-lg">
              <div className="accordion-body py-3 px-4 text-slate-600">
                {question.answer}
              </div>
            </AccordionBody>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default Faq;
