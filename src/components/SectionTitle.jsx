const SectionTitle = ({ title, subtitle }) => {
  return (
    <div className="border-b border-gray-200 pb-5 mb-8">
      <h2 className="text-3xl font-medium tracking-wider capitalize text-emerald-700">
        {title}
      </h2>
      {subtitle && <p className="text-gray-600 mt-2">{subtitle}</p>}
    </div>
  );
};
export default SectionTitle;
