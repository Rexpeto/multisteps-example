import Step from "./Step";

const FormMultilstep = ({ children, submit, steps, step, changeStep }) => {
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
              change={changeStep}
            />
          ))}
        </div>
        <form className="px-8 pb-8">
          {children}
          <div className="mt-10 flex justify-between">
            <button
              onClick={() => changeStep(step < 2 ? step : step - 1)}
              className="rounded px-2 py-1 text-slate-400 hover:text-slate-700"
              type="button"
            >
              Atrás
            </button>
            {step >= steps.length ? (
              <button
                onClick={() => console.log("Enviar")}
                type="button"
                className="bg flex items-center justify-center rounded-full bg-blue-500 py-1.5 px-3.5 font-medium tracking-tight text-white hover:bg-blue-600 active:bg-blue-700"
              >
                Enviar
              </button>
            ) : (
              <button
                onClick={() =>
                  changeStep(step > steps.length ? step : step + 1)
                }
                type="button"
                className="bg flex items-center justify-center rounded-full bg-blue-500 py-1.5 px-3.5 font-medium tracking-tight text-white hover:bg-blue-600 active:bg-blue-700"
              >
                Continuar
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormMultilstep;
