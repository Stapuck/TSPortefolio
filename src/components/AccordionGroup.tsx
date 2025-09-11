import { useEffect, useState } from "react";
import { accordionDatafr } from "../medias/databases/index-fr";
import { accordionDataen } from "../medias/databases/index-en";
import Accordion from "../components/Accordion";

const AccordionGroup = () => {
  const initialLang = document.documentElement.lang || "fr";


  // todo : changer les data pour une vrai FAQ : 
  const [accordionData, setAccordionData] = useState(
    initialLang === "en" ? accordionDataen : accordionDatafr
  );

  useEffect(() => {
    const observer = new MutationObserver(() => {
      const lang = document.documentElement.lang;
      const newaccordiondata =
        lang === "en" ? accordionDataen : accordionDatafr;
      setAccordionData(newaccordiondata);
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["lang"],
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="pb-1 my-4">
        {accordionData.map((item, index) => (
          <div className="my-2" key={index}>
            <Accordion title={(item.title)}>{(item.text)}</Accordion>
          </div>
        ))}
      </div>
    </>
  );
};

export default AccordionGroup;
