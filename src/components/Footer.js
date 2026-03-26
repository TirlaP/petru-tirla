import Layout from "./Layout";
import Technologies from "./Technologies";
import { useLanguage } from "@/src/context/LanguageContext";
import { translations } from "@/src/components/data/Translations";

const Footer = () => {
    const { language } = useLanguage();
    const t = translations[language].footer;

    return (
        <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg dark:text-light dark:border-light sm:text-base p-0">
            <Layout className="py-8 md:ps-0 flex items-center justify-evenly xs:flex-col lg:py-6 lg:ps-40 xl:ps-60">
                <div className="xs:mb-3">
                    <div className="">
                        {t.builtWith}{" "}
                        <span className="text-primary dark:text-primaryDark text-2xl px-1">
                            &#9825;
                        </span>{" "}
                        {t.by}&nbsp;
                        <span className="underline underline-offset-2">Petru Tîrlă</span>
                    </div>
                    <div className="w-full flex justify-between mx-auto">
                        <Technologies tech1="#nextJS" tech2="#tailwindcss" tech3="#framer-motion" />
                    </div>
                </div>
                <div className="xs:mt-3">
                    <div>{new Date().getFullYear()} &copy; {t.allRightsReserved}</div>
                    <div className="w-full flex justify-end mx-auto text-xs">
                        {t.inspiredBy}&nbsp;
                        <a
                            href="https://github.com/codebucks27"
                            className="underline underline-offset-2 cursor-pointer"
                        >
                            CodeBucks
                        </a>
                    </div>
                </div>
            </Layout>
        </footer>
    );
};
export default Footer;
