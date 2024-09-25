import { useLanguage } from "@/src/context/LanguageContext";
import { useState } from "react";

const LanguageSwitcher = () => {
    const { language, changeLanguage } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);

    const languages = {
        en: "English",
        ro: "Română",
        fr: "Français",
        it: "Italiano",
    };

    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center justify-center px-2 py-1 border rounded"
            >
                {languages[language]}
                <span className="ml-1">▼</span>
            </button>
            {isOpen && (
                <div className="absolute right-0 mt-2 py-2 w-40 bg-white rounded-md shadow-xl z-20">
                    {Object.entries(languages).map(([code, name]) => (
                        <button
                            key={code}
                            onClick={() => {
                                changeLanguage(code);
                                setIsOpen(false);
                            }}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                        >
                            {name}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default LanguageSwitcher;
