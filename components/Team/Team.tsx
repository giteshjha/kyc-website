/* eslint-disable @next/next/no-img-element */
import React from "react";
import { TeamData } from "./TeamData";

function Member({
  avatar = "",
  name = "",
  title = "",
  facebook = "",
  instagram = "",
  linkedin = "",
  twitter = "",
}) {
  return (
    <div className="text-center text-gray-500 dark:text-gray-400">
      <img
        className="mx-auto mb-4 w-36 h-36 rounded-full"
        src={avatar}
        alt={`${name} Avatar`}
      />
      <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {name}
      </h3>
      <p>{title}</p>
      <ul className="flex justify-center mt-4 space-x-4">
        {facebook && (
          <li>
            <a
              href={facebook}
              className="text-[#39569c] hover:text-gray-900 dark:hover:text-white"
            >
              <i
                className={`fa-brands fa-facebook px-1 text-[#4267B2] text-[20px]`}
              />
            </a>
          </li>
        )}
        {instagram && (
          <li>
            <a
              href={instagram}
              className="text-[#c32aa3] hover:text-gray-900 dark:hover:text-white"
            >
              <i
                className={`fa-brands fa-instagram px-1 text-[#c32aa3] text-[20px]`}
              />
            </a>
          </li>
        )}
        {linkedin && (
          <li>
            <a
              href="#"
              className="text-gray-900 hover:text-gray-900 dark:hover:text-white dark:text-gray-300"
            >
              <i
                className={`fa-brands fa-linkedin px-1 text-[#0a66c2] text-[20px]`}
              />
            </a>
          </li>
        )}
        {twitter && (
          <li>
            <a
              href="#"
              className="text-[#1da1f2] hover:text-gray-900 dark:hover:text-white"
            >
              <i
                className={`fa-brands fa-twitter px-1 text-[#1da1f2] text-[20px]`}
              />
            </a>
          </li>
        )}
      </ul>
    </div>
  );
}

export default function Team({ title = "Our team", subtitle = "" }) {
  return (
    <section className="bg-black  min-h-[70vh]">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
        <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            {title}
          </h2>
          <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
            {subtitle}
          </p>
        </div>
        <div className="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {TeamData.map((member: any, idx) => (
            <Member {...member} key={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
