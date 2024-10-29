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
                     aksesuar:"Accessories",
                     head1:"Small touches, big changes.",
                     text1:"We work to make every corner of your home bring you happiness. With you since 2019!",
service:"Our Services",
project:"Our Projects",
text2:"Our goal is to create a happy environment for you.",
project2:"Useful Articles for You",
text3:"We are always ready to support you in all types of home repair",
calculator:"Tile Calculator",
text4:"After entering the intended area or just the length and width, select the appropriate tile size and press the \'Calculate\' button..",
address:"Our Address",
phone:"Our Contact Methods",
email:"Our Email Address",
oclock:"Our Working Hours",
call:"Send a request, we will call you!",
send:"Send"

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
                     aksesuar:"Aksesuarlar",
                     head1:"Kiçik toxunlar, böyük dəyişikliklər",
                     text1:"Evinizin hər güşənin sizin üçün xoşbəxtlik gətirməsi üçün çalışırıq. 2019-cu ildən bəri sizinləyik!",
                     service:"Xidmətlərimiz",
                     project:"Layihələrimiz",
                     text2:"Məqsədimiz sizə xoşbəxt mühit yaratmaqdır.",
                     project2:"Sizə faydalı məqalələr",
                     text3:"Biz sizə ev təmiri ilə bağlı bütün növ dəstəyi etməyə həmişə hazırıq.",
                     calculator:"Plitə hesablayıcı",
                     text4:"Nəzərdə tutulan sahəni və ya sadəcə uzunluq və eni daxil etdikdən sonra uyğun piltə ölçüsünü seçərək \"Hesabla\" düyməsinə basın..",
                     address:"Ünvanımız",
                     phone:"Əlaqə vasitələrimiz",
                     email:"E-poçt ünvanımız",
                     oclock:"İş saatlarımız",
                     call:"İstək göndərin, biz sizə zəng edək!",
                     send:"Göndər"

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

