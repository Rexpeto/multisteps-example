import { motion } from "framer-motion";
import GetIcon from "./getIcon";

const Step = ({ step, currentStep, icon, change }) => {
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
};

const CheckIcon = (props) => {
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
};

export default Step;
