import { useState } from "react";

export default function Ad({
  ctaButtonTitle = "Learn more",
  ctaButtonUrl = "http://wa.link/t4zp1t",
  ctaText = "We Offer Web and Mobile App Development Service !",
  ctaTextSummary = "We Offer App Development Service.",
}) {
  const [show, setShow] = useState(true);
  return !!show ? (
    <div className="bg-indigo-600 w-full">
      <div className="mx-auto max-w-7xl py-3 px-3 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between">
          <div className="flex w-0 flex-1 items-center">
            <span className="flex rounded-lg bg-indigo-800 p-2">
              <i className="fa-solid fa-bullhorn  text-white"></i>
            </span>
            <p className="ml-3 truncate font-medium text-white">
              <span className="md:hidden">{ctaTextSummary}</span>
              <span className="hidden md:inline">{ctaText}</span>
            </p>
          </div>
          <div className="order-3 mt-2 w-full flex-shrink-0 sm:order-2 sm:mt-0 sm:w-auto">
            <a
              href={ctaButtonUrl}
              className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-2 text-sm font-medium text-indigo-600 shadow-sm hover:bg-indigo-50"
            >
              {ctaButtonTitle}
            </a>
          </div>
          <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
            <button
              type="button"
              className="-mr-1 flex rounded-md p-2 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
              onClick={() => setShow(false)}
            >
              <span className="sr-only">Dismiss</span>
              <i className="fa-solid fa-xmark  text-white"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : null;
}
