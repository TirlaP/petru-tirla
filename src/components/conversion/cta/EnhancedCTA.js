import { motion } from "framer-motion";
import Link from "next/link";
import { FiArrowRight, FiCalendar, FiClock, FiMessageCircle, FiBriefcase } from "react-icons/fi";
import { useLanguage } from "@/src/context/LanguageContext";
import { t as tl } from "@/src/components/data/Translations";

const CTAButton = ({ cta, language }) => {
    const { text, link, type, icon, isExternal = false } = cta;
    const resolvedText = tl(text, language);

    // Determine icon component
    const getIcon = () => {
        switch (icon) {
            case "chat":
                return <FiMessageCircle className="ml-2 w-4 h-4 md:w-5 md:h-5" />;
            case "calendar":
                return <FiCalendar className="ml-1.5 w-4 h-4 md:ml-2 md:w-5 md:h-5" />;
            case "clock":
                return <FiClock className="ml-1.5 w-4 h-4 md:ml-2 md:w-5 md:h-5" />;
            case "portfolio":
                return <FiBriefcase className="ml-1.5 w-4 h-4 md:ml-2 md:w-5 md:h-5" />;
            default:
                return <FiArrowRight className="ml-1.5 w-4 h-4 md:ml-2 md:w-5 md:h-5" />;
        }
    };

    // Style variants
    const getButtonClasses = () => {
        switch (type) {
            case "primary":
                return "bg-primary dark:bg-primaryDark text-white hover:bg-primary/90 dark:hover:bg-primaryDark/90";
            case "secondary":
                return "bg-gray-700 dark:bg-gray-200 text-white dark:text-gray-800 hover:bg-gray-800 dark:hover:bg-gray-300";
            case "tertiary":
                return "bg-transparent text-primary dark:text-primaryDark hover:bg-primary/10 dark:hover:bg-primaryDark/10 border border-primary dark:border-primaryDark";
            case "outline":
                return "bg-transparent text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 border border-gray-300 dark:border-gray-700";
            default:
                return "bg-primary dark:bg-primaryDark text-white hover:bg-primary/90 dark:hover:bg-primaryDark/90";
        }
    };

    const buttonContent = (
        <motion.div
            className={`flex items-center justify-center px-3 py-1.5 rounded-lg font-medium transition-colors text-sm md:text-base md:px-4 md:py-2 lg:px-5 lg:py-2.5 ${getButtonClasses()}`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
        >
            {resolvedText}
            {getIcon()}
        </motion.div>
    );

    if (isExternal) {
        return (
            <a href={link} target="_blank" rel="noopener noreferrer">
                {buttonContent}
            </a>
        );
    }

    return <Link href={link}>{buttonContent}</Link>;
};

const EnhancedCTA = ({ variant, primaryCTA, secondaryCTA = null, fullWidth = false }) => {
    const { language } = useLanguage();
    const { heading, subheading } = variant;

    return (
        <div
            className={`enhanced-cta ${
                fullWidth ? "w-full" : "max-w-5xl mx-auto"
            } bg-gray-50 dark:bg-gray-900 rounded-xl p-4 border border-gray-200 dark:border-gray-700 shadow-md md:p-6 lg:p-8`}
        >
            <div className="flex flex-col items-start justify-between md:flex-row">
                <div className="mb-4 max-w-xl md:mr-6 md:mb-0">
                    <h3 className="text-xl font-bold text-dark dark:text-light mb-1 md:text-2xl md:mb-2">
                        {tl(heading, language)}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base">
                        {tl(subheading, language)}
                    </p>
                </div>

                <div className="flex flex-col space-y-2 w-full md:flex-row md:space-y-0 md:space-x-3 md:w-auto">
                    <CTAButton cta={primaryCTA} language={language} />
                    {secondaryCTA && <CTAButton cta={secondaryCTA} language={language} />}
                </div>
            </div>
        </div>
    );
};

export default EnhancedCTA;
