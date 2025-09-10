import { useState } from "react";

interface AccordionSchoolProps {
  title: string;
  children: React.ReactNode;
}

const AccordionSchool: React.FC<AccordionSchoolProps> = ({
  title,
  children,
}) => {
  const [accordionOpen, setaccordionOpen] = useState(false);

  return (
    <div className="bg-slate-600 rounded-xl p-4">
      <button
        onClick={() => setaccordionOpen(!accordionOpen)}
        className="flex justify-between w-full "
      >
        <span className="text-black dark:text-slate-100">{title}</span>
        <svg
          className="fill-indigo-500 dark:fill-white shrink-0 ml-8"
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${
              accordionOpen && "!rotate-180"
            }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
              accordionOpen && "!rotate-180"
            }`}
          />
        </svg>
      </button>
      <div
        className={`grid overflow-hidden transition-all ease-in-out text-slate-800/75 dark:text-slate-200/85 ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0] opacity-0"
        }`}
      >
        <div className="overflow-hidden">{children}</div>
      </div>
    </div>
  );
};

export default AccordionSchool;
