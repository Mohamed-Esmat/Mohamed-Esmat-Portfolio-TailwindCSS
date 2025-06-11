// Reusable icon link component
const FooterIcon = ({ href, label, icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="text-gray-600 dark:text-gray-400 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors duration-200"
  >
    {icon}
  </a>
);
export default FooterIcon;
