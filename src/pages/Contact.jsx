import { useCategories } from "@/hooks/useCategories";

function Contact() {
  // const [categories, setCategories] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);

  const { categories, isLoading } = useCategories();

  // getCategories();

  // useEffect(() => {
  //   async function getCategories() {
  //     setIsLoading(true);
  //     const res = await fetch(
  //       `http://localhost:1337/api/categories?locale=${language}`
  //     );
  //     const { data } = await res.json();
  //     setCategories(data);
  //     setIsLoading(false);
  //     console.log(data);
  //   }
  //   getCategories();
  // }, [language]);

  if (isLoading) return <p>Loading...</p>;
  console.log(categories);
  return (
    <div>
      {categories.map((cat) => (
        <p>{cat.name}</p>
      ))}
    </div>
  );
}

export default Contact;
