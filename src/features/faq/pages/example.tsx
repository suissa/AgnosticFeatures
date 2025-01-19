import { useState } from "react";
import { Accordion } from "../../../shared/components/Accordion";

const faqs = [
  { question: "O que é React?", answer: "React é uma biblioteca para construção de interfaces." },
  { question: "O que é Tailwind?", answer: "Tailwind é um framework CSS utilitário." },
];


const FAQExample = () => {
  
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
  <div>
    {faqs.map((faq, index) => (
      <Accordion key={index} onToggle={toggleAccordion} triggerValue={faq.question}>
        {faq.answer}
      </Accordion>
    ))}
  </div>
)};

export default FAQExample;