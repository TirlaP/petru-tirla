import { useRouter } from 'next/router';
import { useState, useEffect, useMemo } from 'react';
import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Layout from '@/src/components/Layout';
import AnimatedText from '@/src/components/AnimatedText';
import TransitionEffect from '@/src/components/TransitionEffect';
import { caseStudies } from '@/src/components/data/conversion/CaseStudiesData';
import EnhancedCTA from '@/src/components/conversion/cta/EnhancedCTA';
import { ctaData } from '@/src/components/data/conversion/CTAData';
import FloatingCTA from '@/src/components/conversion/cta/FloatingCTA';
import { useLanguage } from '@/src/context/LanguageContext';
import { translations } from '@/src/components/data/Translations';

// For navigation between case studies
const PrevNextButtons = ({ currentId, t }) => {
  const currentIndex = caseStudies.findIndex(cs => cs.id === currentId);
  const prevCase = currentIndex > 0 ? caseStudies[currentIndex - 1] : null;
  const nextCase = currentIndex < caseStudies.length - 1 ? caseStudies[currentIndex + 1] : null;

  return (
    <div className="flex justify-between mt-12 border-t border-gray-200 dark:border-gray-700 pt-8">
      {prevCase ? (
        <Link href={`/case-studies/${prevCase.id}`}>
          <div className="flex items-center text-primary dark:text-primaryDark hover:underline">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span>{t.previous} {prevCase.title}</span>
          </div>
        </Link>
      ) : <div></div>}

      {nextCase ? (
        <Link href={`/case-studies/${nextCase.id}`}>
          <div className="flex items-center text-primary dark:text-primaryDark hover:underline">
            <span>{t.next} {nextCase.title}</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </Link>
      ) : <div></div>}
    </div>
  );
};

const MetricCard = ({ metric }) => {
  const { label, value, improvement } = metric;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 border border-gray-200 dark:border-gray-700">
      <div className="text-2xl font-bold text-primary dark:text-primaryDark">{value}</div>
      <div className="text-sm font-medium text-gray-700 dark:text-gray-300">{label}</div>
      {improvement && (
        <div className="text-xs text-green-600 dark:text-green-400 mt-1">{improvement}</div>
      )}
    </div>
  );
};

