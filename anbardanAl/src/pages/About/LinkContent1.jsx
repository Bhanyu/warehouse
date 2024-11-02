import React from "react";
import { forwardRef } from "react";
const LinkContent1 = forwardRef(({ sections }, ref) => {
  return (
    <div>
      <div ref={sections.section1} style={{ marginTop: "50px" }}>
        <p>
          “Anbardan Al” illərin təcrübəsini daşıyaraq, həm ənənəvi təcrübəni,
          həm də innovasiyanı əsas tutaraq professional komanda, bir - birindən
          keyfiyyətli və fərqli dizayna malik məhsullarla qarşınızdadır!
          5000-dən çox növdə çeşidliliyə malik, keyfiyyəti ilə seçilən
          məhsullarla müştərilərinə 20 ildən artıqdır ki xidmət edən “Anbardan
          Al” dünyaca məhşur “Tabriz Tile”, “Kergres” brendlərinin, eləcə də
          İspaniya, İran, Hindistan, Çin və Türkiyənin 60-dan çox qlobal
          zavodlarının Azərbaycandakı rəsmi nümayəndəsidir. İşimizin hər bir
          mərhələsində Sizin məmnuniyyətiniz bizim əsas prinsipimizdir. Bunun
          üçün də müştərilərimizə individual olaraq bir çox xidmətlərlə yanaşı,
          ödənişsiz dizayn konsultasiyası da təklif edirik. Bununla da sizə
          innovativ və gözoxşayan interyer həlləri təklif etmək üçün həvəsli
          komanda ilə qlobal əməkdaşlıqlar üzərində çalışır və günü-gündən
          fəaliyyət dairəmizi daha da genişləndiririk.
        </p>
      </div>
    
    </div>
  );
});

export default LinkContent1;
