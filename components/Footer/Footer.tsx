/* eslint-disable @next/next/no-html-link-for-pages */
export default function Footer() {
  return (
    <footer className="pb-4 text-gray-200">
      <div className="max-w-5xl xl:max-w-5xl mx-auto divide-y divide-gray-900 px-4 sm:px-6 md:px-8">
        <div className="flex flex-col-reverse justify-between pt-5 pb-4 border-t lg:flex-row bg-top border-black">
          <ul className="flex flex-col space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
            <li>
              <a
                href="/"
                className="md:text-md text-sm text-gray-200 hover:text-white transition-colors duration-300 hover:text-deep-purple-accent-400 font-semibold"
              >
                Terms of Service
              </a>
            </li>
            <li>
              <a
                href="/"
                className="md:text-md text-sm text-gray-200 hover:text-white transition-colors duration-300 hover:text-deep-purple-accent-400 font-semibold"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="/"
                className="md:text-md text-sm text-gray-200 hover:text-white transition-colors duration-300 hover:text-deep-purple-accent-400 font-semibold"
              >
                Ad Choices
              </a>
            </li>
            <li>
              <a
                href="/"
                className="md:text-md text-sm text-gray-200 hover:text-white transition-colors duration-300 hover:text-deep-purple-accent-400 font-semibold"
              >
                Cookie Policy
              </a>
            </li>
            <li>
              <a
                href="/"
                className="md:text-md text-sm text-gray-200 hover:text-white transition-colors duration-300 hover:text-deep-purple-accent-400 font-semibold"
              >
                Partners
              </a>
            </li>
          </ul>
          <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
            <a
              href="/"
              className="md:text-md text-sm text-gray-200 hover:text-white transition-colors duration-300 hover:text-deep-purple-accent-400 font-semibold tracking-tight"
            >
              {` © ${new Date().getFullYear()} KYC  Foundation.`}
            </a>
          </ul>
        </div>
      </div>
      <div className="text-[8px] px-4 sm:text-center">
        Made with<span className="px-2"> 💻</span> by{" "}
        <a href="https://whoamishubham.github.io" className="text-[#1DA1F2]">
          Shubham
        </a>
      </div>
    </footer>
  );
}