const TableOfContents = ({ sections, activeSection, setActiveSection, t }) => {
  return (
    <nav className="toc hidden lg:block sticky top-8 w-64 flex-shrink-0">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 border border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-bold text-dark dark:text-light mb-4">{t.tableOfContents}</h3>
        <ul className="space-y-2">
          {sections.map((section) => (
            <li key={section.id}>
              <button
                onClick={() => {
                  document.getElementById(section.id).scrollIntoView({ behavior: 'smooth' });
                  setActiveSection(section.id);
                }}
                className={`text-left w-full py-1 px-2 rounded-md transition-colors ${
                  activeSection === section.id
                    ? 'bg-primary/10 dark:bg-primaryDark/10 text-primary dark:text-primaryDark font-medium'
                    : 'hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300'
                }`}
              >
                {section.title}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

const CaseStudyDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const [caseStudy, setCaseStudy] = useState(null);
  const [activeSection, setActiveSection] = useState('overview');
  const { language } = useLanguage();
  const t = translations[language].caseStudyDetail;

  // Sections for table of contents
  const sections = React.useMemo(() => [
    { id: 'overview', title: t.overview },
    { id: 'challenge', title: t.theChallenge },
    { id: 'approach', title: t.ourApproach },
    { id: 'solution', title: t.theSolution },
    { id: 'results', title: t.resultsAndImpact }
  ], [t]);

  useEffect(() => {
    if (id) {
      const study = caseStudies.find(cs => cs.id === id);
      if (study) {
        setCaseStudy(study);
      } else {
        router.push('/projects');
      }
    }
  }, [id, router]);

  // Handle scroll to update active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  if (!caseStudy) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary dark:border-primaryDark"></div>
      </div>
    );
  }

  const {
    title,
    subtitle,
    clientIndustry,
    timeline,
    teamSize,
    technologies,
    challenge,
    approach,
    solution,
    results,
    images
  } = caseStudy;

  return (
    <>
      <Head>
        <title>{title} | Case Study | Petru Tîrlă</title>
        <meta name="description" content={`Case study of ${title}: ${subtitle}`} />
        <meta property="og:title" content={`${title} | Case Study | Petru Tîrlă`} />
        <meta property="og:description" content={`Case study of ${title}: ${subtitle}`} />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16 p-32 xl:p-24 lg:p-16 md:p-12 sm:pt-8">
          <AnimatedText
            text={title}
            className="mb-4 lg:!text-5xl sm:!text-4xl xs:!text-3xl"
          />
          <h2 className="text-xl text-gray-600 dark:text-gray-400 mb-12">{subtitle}</h2>

          <div className="flex lg:flex-col">
            {/* Main content */}
            <div className="flex-grow lg:w-full">
              {/* Hero image */}
              <div className="relative w-full h-80 mb-12 rounded-xl overflow-hidden">
                <Image
                  src={images.solution || '/images/case-studies/placeholder.jpg'}
                  alt={title}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 1024px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-8">
                    <span className="inline-block px-3 py-1 rounded-full bg-primary/80 dark:bg-primaryDark/80 text-white text-sm font-medium mb-2">
                      {clientIndustry}
                    </span>
                  </div>
                </div>
              </div>

              {/* Project details */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6">
                  <h3 className="text-sm uppercase text-gray-500 dark:text-gray-400 font-medium mb-2">{t.timeline}</h3>
                  <p className="font-bold text-dark dark:text-light">{timeline}</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6">
                  <h3 className="text-sm uppercase text-gray-500 dark:text-gray-400 font-medium mb-2">{t.teamSize}</h3>
                  <p className="font-bold text-dark dark:text-light">{teamSize}</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6">
                  <h3 className="text-sm uppercase text-gray-500 dark:text-gray-400 font-medium mb-2">{t.industry}</h3>
                  <p className="font-bold text-dark dark:text-light">{clientIndustry}</p>
                </div>
              </div>

              {/* Technologies */}
              <div className="mb-12" id="overview">
                <h2 className="text-2xl font-bold text-primary dark:text-primaryDark mb-4">{t.technologiesUsed}</h2>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Challenge */}
              <div className="mb-12" id="challenge">
                <h2 className="text-2xl font-bold text-primary dark:text-primaryDark mb-4">{t.theChallenge}</h2>
                <div className="prose dark:prose-invert max-w-none">
                  {challenge.split('\n\n').map((paragraph, i) => (
                    <p key={i} className="mb-4 text-gray-700 dark:text-gray-300">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              {/* Approach */}
              <div className="mb-12" id="approach">
                <h2 className="text-2xl font-bold text-primary dark:text-primaryDark mb-4">{t.ourApproach}</h2>
                <div className="prose dark:prose-invert max-w-none">
                  {approach.split('\n\n').map((paragraph, i) => (
                    <p key={i} className="mb-4 text-gray-700 dark:text-gray-300">
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* Before/After comparison if images exist */}
                {images.before && images.after && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <div>
                      <h3 className="text-lg font-medium text-dark dark:text-light mb-2">{t.before}</h3>
                      <div className="relative h-64 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
                        <Image
                          src={images.before}
                          alt={t.before}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-dark dark:text-light mb-2">{t.after}</h3>
                      <div className="relative h-64 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
                        <Image
                          src={images.after}
                          alt={t.after}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Solution */}
              <div className="mb-12" id="solution">
                <h2 className="text-2xl font-bold text-primary dark:text-primaryDark mb-4">{t.theSolution}</h2>
                <div className="prose dark:prose-invert max-w-none">
                  {solution.split('\n\n').map((paragraph, i) => (
                    <p key={i} className="mb-4 text-gray-700 dark:text-gray-300">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              {/* Results */}
              <div className="mb-12" id="results">
                <h2 className="text-2xl font-bold text-primary dark:text-primaryDark mb-4">{t.resultsAndImpact}</h2>

                {/* Metrics grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                  {results.metrics.map((metric, index) => (
                    <MetricCard key={index} metric={metric} />
                  ))}
                </div>

                {/* Testimonial */}
                {results.testimonial && (
                <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 border-l-4 border-primary dark:border-primaryDark mb-8">
                  <blockquote className="text-gray-700 dark:text-gray-300 italic mb-4">
                    &ldquo;{results.testimonial}&rdquo;
                  </blockquote>
                  <div className="flex items-center">
                    <div>
                      <div className="font-bold text-dark dark:text-light">{results.clientName}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">{results.clientPosition}</div>
                    </div>
                  </div>
                </div>
                )}
              </div>

              {/* Enhanced CTA */}
              <div className="mb-8">
                <EnhancedCTA
                  variant={ctaData.variants.find(v => v.id === 'case-studies')}
                  primaryCTA={ctaData.primary}
                  secondaryCTA={ctaData.tertiary}
                />
              </div>

              {/* Navigation between case studies */}
              <PrevNextButtons currentId={id} t={t} />
            </div>

            {/* Table of Contents */}
            <div className="ml-8 lg:ml-0 lg:mt-8">
              <TableOfContents
                sections={sections}
                activeSection={activeSection}
                setActiveSection={setActiveSection}
                t={t}
              />
            </div>
          </div>
        </Layout>

        {/* Floating CTA */}
        <FloatingCTA />
      </main>
    </>
  );
};

export default CaseStudyDetail;

// Pre-generate paths for all case studies
export async function getStaticPaths() {
  const paths = caseStudies.map(caseStudy => ({
    params: { id: caseStudy.id }
  }));

  return {
    paths,
    fallback: false
  };
}

// Pre-fetch data for each case study
export async function getStaticProps({ params }) {
  const caseStudy = caseStudies.find(cs => cs.id === params.id);

  if (!caseStudy) {
    return {
      notFound: true
    };
  }

  return {
    props: {
      caseStudy
    }
  };
}
