import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import TestimonialCard from "./TestimonialCard";
import { testimonials } from "@/src/components/data/conversion/TestimonialsData";

const TestimonialsCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const intervalRef = useRef(null);

    // Function to determine visible testimonials based on screen size with mobile-first approach
    const getVisibleCount = () => {
        if (typeof window !== "undefined") {
            if (window.innerWidth >= 1280) return 3; // xl and above (desktop)
            if (window.innerWidth >= 1024) return 2; // lg (tablet landscape)
            if (window.innerWidth >= 768) return 2; // md (tablet portrait)
            return 1; // sm and below (mobile)
        }
        return 1; // Default to mobile during SSR
    };

    const [visibleCount, setVisibleCount] = useState(getVisibleCount());

    // Update visible count on window resize
    useEffect(() => {
        const handleResize = () => {
            setVisibleCount(getVisibleCount());
        };

        if (typeof window !== "undefined") {
            window.addEventListener("resize", handleResize);
            return () => window.removeEventListener("resize", handleResize);
        }
    }, []);

    // Auto-rotation logic
    useEffect(() => {
        if (!isPaused) {
            intervalRef.current = setInterval(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
            }, 5000); // Change testimonial every 5 seconds
        }

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, [isPaused]);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    };

    const handleDotClick = (index) => {
        setCurrentIndex(index);
    };

    // Get visible testimonials
    const getVisibleTestimonials = () => {
        const result = [];

        for (let i = 0; i < visibleCount; i++) {
            const index = (currentIndex + i) % testimonials.length;
            result.push({
                testimonial: testimonials[index],
                isCurrent: i === 0,
            });
        }

        return result;
    };

    return (
        <section className="testimonials-section py-16 bg-gray-50 dark:bg-gray-900 w-full">
            <div className="max-w-screen-sm mx-auto px-4 sm:container sm:mx-auto sm:px-4">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl font-bold text-primary dark:text-primaryDark mb-4">
                        Client Testimonials
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        Don't just take my word for it. Here's what clients have to say about
                        working with me.
                    </p>
                </motion.div>

                <div
                    className="relative"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    <div className="flex overflow-hidden">
                        <motion.div
                            className="flex w-full"
                            animate={{ x: `-${currentIndex * (100 / visibleCount)}%` }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                        >
                            {testimonials.map((testimonial) => (
                                <div
                                    key={testimonial.id}
                                    className={`flex-shrink-0 w-full md:w-1/2 lg:w-1/2 xl:w-1/3 p-4`}
                                >
                                    <TestimonialCard
                                        testimonial={testimonial}
                                        isCurrent={testimonial.id === testimonials[currentIndex].id}
                                    />
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Navigation Arrows */}
                    <button
                        onClick={handlePrev}
                        className="absolute top-1/2 left-2 -translate-y-1/2 bg-white dark:bg-gray-800 p-2 rounded-full shadow-md z-10 opacity-80 hover:opacity-100 transition-opacity"
                        aria-label="Previous testimonial"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-primary dark:text-primaryDark"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 19l-7-7 7-7"
                            />
                        </svg>
                    </button>

                    <button
                        onClick={handleNext}
                        className="absolute top-1/2 right-2 -translate-y-1/2 bg-white dark:bg-gray-800 p-2 rounded-full shadow-md z-10 opacity-80 hover:opacity-100 transition-opacity"
                        aria-label="Next testimonial"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-primary dark:text-primaryDark"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                            />
                        </svg>
                    </button>

                    {/* Dots Navigation */}
                    <div className="flex justify-center mt-8">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => handleDotClick(index)}
                                className={`h-3 w-3 mx-1 rounded-full transition-colors ${
                                    index === currentIndex
                                        ? "bg-primary dark:bg-primaryDark"
                                        : "bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600"
                                }`}
                                aria-label={`Go to testimonial ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsCarousel;
