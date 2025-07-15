import { BASE_URL } from "@/utils/constants";
import axios from "axios";

export async function getProducts(language = "en", populate = "*") {
  try {
    const res = await axios.get(
      `${BASE_URL}/api/products?locale=${language}&populate=${populate}`
    );
    const { data } = res.data;
    return data;
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error;
  }
}

export async function getSingleProduct(slug, language = "en") {
  try {
    const res = await axios.get(
      `${BASE_URL}/api/products?filters[slug][$eq]=${slug}&filters[locale][$eq]=${language}&populate=*`
    );
    const { data } = res.data;
    return data?.[0];
  } catch (error) {
    console.error("Error fetching category:", error);
    throw error;
  }
}
