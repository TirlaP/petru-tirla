import { useLanguage } from "@/src/context/LanguageContext";

const LanguageSwitcher = () => {
    const { language, changeLanguage } = useLanguage();

    return (
        <button
            onClick={() => changeLanguage(language === "en" ? "ro" : "en")}
            className="ml-3 flex items-center justify-center rounded-full p-1 bg-dark text-light dark:bg-light dark:text-dark"
        >
            {language === "en" ? "RO" : "EN"}
        </button>
    );
};

export default LanguageSwitcher;
