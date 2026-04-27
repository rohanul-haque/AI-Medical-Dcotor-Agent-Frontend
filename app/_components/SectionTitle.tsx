const SectionTitle = ({
  badge,
  heading,
  description,
}: {
  badge: string;
  heading: string;
  description: string;
}) => {
  return (
    <div className="mx-auto max-w-xl text-center">
      {/* Badge */}
      <div className="inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-1 text-xs font-semibold text-green-700 ring-1 ring-green-200 dark:bg-green-900/30 dark:text-green-400 dark:ring-green-800">
        {badge}
      </div>

      {/* Heading */}
      <h2 className="mt-4 text-2xl font-semibold text-gray-900 md:text-3xl dark:text-gray-200">
        {heading}
      </h2>

      {/* Description */}
      <p className="mt-3 text-sm text-gray-600 dark:text-gray-300/80">
        {description}
      </p>
    </div>
  );
};

export default SectionTitle;
