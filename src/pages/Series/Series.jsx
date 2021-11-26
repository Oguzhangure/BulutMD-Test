//REACT IMPORTS
import React from "react";

//COMPONENTS
import Movies from "../Movies/Movies";
function Series() {
  //Burada Movies sayfası çekip type probunu değiştirdim.(Kod tekrarı olmasın diye böyle yaptım fakat bu durum istenmezse movies sayfasındaki if içeren yapıları değitirip benzer kod konulabilir.)
  return <Movies type="series" />;
}

export default Series;
