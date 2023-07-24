"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import GetIcon from "@/components/getIcon";

export default function Page() {
  const [step, setStep] = useState(1);

  const steps = [
    { step: 1, icon: "TbAd2" },
    { step: 2, icon: "TbSchool" },
  ];

  return (
    <div className="flex min-h-screen items-start bg-gradient-to-br from-slate-700 to-slate-900 pt-40">
      <div className="mx-auto w-full max-w-md rounded-2xl bg-gray-800">
        <div className="flex justify-between rounded p-8">
          {steps.map((item) => (
            <Step
              key={item.step}
              step={item.step}
              currentStep={step}
              icon={item.icon}
              change={setStep}
            />
          ))}
        </div>
        <div className="px-8 pb-8">
          <div className="animate-pulse">
            <div className="mt-2 h-6 w-40 rounded bg-slate-600" />
            <div className="mt-4 space-y-2">
              <div className="h-4 w-5/6 rounded bg-slate-600" />
              <div className="h-4 rounded bg-slate-600" />
              <div className="h-4 w-4/6 rounded bg-slate-600" />
            </div>
          </div>

          <div className="mt-10 flex justify-between">
            <button
              onClick={() => setStep(step < 2 ? step : step - 1)}
              className="rounded px-2 py-1 text-slate-400 hover:text-slate-700"
            >
              Atrás
            </button>
            <button
              onClick={() => setStep(step > 4 ? step : step + 1)}
              className={`${
                step > 4 ? "pointer-events-none opacity-50" : ""
              } bg flex items-center justify-center rounded-full bg-blue-500 py-1.5 px-3.5 font-medium tracking-tight text-white hover:bg-blue-600 active:bg-blue-700`}
            >
              Continuar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Step({ step, currentStep, icon, change }) {
  let status =
    currentStep === step
      ? "active"
      : currentStep < step
      ? "inactive"
      : "complete";

  return (
    <motion.div animate={status} className="relative">
      <motion.div
        variants={{
          active: {
            scale: 1,
            transition: {
              delay: 0,
              duration: 0.2,
            },
          },
          complete: {
            scale: 1.25,
          },
        }}
        transition={{
          duration: 0.6,
          delay: 0.2,
          type: "tween",
          ease: "circOut",
        }}
        className="absolute inset-0 rounded-full bg-gray-700"
      ></motion.div>

      <motion.div
        initial={false}
        variants={{
          inactive: {
            backgroundColor: "#1f2937",
            borderColor: "#374151",
            color: "#fff",
          },
          active: {
            backgroundColor: "#1f2937",
            borderColor: "#374151",
            color: "#fff",
          },
          complete: {
            backgroundColor: "#15803d",
            borderColor: "#374151",
            color: "#fff",
          },
        }}
        transition={{ duration: 0.2 }}
        className={`relative flex h-10 w-10 items-center justify-center rounded-full border border-gray-700 font-semibold text-white`}
      >
        <div className="flex items-center justify-center">
          {status === "complete" ? (
            <CheckIcon
              className="h-6 w-6 text-white cursor-pointer"
              onClick={() => change(step)}
            />
          ) : (
            <GetIcon icon={icon} />
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

function CheckIcon(props) {
  return (
    <svg
      {...props}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={3}
    >
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          delay: 0.2,
          type: "tween",
          ease: "easeOut",
          duration: 0.2,
        }}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 13l4 4L19 7"
      />
    </svg>
  );
}
