import { translations } from "@/src/components/data/Translations";
import { useLanguage } from "@/src/context/LanguageContext";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import LiIcon from "./LiIcon";
import { projects } from "./data/Projects";

const CollabDetails = ({ collaborations }) => {
    const { language } = useLanguage();
    return collaborations.map((collab) => (
        <Details
            key={collab.company}
            position={collab.position[language]}
            company={collab.company}
            companyLink={collab.companyLink}
            time={collab.time}
            address={collab.address}
            work={collab.work[language]}
        />
    ));
};

const Details = ({ position, company, companyLink, time, address, work }) => {
    const ref = useRef(null);
    const renderFormatted = (text) => {
        // Split on **bold**, *italic*, and [link](url) patterns
        const parts = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*|\[[^\]]+\]\([^)]+\))/g);
        return parts.map((part, i) => {
            if (part.startsWith('**') && part.endsWith('**')) {
                return <strong key={i}>{part.slice(2, -2)}</strong>;
            }
            if (part.startsWith('*') && part.endsWith('*') && !part.startsWith('**')) {
                return <em key={i}>{part.slice(1, -1)}</em>;
            }
            const linkMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
            if (linkMatch) {
                return <a key={i} href={linkMatch[2]} target="_blank" rel="noopener noreferrer" className="text-primary dark:text-primaryDark hover:underline">{linkMatch[1]}</a>;
            }
            return part;
        });
    };

    const renderBold = renderFormatted;

    const displayWork = (work) => {
        return work.split(". ").filter(d => d.trim()).map((description, index) => (
            <li key={index} className="list-disc ms-4">
                {renderBold(description.endsWith('.') ? description : description + '.')}
            </li>
        ));
    };

    return (
        <li
            ref={ref}
            className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col justify-between md:w-[80%]"
        >
            <LiIcon reference={ref} />
            <motion.div
                initial={{ y: 50 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.5, type: "spring" }}
            >
                <h3 className="capitalize font-bold text-xl sm:text-xl xs:text-lg">
                    {position}&nbsp;
                    <a
                        href={companyLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary dark:text-primaryDark capitalize"
                    >
                        @{company}
                    </a>
                </h3>
                <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
                    {time} | {address}
                </span>
                <div className="font-medium text-md w-full md:text-sm">
                    <ul>{displayWork(work)}</ul>
                </div>
            </motion.div>
        </li>
    );
};

const Experience = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center start"],
    });
    const { language } = useLanguage();
    const t = translations[language].experience;

    return (
        <div className="my-32">
            <h2 className="font-bold text-4xl mb-16 sm:mb-32 w-full text-center xs:text-4xl md:mb-16 sm:!text-6xl lg:!text-7xl">
                {t.heading}
            </h2>
            <div ref={ref} className="mx-auto relative w-full md:w[75%] lg:w-[90%]">
                <motion.div
                    className="absolute left-9 top-0.5 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]"
                    style={{ scaleY: scrollYProgress }}
                />
                <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
                    <CollabDetails collaborations={projects.collaborations} />
                </ul>
            </div>
        </div>
    );
};

export default Experience;
