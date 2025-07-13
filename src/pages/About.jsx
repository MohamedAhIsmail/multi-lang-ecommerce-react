import { useLanguage } from "@/hooks/useLanguage";
import { getSingleCategory } from "@/services/apiCategories";
import { useEffect } from "react";

function About() {
  const { language } = useLanguage();
  useEffect(() => {
    getSingleCategory("b2mo1ldj60fgifp0787ojk97", language);
  }, [language]);

  return <div>About</div>;
}

export default About;
