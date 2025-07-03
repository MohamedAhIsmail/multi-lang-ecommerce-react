import { useTranslation } from "react-i18next";
import ChangeLanguage from "./ChangeLanguage";
import { useLanguage } from "../hooks/useLanguage";

import Product from "./Product";


const products = [
  {
    id: 1,
    title: {
      en: "Intel Core i9-13900K Processor",
      ar: "معالج إنتل كور i9-13900K",
    },
    description: {
      en: "Powerful 24-core processor for extreme performance and multitasking.",
      ar: "معالج قوي بـ 24 نواة للأداء الفائق وتعدد المهام.",
    },
    price: 649,
    image: "https://www.sigma-computer.com/image/products/1751336635.webp",
  },
  {
    id: 2,
    title: {
      en: "NVIDIA GeForce RTX 4090",
      ar: "كارت شاشة نفيديا RTX 4090",
    },
    description: {
      en: "Top-tier graphics card for 4K gaming and creative workloads.",
      ar: "أقوى كارت شاشة للألعاب بدقة 4K والأعمال الإبداعية.",
    },
    price: 1599,
    image: "https://www.sigma-computer.com/image/products/1751336635.webp",
  },
  {
    id: 3,
    title: {
      en: "Corsair Vengeance 32GB DDR5 RAM",
      ar: "رام كورسير فينجانس 32 جيجا DDR5",
    },
    description: {
      en: "High-speed DDR5 memory for next-generation PCs.",
      ar: "رامات DDR5 عالية السرعة لأجهزة الكمبيوتر الحديثة.",
    },
    price: 189,
    image: "https://www.sigma-computer.com/image/products/1751336635.webp",
  },
  {
    id: 4,
    title: {
      en: "Samsung 990 PRO 2TB NVMe SSD",
      ar: "هارد SSD سامسونج 990 برو 2 تيرا",
    },
    description: {
      en: "Blazing-fast PCIe 4.0 NVMe SSD for quick boot and load times.",
      ar: "هارد SSD بسرعة فائقة PCIe 4.0 لتشغيل وتحميل سريع.",
    },
    price: 259,
    image: "https://www.sigma-computer.com/image/products/1751336635.webp",
  },
  {
    id: 5,
    title: {
      en: "ASUS ROG Strix Z790 Motherboard",
      ar: "لوحة أم أسوس ROG Strix Z790",
    },
    description: {
      en: "Premium motherboard with robust power delivery and PCIe 5.0 support.",
      ar: "لوحة أم قوية تدعم PCIe 5.0 مع جودة عالية للطاقة.",
    },
    price: 399,
    image: "https://www.sigma-computer.com/image/products/1751336635.webp",
  },
  {
    id: 6,
    title: {
      en: "Cooler Master Hyper 212 RGB Cooler",
      ar: "مبرد Cooler Master Hyper 212 RGB",
    },
    description: {
      en: "Reliable air cooler with RGB lighting for modern CPUs.",
      ar: "مبرد هوائي موثوق مع إضاءة RGB لمعالجات الجيل الجديد.",
    },
    price: 59,
    image: "https://www.sigma-computer.com/image/products/1751336635.webp",
  },
  {
    id: 7,
    title: {
      en: "Seagate Barracuda 4TB HDD",
      ar: "هارد ديسك سيجيت Barracuda 4 تيرا",
    },
    description: {
      en: "Large capacity hard drive for mass storage needs.",
      ar: "سعة تخزين ضخمة مناسبة للبيانات والألعاب.",
    },
    price: 89,
    image: "https://www.sigma-computer.com/image/products/1751336635.webp",
  },
  {
    id: 8,
    title: {
      en: "Corsair RM850x 850W PSU",
      ar: "باور سبلاي كورسير RM850x 850 وات",
    },
    description: {
      en: "Fully modular power supply with 80+ Gold efficiency.",
      ar: "مزود طاقة بالكامل 80+ Gold موفر للكهرباء.",
    },
    price: 139,
    image: "https://www.sigma-computer.com/image/products/1751336635.webp",
  },
  {
    id: 9,
    title: {
      en: "NZXT H510 Mid Tower Case",
      ar: "كيس NZXT H510 ميد تاور",
    },
    description: {
      en: "Sleek and compact mid-tower case with excellent airflow.",
      ar: "كيسة بتصميم أنيق وتدفق هواء ممتاز.",
    },
    price: 99,
    image: "https://www.sigma-computer.com/image/products/1751336635.webp",
  },
  {
    id: 10,
    title: {
      en: "Logitech MX Master 3 Mouse",
      ar: "ماوس لوجيتك MX Master 3",
    },
    description: {
      en: "Ergonomic wireless mouse with advanced productivity features.",
      ar: "ماوس لاسلكي مريح مع إمكانيات إنتاجية متقدمة.",
    },
    price: 99,
    image: "https://www.sigma-computer.com/image/products/1751336635.webp",
  },
];

function Welcome() {
  const { t } = useTranslation();
  const { language } = useLanguage();

  return (
    <>
      <div>{t("welcomeToReact")}</div>
      <ChangeLanguage />
      <div
        className=""
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        {products.map((product) => (
          <Product product={product} key={product.id} language={language} />
        ))}
      </div>
    </>
  );
}

export default Welcome;
