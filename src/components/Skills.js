import { translations } from "@/src/components/data/Translations";
import { useLanguage } from "@/src/context/LanguageContext";
import { motion } from "framer-motion";
import { skills } from "./data/Skills";
import { useEffect, useState } from "react";

const displaySkills = (skills) => {
    // State to track screen size
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    // Effect to set up resize listener
    useEffect(() => {
        const checkScreenSize = () => {
            setIsSmallScreen(window.innerWidth < 768);
        };

        // Initial check
        checkScreenSize();

        // Add listener
        window.addEventListener("resize", checkScreenSize);

        // Cleanup
        return () => window.removeEventListener("resize", checkScreenSize);
    }, []);

    return skills.skillsArray.map(function (skill) {
        var name = skill.name;
        var x = skill.x;

        // For y-coordinate, apply spacing multiplier on small screens
        var baseY = skill.y;

        // Parse the position values to get the numeric part and unit
        const parsePosition = (pos) => {
            const match = pos.match(/(-?\d+\.?\d*)(\w+)/);
            if (!match) return { value: 0, unit: "vw" };
            return { value: parseFloat(match[1]), unit: match[2] };
        };

        const yPos = parsePosition(baseY);

        // Apply spacing multiplier only for Y-axis on small screens
        // Increase vertical spacing by 60% on small screens
        const verticalSpacingMultiplier = isSmallScreen ? 2.3 : 1;

        // Calculate final Y position
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
    });
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
                {displaySkills(skills)}
            </div>
        </>
    );
};
export default Skills;
