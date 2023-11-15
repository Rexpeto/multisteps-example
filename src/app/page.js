"use client";
import { useState } from "react";
import FormMultilstep from "@/components/Form-mutilstep";

export default function Page() {
  const [step, setStep] = useState(1);
  const [info, setInfo] = useState({});

  const handlerStep = (currentStep) => {
    setStep(currentStep);
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
  };

  const steps = [
    { step: 1, icon: "TbAd2" },
    { step: 2, icon: "TbSchool" },
  ];

  return (
    <FormMultilstep steps={steps} step={step} changeStep={handlerStep}>
      {step === 1 ? <Prueba1 /> : <Prueba2 />}
    </FormMultilstep>
  );
}

const Prueba1 = () => {
  return (
    <div className="flex flex-col gap-4">
      <input
        type="text"
        name="name"
        className="block p-1.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-lg border-s-gray-50 border-s-2 border border-gray-300 outline-none dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
        placeholder="Nombre"
      />
      <input
        type="text"
        className="block p-1.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-lg border-s-gray-50 border-s-2 border border-gray-300 outline-none dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
        name="last_name"
        placeholder="Apellido"
      />
    </div>
  );
};

const Prueba2 = () => {
  return (
    <div>
      <input
        className="block p-1.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-lg border-s-gray-50 border-s-2 border border-gray-300 outline-none dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
        type="number"
        name="age"
        placeholder="Edad"
      />
    </div>
  );
};
