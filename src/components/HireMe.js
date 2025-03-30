import Link from "next/link";
import { CircularText } from "./Icons";

const HireMe = () => {
    return (
        <div className="fixed z-10 right-8 top-0 flex flex-col items-center justify-center overflow-hidden md:left-4 md:right-auto md:bottom-4 md:top-auto md:fixed">
            <div className="w-28 h-auto flex items-center justify-center relative sm:w-32 md:w-36 lg:w-48">
                <CircularText className="fill-dark animate-spin-slow dark:fill-light" />
                <Link
                    href="mailto:petru.tirla@gmail.com"
                    className="flex text-center items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light shadow-md border border-solid border-dark w-14 h-14 rounded-full font-semibold text-xs hover:bg-light hover:text-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light sm:w-16 sm:h-16 sm:text-sm md:w-20 md:h-20 md:text-base"
                >
                    Hire Me
                </Link>
            </div>
        </div>
    );
};
export default HireMe;
