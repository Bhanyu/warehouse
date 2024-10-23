import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next) // react-i18next modulu ilə birləşdirin
  .init({
    resources: {
      en: {
        translation: {
          welcome: "Welcome",
          description: "This is our website.",
          about: "About Us",
          aboutDesc:"GUYS HERE ABOUTTTT",
          products: "Products",
          portfolio: "Portfolio",
          catalog: "Catalog",
          contact: "Contact",
                    kermogranit: "Kermogranite",
                     fasad: "Fasad Coverings",
                     mermer: "Marble",
                     suse:"Glass",
                     kerpic:"Brick",
                     aksesuar:"Accessories"


        },
      },
      az: {
        translation: {
          welcome: "Xoş gəlmisiniz",
          description: "Bu, bizim saytımızdır.",
          about: "Haqqımızda",
          aboutDesc:"DOSTLAR BURA ABOUTDURRR",
          products: "Məhsullar",
          portfolio: "Portfel",
          catalog: "Kataloq",
          contact: "Əlaqə",
          kermogranit: "Kermogranit",
                    fasad: "Fasad Uzlukler",
                     mermer: "Mermer",
                     suse:"Suse",
                     kerpic:"Kerpic",
                     aksesuar:"Aksesuarlar"

        },
      },
    },
    lng: "en", // başlanğıc dili
    fallbackLng: "en", // əgər dil tapılmasa, fallback dil
    interpolation: {
      escapeValue: false, // React-da artıq escape edilir
    },
    supportedLngs: ['en', 'az'], // dəstəklənən dillər
  });

export default i18n;

