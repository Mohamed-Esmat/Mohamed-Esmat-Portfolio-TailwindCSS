import FooterIcon from "./FooterIcon";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 py-10 text-gray-700 dark:text-gray-300">
      <div className="align-element flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
        {/* Left: Name + Message */}
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
            Mohamed Esmat
          </h2>
          <p className="text-base text-gray-600 dark:text-gray-400">
            Frontend Developer | Building elegant user experiences with React
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-500">
            &copy; {currentYear} Mohamed Esmat. All rights reserved.
          </p>
        </div>

        {/* Right: Social Icons */}
        <div className="flex gap-6">
          <FooterIcon
            href="https://github.com/Mohamed-Esmat"
            label="GitHub"
            icon={
              <svg
                fill="currentColor"
                className="w-6 h-6"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.26.82-.577v-2.234c-3.338.726-4.033-1.614-4.033-1.614-.546-1.385-1.333-1.753-1.333-1.753-1.09-.745.083-.73.083-.73 1.205.085 1.838 1.237 1.838 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.42-1.305.763-1.605-2.665-.303-5.466-1.332-5.466-5.931 0-1.31.468-2.38 1.236-3.22-.124-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.3 1.23A11.5 11.5 0 0112 5.8c1.02.004 2.045.138 3.003.405 2.29-1.553 3.297-1.23 3.297-1.23.655 1.652.243 2.873.12 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.804 5.624-5.475 5.921.432.372.816 1.106.816 2.23v3.305c0 .32.216.694.825.576C20.565 21.796 24 17.296 24 12c0-6.63-5.37-12-12-12z"
                />
              </svg>
            }
          />

          <FooterIcon
            href="https://www.linkedin.com/in/mohamed-esmat-abdalhafiz-frontend-developer/"
            label="LinkedIn"
            icon={
              <svg
                fill="currentColor"
                className="w-6 h-6"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M20.452 20.452h-3.554v-5.569c0-1.327-.025-3.036-1.85-3.036-1.85 0-2.132 1.445-2.132 2.938v5.667H9.362V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.368-1.85 3.6 0 4.263 2.368 4.263 5.444v6.297zM5.337 7.433a2.064 2.064 0 110-4.127 2.064 2.064 0 010 4.127zM6.984 20.452H3.687V9h3.297v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.728v20.543C0 23.225.792 24 1.771 24h20.451C23.208 24 24 23.225 24 22.271V1.728C24 .774 23.208 0 22.225 0z" />
              </svg>
            }
          />

          <FooterIcon
            href="mailto:msmt0452@gmail.com"
            label="Email"
            icon={
              <svg
                fill="currentColor"
                className="w-6 h-6"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12 13.065l10.714-6.25a1 1 0 00-1.028-1.731L12 10.935 2.314 5.084a1 1 0 00-1.028 1.731L12 13.065zM22 8.118v9.882H2V8.118l10 5.833 10-5.833z" />
              </svg>
            }
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
