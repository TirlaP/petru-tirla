import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { workProcessData } from "@/src/components/data/conversion/WorkProcessData";
import {
    FiMessageCircle,
    FiFileText,
    FiClipboard,
    FiCode,
    FiCheckCircle,
    FiUploadCloud,
    FiLifeBuoy,
} from "react-icons/fi";

const WorkProcessStep = ({ step, isActive, onClick }) => {
    const { id, title, icon, timeline } = step;

    // Map icon names to components
    const getIcon = () => {
        const iconClass = "w-5 h-5 md:w-6 md:h-6";

        switch (icon) {
            case "chat":
                return <FiMessageCircle className={iconClass} />;
            case "document":
                return <FiFileText className={iconClass} />;
            case "plan":
                return <FiClipboard className={iconClass} />;
            case "code":
                return <FiCode className={iconClass} />;
            case "test":
                return <FiCheckCircle className={iconClass} />;
            case "rocket":
                return <FiUploadCloud className={iconClass} />;
            case "support":
                return <FiLifeBuoy className={iconClass} />;
            default:
                return <FiMessageCircle className={iconClass} />;
        }
    };

    return (
        <div className="work-process-step">
            {/* Connection line */}
            {id < workProcessData.steps.length && (
                <div className="hidden md:block absolute top-8 md:top-10 lg:top-12 left-1/2 w-full h-0.5 bg-gray-200 dark:bg-gray-700 -z-10"></div>
            )}

            <motion.button
                className="flex flex-col items-center cursor-pointer w-full"
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onClick(id)}
            >
                <div
                    className={`
          w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 rounded-full flex items-center justify-center 
          ${
              isActive
                  ? "bg-primary dark:bg-primaryDark text-white"
                  : "bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400 border-2 border-gray-200 dark:border-gray-700"
          }
          transition-colors duration-300
        `}
                >
                    {getIcon()}
                </div>

                <div className="mt-2 md:mt-3 text-center">
                    <h4
                        className={`font-bold text-xs sm:text-sm md:text-base ${
                            isActive
                                ? "text-primary dark:text-primaryDark"
                                : "text-dark dark:text-light"
                        }`}
                    >
                        {title}
                    </h4>
                    <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400">
                        {timeline}
                    </p>
                </div>
            </motion.button>
        </div>
    );
};

// Style to hide scrollbar across browsers
const scrollbarHideStyle = {
    scrollbarWidth: "none", // Firefox
    msOverflowStyle: "none", // IE/Edge
};

// Add CSS to hide WebKit (Safari/Chrome) scrollbars
const scrollbarHideCSS = `
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }
`;

const WorkProcessVisualization = () => {
    const [activeStep, setActiveStep] = useState(1);
    const { steps } = workProcessData;

    const handleStepClick = (stepId) => {
        setActiveStep(stepId);
    };

    const activeStepData = steps.find((step) => step.id === activeStep);

    return (
        <section className="work-process-section py-16 bg-gray-50 dark:bg-gray-900 w-full">
            <style>{scrollbarHideCSS}</style>
            <div className="max-w-screen-sm mx-auto px-4 sm:container sm:mx-auto sm:px-4">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-8 md:mb-12"
                >
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary dark:text-primaryDark mb-2 md:mb-4">
                        My Work Process
                    </h2>
                    <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        A transparent, collaborative approach from initial consultation to ongoing
                        support.
                    </p>
                </motion.div>

                <div className="w-full mx-auto overflow-hidden md:max-w-6xl">
                    {/* Steps visualization - horizontal timeline */}
                    <div
                        className="relative flex mb-8 md:mb-16 overflow-x-auto pb-4 md:pb-0 scrollbar-hide touch-pan-x"
                        style={scrollbarHideStyle}
                    >
                        <div className="w-max flex space-x-3 md:space-x-4 lg:space-x-6 pl-4 pr-12 md:px-0">
                            {/* Connecting line through all steps */}
                            <div className="hidden md:block absolute top-8 md:top-10 lg:top-12 left-0 w-full h-0.5 bg-gray-200 dark:bg-gray-700 -z-0"></div>

                            {steps.map((step) => (
                                <div
                                    key={step.id}
                                    className="relative z-10 flex-none min-w-[130px] sm:min-w-[150px] md:min-w-0 md:flex-1"
                                >
                                    <WorkProcessStep
                                        step={step}
                                        isActive={activeStep === step.id}
                                        onClick={handleStepClick}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Step details */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeStep}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="bg-white dark:bg-gray-800 rounded-xl p-4 md:p-6 lg:p-8 shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden"
                        >
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
                                <div className="lg:col-span-2">
                                    <h3 className="text-xl md:text-2xl font-bold text-primary dark:text-primaryDark mb-2 md:mb-4">
                                        {activeStepData.id}. {activeStepData.title}
                                    </h3>
                                    <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 mb-4 md:mb-6">
                                        {activeStepData.description}
                                    </p>

                                    <h4 className="text-base md:text-lg font-semibold text-dark dark:text-light mb-1 md:mb-2">
                                        What to expect:
                                    </h4>
                                    <ul className="list-disc list-inside text-sm md:text-base text-gray-700 dark:text-gray-300 space-y-1 md:space-y-2 ml-1 md:ml-2">
                                        {activeStepData.deliverables.split(",").map((item, i) => (
                                            <li key={i}>{item.trim()}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 md:p-6">
                                    <h4 className="text-base md:text-lg font-semibold text-dark dark:text-light mb-3 md:mb-4">
                                        Details
                                    </h4>

                                    <div className="space-y-3 md:space-y-4">
                                        <div>
                                            <h5 className="text-xs md:text-sm uppercase text-gray-500 dark:text-gray-400 font-medium mb-1">
                                                Estimated Timeline
                                            </h5>
                                            <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 font-medium">
                                                {activeStepData.timeline}
                                            </p>
                                        </div>

                                        <div>
                                            <h5 className="text-xs md:text-sm uppercase text-gray-500 dark:text-gray-400 font-medium mb-1">
                                                Your Involvement
                                            </h5>
                                            <p className="text-sm md:text-base text-gray-700 dark:text-gray-300">
                                                {activeStepData.clientInvolvement}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default WorkProcessVisualization;
