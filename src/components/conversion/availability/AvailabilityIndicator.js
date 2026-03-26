import { availabilityData } from '@/src/components/data/conversion/AvailabilityData';
import Link from 'next/link';
import { useLanguage } from '@/src/context/LanguageContext';
import { translations, t as tl } from '@/src/components/data/Translations';

const AvailabilityIndicator = ({ compact = false }) => {
  const { language } = useLanguage();
  const ta = translations[language].availability;
  const status = tl(availabilityData.status, language);
  const nextAvailable = tl(availabilityData.nextAvailable, language);
  const responseTime = tl(availabilityData.responseTime, language);
  const { workingHours } = availabilityData;
  const timeZone = tl(availabilityData.timeZone, language);

  const isAvailable = (availabilityData.status.en || availabilityData.status) === 'Available';
  const dotColor = isAvailable ? 'bg-green-500' : 'bg-yellow-500';
  const textColor = isAvailable ? 'text-green-600 dark:text-green-400' : 'text-yellow-600 dark:text-yellow-400';

  if (compact) {
    return (
      <Link href="/contact" className="flex items-center gap-2 group">
        <span className={`${dotColor} w-2.5 h-2.5 rounded-full`} />
        <span className={`text-sm font-medium ${textColor} group-hover:underline`}>{status}</span>
      </Link>
    );
  }

  return (
    <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-5" id="availability">
      <div className="flex items-center gap-3 mb-4">
        <span className={`${dotColor} w-3 h-3 rounded-full`} />
        <h3 className={`text-lg font-bold ${textColor}`}>{status}</h3>
      </div>

      <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
        <p>{ta.startDate} <strong className="text-dark dark:text-light">{nextAvailable}</strong></p>
        <p>{ta.responseTime} <strong className="text-dark dark:text-light">{responseTime}</strong></p>
        <p>{ta.hours} <strong className="text-dark dark:text-light">{workingHours}</strong> <span>({timeZone})</span></p>
      </div>
    </div>
  );
};

export default AvailabilityIndicator;
