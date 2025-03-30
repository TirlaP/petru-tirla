import { translations } from "@/src/components/data/Translations";
import { useLanguage } from "@/src/context/LanguageContext";
import { motion } from "framer-motion";
import { skills } from "./data/Skills";
import { useEffect, useState } from "react";

// Create a proper React component to replace the displaySkills function
const SkillsDisplay = ({ skills }) => {
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => {
            setIsSmallScreen(window.innerWidth < 768);
        };
        checkScreenSize();
        window.addEventListener("resize", checkScreenSize);
        return () => window.removeEventListener("resize", checkScreenSize);
    }, []);

    return (
        <>
            {skills.skillsArray.map(function (skill) {
                var name = skill.name;
                var x = skill.x;

                var baseY = skill.y;

                const parsePosition = (pos) => {
                    const match = pos.match(/(-?\d+\.?\d*)(\w+)/);
                    if (!match) return { value: 0, unit: "vw" };
                    return { value: parseFloat(match[1]), unit: match[2] };
                };

                const yPos = parsePosition(baseY);
                const verticalSpacingMultiplier = isSmallScreen ? 2.3 : 1;

                const y = `${yPos.value * verticalSpacingMultiplier}${yPos.unit}`;

                return (
                    <motion.div
                        key={name}
                        className={`flex items-center justify-center rounded-full font-semibold ${skill.colorLight} text-light py-3 px-6 shadow-dark cursor-pointer absolute dark:text-dark dark:${skill.colorDark} lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 text-xs p-2`}
                        whileHover={{ scale: 1.25 }}
                        initial={{ x: 0, y: 0 }}
                        whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
                    >
                        {name}
                    </motion.div>
                );
            })}
        </>
    );
};

const Skills = () => {
    const { language } = useLanguage();
    const t = translations[language].skills;

    return (
        <>
            <h2 className="font-bold text-4xl mt-16 md:mt-32 w-full text-center sm:text-6xl lg:text-7xl">
                {t.heading}
            </h2>
            <div className="h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] lg:bg-circularLightLg lg:dark:bg-circularDarkLg md:bg-circularLightMd md:dark:bg-circularDarkMd sm:bg-circularLightSm sm:dark:bg-circularDarkSm">
                <SkillsDisplay skills={skills} />
            </div>
        </>
    );
};
export default Skills;
