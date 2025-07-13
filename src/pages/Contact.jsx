import { useLanguage } from "@/hooks/useLanguage";
import { useEffect, useState } from "react";

function Contact() {
  const [categories, setCategories] = useState([]);
  const { language } = useLanguage() || "en";
  console.log("lang is:",language);

  // getCategories();

  useEffect(() => {
    async function getCategories() {
      const res = await fetch(
        `http://localhost:1337/api/categories?locale=${language}`
      );
      const { data } = await res.json();
      setCategories(data);
      console.log(data);
    }
    getCategories();
  }, [language]);

  return (
    <div>
      {categories.map((cat) => (
        <p>{cat.name}</p>
      ))}
    </div>
  );
}

export default Contact;
