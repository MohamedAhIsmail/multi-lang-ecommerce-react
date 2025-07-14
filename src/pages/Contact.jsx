function Contact() {
  // // const [categories, setCategories] = useState([]);
  // // const [isLoading, setIsLoading] = useState(false);

  // const { categories, isLoading } = useCategories();

  // const searchParams = useSearchParams();

  // function handleCategory(slug) {
  //   searchParams.set(slug);
  // }

  // // getCategories();

  // // useEffect(() => {
  // //   async function getCategories() {
  // //     setIsLoading(true);
  // //     const res = await fetch(
  // //       `http://localhost:1337/api/categories?locale=${language}`
  // //     );
  // //     const { data } = await res.json();
  // //     setCategories(data);
  // //     setIsLoading(false);
  // //     console.log(data);
  // //   }
  // //   getCategories();
  // // }, [language]);

  // if (isLoading) return <p>Loading...</p>;
  // console.log(categories);
  // return (
  //   <div>
  //     <Breadcrumb>
  //       <BreadcrumbList>
  //         <BreadcrumbItem>
  //           <BreadcrumbLink href="/">Home</BreadcrumbLink>
  //         </BreadcrumbItem>
  //         <BreadcrumbSeparator />
  //         <BreadcrumbItem>
  //           <BreadcrumbLink href="/components">Components</BreadcrumbLink>
  //         </BreadcrumbItem>
  //         <BreadcrumbSeparator />
  //         <BreadcrumbItem>
  //           <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
  //         </BreadcrumbItem>
  //       </BreadcrumbList>
  //     </Breadcrumb>

  //     <BreadcrumbDynamic />
  //     <div className="grid grid-cols-1 gap-4 lg:grid-cols-5">
  //       {categories.map((cat) => (
  //         <div onClick={()=> handleCategory(cat.slug)}>
  //           <div className="bg-white text-banner-dark p-2 rounded">
  //             <h2 className="font-semibold">{cat.name}</h2>
  //             <p>{cat.description}</p>
  //           </div>
  //         </div>
  //       ))}
  //     </div>
  //   </div>
  // );

  return <p>contact</p>;
}

export default Contact;
